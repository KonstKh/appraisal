import * as React from 'react';
import { FormComponentProps } from 'antd/lib/form/Form';
import { Button, Upload, Icon, Modal, Select, Input, Form } from 'antd';
import { Link } from 'react-router-dom';
import { Documents, DamageDocumentation } from '../../models/documents';
import { ImgUpload } from './Upload';
import './documentsData.less';

const config = require('config');

const Option = Select.Option;

interface Props {
  appraisalStep: number;
  documents: { damages: {}, images: {} },
  navigateToComponentsForm: () => void;
  saveDocumentationData: (docFormData: Documents) => void;
  uploadDocImage: (docImage: any, meta: any) => void;
  updateDamageDocs: (damageDoc: DamageDocumentation) => void;
}

interface State {
  previewVisible: boolean,
  previewImage: string,
  images?: any,
  damages: DamageDocumentation[],
  dealId: String,
  apiUrl: String
}

class DocumentsDataComponent extends React.Component<Props & FormComponentProps, State> {

  constructor(props) {
    super(props)

    const dealId = localStorage.getItem('dealId');
    const docs = Object.keys(props.documents).length === 0 ? new Documents() : props.documents;

    this.state = { 
      previewVisible: docs.previewVisible,
      previewImage: docs.previewImage,
      images: docs.images,
      damages: docs.damages,
      dealId,
      apiUrl: `${config.services.backend.api}admin/appraisal`
    }
  }

  submitChanges = () => {
    //TODO: check changed values on the form
    const formData = this.state;

    this.props.saveDocumentationData(formData as Documents);
    this.props.navigateToComponentsForm();
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleCancel = () => this.setState({ previewVisible: false })


  handleComponentSelectChange = (component: number) => (event) => {
    let updatedDamages = this.state.damages;
    updatedDamages[component].name = event;
    this.setState({ damages: updatedDamages });
    // this.props.updateDamageDocs(this.state);
  }

  handlePositionSelectChange = (component: number) => (event) => {
    let updatedDamages = this.state.damages;
    updatedDamages[component].position = event;
    this.setState({ damages: updatedDamages });
    // this.props.updateDamageDocs(this.state);
  }

  handleDamageInputChange = (component: number) => (event) => {
    let updatedDamages = this.state.damages;
    updatedDamages[component].description = event.target.value;
    this.setState({ damages: updatedDamages });
    // this.props.updateDamageDocs(this.state);
  }

  handleDamageImageChange = (index) => {
    return ({ fileList }) => {
      this.setState((prevState) => {
        prevState.damages[index].fileList = fileList;
        return prevState;
      });
    }
  }

  renderDamageUpload = (name, fileList, label, index) => {

    const { previewVisible, previewImage, dealId, apiUrl } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="document-upload-container">
        <Form.Item>
          {getFieldDecorator(name as string, { initialValue: fileList || null })(
            <Upload className="document-uploader"
              action={`${apiUrl}/appraisalImage`}
              name='appraisalImage'
              data={{ partName: name, dealId: dealId }}
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleDamageImageChange(index)}
            >
              <div>
                <Icon type='plus' className="plus-icon" />
                <div className="ant-upload-text">Hochladen</div>
              </div>
            </Upload>
          )}
        </Form.Item>
        <div className="label">{label}</div>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>

      </div>
    )
  }

  handleDamageGenButtonClick = () => {
    let newDamages = this.state.damages;
    newDamages.push(new DamageDocumentation());
    this.setState({ damages: newDamages })
  }

  renderDamageControl = (damage: any, index) => {
    const { getFieldDecorator } = this.props.form;
    const componentName = `damage_${index}`
    return (
      <div className="damage-wrapper" key={index}>

        {this.renderDamageUpload(componentName, damage.fileList, `Schadensbild ${index + 1}`, index)}

        <div className="damage-pictures-description">
          <div className="selectors">
            <div className="selector-wrapper">
              <div className="label">Bauteil</div>
              <Form.Item>
                {getFieldDecorator(`name_${index}`, { initialValue: damage.name || "Wählen" })(
                  <Select onChange={this.handleComponentSelectChange(index)}>
                    <Option value="wing">Kotflügel</Option>
                    <Option value="bumper">Stoßstange</Option>
                    <Option value="door">Tür</Option>
                    <Option value="sidewall">Seitenwand</Option>
                    <Option value="bonnet">Motorhaube</Option>
                    <Option value="trunk">Heckklappe</Option>
                    <Option value="roof">Dach</Option>
                    <Option value="windshield">Windschutzscheibe</Option>
                  </Select>
                )}
              </Form.Item>
            </div>
            <div className="selector-wrapper">
              <div className="label">Stelle</div>
              <Form.Item>
                {getFieldDecorator(`position_${index}`, { initialValue: this.state.damages[index].position || "Wählen" })(
                  <Select onChange={this.handlePositionSelectChange(index)}>
                    <Option value="front">Vorne</Option>
                    <Option value="rear">Hinten</Option>
                    <Option value="frontLeft">Vorne links</Option>
                    <Option value="frontRight">Vorne rechts</Option>
                    <Option value="rearLeft">Hinten links</Option>
                    <Option value="rearRight">Hinten rechts</Option>
                  </Select>
                )}
              </Form.Item>
            </div>
          </div>
          <label>Art des Schadens</label>
          <div className="selectors">
            <Form.Item>
              {getFieldDecorator(`description_${index}`, { initialValue: damage.description || '' })(
                <Input placeholder="z.B. Hagelschaden" onChange={this.handleDamageInputChange(index)}></Input>
              )}
            </Form.Item>
          </div>
        </div>
      </div>
    )
  }

  renderDamageComponents = () => this.state.damages.map(this.renderDamageControl);

  render() {

    const { getFieldDecorator } = this.props.form;

    const carParts = [
      { name: 'frontLeft', title: 'Vorne links' },
      { name: 'frontRight', title: 'Vorne rechts' },
      { name: 'rearLeft', title: 'Hinten links' },
      { name: 'rearRigth', title: 'Hinten rechts' },
      { name: 'front', title: 'Frontal vorne' },
      { name: 'frontBehind', title: 'Frontal hinten' },
      { name: 'frontSide', title: 'Frontal Seite' },
      { name: 'driverSteering', title: 'Fahrerseite mit Lenkgrad' },
      { name: 'driverSeat', title: 'Fahrersitz' },
      { name: 'passengerSeat', title: 'Beifahrersitz' },
      { name: 'centerConsole', title: 'Mittelkonsole' },
      { name: 'speedometer', title: 'Tacho' },
      { name: 'backSeat', title: 'Rückbank' },
      { name: 'trunk', title: 'Kofferraum' },
      { name: 'rim', title: 'Felge' },
      { name: 'secondSetTires', title: 'zweiter satz reifen' },
      { name: 'misc', title: 'sonstiges' },
    ];

    const docParts = [
      { name: 'vehicleRegistration', title: 'Fahrzeugschein' },
      { name: 'serviceBook', title: 'Serviceheft' },
      { name: 'bills', title: 'Rechnungen' }
    ]

    return (
      <div className="document-data">
        <div className="documentation-form">
          <h2>Fotodokumentation</h2>
          <span>Alle Bilde pro Ansicht hohladen:</span>
          <Form encType="multipart/form-data">
            {carParts.map((item, index) => {
              return <Form.Item key={index}>
                {getFieldDecorator(item.name)(<ImgUpload title={item.title} name={item.name}></ImgUpload>)}
              </Form.Item>
            })}

            <h2>Fotodokumentation Schadensbilder</h2>
            {this.renderDamageComponents()}

            <Button type="primary" onClick={this.handleDamageGenButtonClick}>Schadensbilder hinzufügen</Button>

            <h2>Fotodokumentation Dokumente</h2>
            {docParts.map((item, index) => {
              return <Form.Item key={index}>
                {getFieldDecorator(item.name)(<ImgUpload title={item.title} name={item.name}></ImgUpload>)}
              </Form.Item>
            })}
          </Form>
        </div>
        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/components/">
              <Button onClick={this.submitChanges}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next">
            {/* <Button>Go to the summary page</Button> */}
          </div>
        </div>
      </div>
    )
  }
}

export const DocumentDataForm = Form.create<Props>()(DocumentsDataComponent);
