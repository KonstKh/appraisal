import * as React from 'react';
import { FormComponentProps } from 'antd/lib/form/Form';
import { Button, Upload, Icon, Modal, Select, Input, Form } from 'antd';
// import { UploadListProps, UploadFile, UploadListType } from '../../node_modules/antd/lib/upload/interface.d.ts';
import { Link } from 'react-router-dom';
import { Documents, DamageDocumentation } from '../../models/documents';
import './documentsData.less';

const Option = Select.Option;

interface Props {
  appraisalStep: number;
  documents: { damages: {}, images: {}},
  navigateToComponentsForm: () => void;
  saveDocumentationData: (docFormData: Documents) => void;
  uploadDocImage: (docImage: any, meta: any) => void;
  updateDamageDocs: (damageDoc: DamageDocumentation) => void;
}

interface State {
  previewVisible: boolean,
  previewImage: string,
  images?: any,
  damageComponents: number;
  damages: DamageDocumentation[];
}

class DocumentsDataComponent extends React.Component<Props & FormComponentProps, State> {
  
  constructor(props) {
    super(props)

    console.log('props', props.documents);
    this.state = Object.keys(props.documents).length === 0 ?new Documents() : props.documents;

  }

  apiUrl = 'http://127.0.0.1:9000/admin/appraisal'; //TODO: extract to config
  dealId = '5bcd9245ce27da436982f68c';

  submitChanges = () => {
    //TODO: check changed values on the form
    const formData  = this.state;

    this.props.saveDocumentationData(formData as Documents);
    this.props.navigateToComponentsForm();
  }

  handlePreview = (file) => {
    console.log('file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleImageChange = (name) => {
    return ({ fileList }) => {
      this.setState((prevState) => {
        return {
          ...prevState,
          images: {
            ...prevState.images,
            [name]: {
              ...prevState.images[name],
              fileList
            }
          }
        }
      });
  }};

  onSuccessUpload = () => {

  }

  handleCancel = () => this.setState({ previewVisible: false })

  renderUpload = (name, fileList, label: string) => {
    const { previewVisible, previewImage } = this.state;
    const { getFieldDecorator } = this.props.form;

    if(this.state.images[name] === undefined){
      this.state.images[name] = {}
    }
    return (
      <div className="document-upload-container">
      <Form.Item>
        {getFieldDecorator(name as string, { initialValue: fileList || null})(
            <Upload className="document-uploader"
              action={`${this.apiUrl}/appraisalImage`}
              name='appraisalImage'
              data={{docPart: name, dealId: this.dealId}} //todo: set hardcoded DealId to th real one
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleImageChange(name)}
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

  handleComponentSelectChange = (component: number) => (event) => {
    let updatedDamages = this.state.damages;
    updatedDamages[component].name = event;
    this.setState({ damages: updatedDamages});
    // this.props.updateDamageDocs(this.state);
  }

  handlePositionSelectChange = (component: number) => (event) => {
    let updatedDamages = this.state.damages;
    updatedDamages[component].position = event;
    this.setState({ damages: updatedDamages});
    // this.props.updateDamageDocs(this.state);
  }

  handleDamageInputChange = (component: number) => (event) => {
    let updatedDamages = this.state.damages;
    updatedDamages[component].description = event.target.value;
    this.setState({damages: updatedDamages});
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

    const { previewVisible, previewImage } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="document-upload-container">
      <Form.Item>
        {getFieldDecorator(name as string, { initialValue: fileList || null})(
            <Upload className="document-uploader"
              action={`${this.apiUrl}/appraisalImage`}
              name='appraisalImage'
              data={{docPart: name, dealId: this.dealId }} //todo: set hardcoded DealId to th real one
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
                {getFieldDecorator(`name_${index}`, { initialValue: damage.name || "Wählen"})(
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
              {getFieldDecorator(`description_${index}`, {initialValue: damage.description || ''})(
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

    const { previewVisible, previewImage } = this.state;
    // const { images } = this.props.documents;
    // console.log('props', images)

    return (
      <div className="document-data">
        <div className="documentation-form">
          <h2>Fotodokumentation</h2>
          <span>Alle Bilde pro Ansicht hohladen:</span>
          <Form encType="multipart/form-data">

          {this.renderUpload('frontLeft', this.state.images.frontLeft.fileList, 'Vorne links')}

          {this.renderUpload('frontRight', this.state.images.frontRight.fileList, 'Vorne rechts')}

          {this.renderUpload('rearLeft', this.state.images.rearLeft.fileList, 'Hinten links')}

          {this.renderUpload('rearRigth', this.state.images.rearRigth.fileList, 'Hinten rechts')}

          {this.renderUpload('front', this.state.images.front.fileList, 'Frontal vorne')}

          {this.renderUpload('frontBehind', this.state.images.frontBehind.fileList, 'Frontal hinten')}

          {this.renderUpload('frontSide', this.state.images.frontSide.fileList, 'Frontal Seite')}

          {this.renderUpload('driverSteering', this.state.images.driverSteering.fileList, 'Fahrerseite mit Lenkgrad')}

          {this.renderUpload('driverSeat', this.state.images.driverSeat.fileList, 'Fahrersitz')}

          {this.renderUpload('passengerSeat', this.state.images.passengerSeat.fileList, 'Beifahrersitz')}

          {this.renderUpload('centerConsole', this.state.images.centerConsole.fileList, 'Mittelkonsole')}

          {this.renderUpload('speedometer', this.state.images.speedometer.fileList, 'Tacho')}

          {this.renderUpload('backSeat', this.state.images.backSeat.fileList, 'Rückbank')}

          {this.renderUpload('trunk', this.state.images.trunk.fileList, 'Kofferraum')}

          {this.renderUpload('rim', this.state.images.rim.fileList, 'Felge')}

          {this.renderUpload('secondSetTires', this.state.images.secondSetTires.fileList, 'zweiter satz reifen')}

          {this.renderUpload('misc', this.state.images.misc.fileList, 'sonstiges')}

          <h2>Fotodokumentation Schadensbilder</h2>

          {this.renderDamageComponents()}

          <Button type="primary" onClick={() => {
            this.setState({ damageComponents: this.state.damageComponents + 1 })
            let newDamages = this.state.damages;
            newDamages.push(new DamageDocumentation());
            this.setState({ damages: newDamages})
          }}>Schadensbilder hinzufügen</Button>

          <h2>Fotodokumentation Dokumente</h2>

          {this.renderUpload('vehicleRegistration', this.state.images.vehicleRegistration.fileList, 'Fahrzeugschein')}

          {this.renderUpload('serviceBook', this.state.images.serviceBook.fileList, 'Serviceheft')}

          {this.renderUpload('bills', this.state.images.bills.fileList, 'Rechnungen')}
        </Form>
        </div>
        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/components/">
              <Button onClick={this.submitChanges}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next">
            {/* <Button>Generate PDF document</Button> */}
          </div>
        </div>
      </div>
    )
  }
}

export const DocumentDataForm = Form.create<Props>()(DocumentsDataComponent);
