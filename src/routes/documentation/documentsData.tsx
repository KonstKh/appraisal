import * as React from 'react';
import { FormComponentProps } from 'antd/lib/form/Form';
import { Button, Upload, Icon, Modal, Select, Input, Form } from 'antd';
// import { UploadListProps, UploadFile, UploadListType } from '../../node_modules/antd/lib/upload/interface.d.ts';
import { UploadFile } from '../../../node_modules/antd/lib/upload/interface'
import { Link } from 'react-router-dom';
import { DocumentsEntity, DamageDocumentation } from '../../models/documents';
import './documentsData.less';

const Option = Select.Option;

interface Props {
  appraisalStep: number;
  navigateToComponentsForm: () => void;
  saveDocumentationData: (docFormData: any) => void;
  uploadDocImage: (docImage: any) => void;
}

interface State {
  previewVisible: boolean,
  previewImage: string,
  fileList?: UploadFile[],
  images?: any,
  damageComponents: number;
  damages: DamageDocumentation[];
}

class DocumentsDataComponent extends React.Component<Props & FormComponentProps, State> {

  constructor(props) {
    super(props)

    this.state = {
      images: {
        frontLeft: {},
        frontRight: {},
        rearLeft: {},
        rearRigth: {},
        front: {},
        frontBehind: {},
        frontSide: {},
        driverSteering: {},
        driverSeat: {},
        passengerSeat: {},
        centerConsole: {},
        speedometer: {},
        backSeat: {},
        trunk: {},
        rim: {},
        secondSetTires: {},
        misc: {},
        damage_1: {},
        vehicleRegistration: {},
        serviceBook: {},
        bills: {}
      },
      previewVisible: false,
      previewImage: '',
      damageComponents: 1,
      damages: [new DamageDocumentation()]
    }
    
  }

  submitChanges = () => {
    //TODO: check changed values on the form
    const formData = this.state.images;
    this.props.saveDocumentationData(formData);
    this.props.navigateToComponentsForm();
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = (meta) => ({ fileList }) => {
    // this.setState({ [meta]: { fileList } } as any)
    let newState = { ...this.state };
    newState.images[meta].fileList = fileList;
    this.setState(newState);
    //TODO: do we need to save images separetely to redux state?
    this.props.uploadDocImage({ [meta]: newState.images[meta].fileList });
  };

  onSuccessUpload = () => {

  }

  handleCancel = () => this.setState({ previewVisible: false })

  renderUpload = (meta, fileList, label: string) => {
    const { previewVisible, previewImage } = this.state;

    return (
      <div className="document-upload-container">
        <Upload className="document-uploader"
          action=""
          name={meta}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange(meta)}
        >
          <div>
            <Icon type='plus' className="plus-icon" />
            <div className="ant-upload-text">Hochladen</div>
          </div>
        </Upload>
        <div className="label">{label}</div>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }

  handleComponentSelectChange = (component: number) => (event) => {
    //setState  this.setState({ components: { ...this.state.components, [key]: event }});
    console.log('component_selected:', component, event);
  }

  handlePositionSelectChange = (component: number) => (event) => {
    // this.setState({})
    console.log('position_selected:', component, event);
  }

  handleDamageInputChange = (component: number) => (event) => {
    // this.setState({})
    console.log('description', component, event.target.value);
  }

  renderDamageControl = (componentNumber: number) => {

    const { getFieldDecorator } = this.props.form;
    let componentName = `damage_${componentNumber}`;
    let position = `position_${componentNumber}`;
    console.log('positon', position);
    
    return (
      <div className="damage-wrapper">

        {this.renderUpload(componentName, this.state.damages[componentNumber].fileList, `Schadensbild ${componentNumber}`)}

        <div className="damage-pictures-description">
          <div className="selectors">
            <div className="selector-wrapper">
              <div className="label">Bauteil</div>
              <Form.Item>
                {getFieldDecorator(componentName, { initialValue: this.state.damages[componentNumber].name || "Wählen"})(
                  <Select onChange={this.handleComponentSelectChange(componentNumber)}>
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
                {getFieldDecorator(position, { initialValue: this.state.damages[componentNumber].position || "Wählen"})}
                <Select onChange={this.handlePositionSelectChange(componentNumber)}>
                  <Option value="front">Vorne</Option>
                  <Option value="rear">Hinten</Option>
                  <Option value="frontLeft">Vorne links</Option>
                  <Option value="frontRight">Vorne rechts</Option>
                  <Option value="rearLeft">Hinten links</Option>
                  <Option value="rearRight">Hinten rechts</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <label>Art des Schadens</label>
          <Input placeholder="z.B. Hagelschaden" onChange={this.handleDamageInputChange(componentNumber)}></Input>
        </div>
      </div>
    )
  }

  renderDamageComponents = () => {
    let components = []

    for (let i = 0; i < this.state.damageComponents; i++) {
      components.push(this.renderDamageControl(i))
    }
    return components;
  }

  render() {

    const { previewVisible, previewImage, fileList } = this.state;

    return (
      <div className="document-data">
        <div className="documentation-form">
          <h2>Fotodokumentation</h2>
          <span>Alle Bilde pro Ansicht hohladen:</span>

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

          {/* {this.renderDamageControl(0)} */}

          {this.renderDamageComponents()}

          <Button onClick={() => {
            this.setState({ damageComponents: this.state.damageComponents + 1 })
            let newDamages = this.state.damages;
            newDamages.push(new DamageDocumentation());
            this.setState({ damages: newDamages})
            // let control = this.renderDamageControl()
            // ReactDOM.render(control, document.getElementById('additional'))
          }}>Schadensbilder hinzufügen</Button>

          <h2>Fotodokumentation Dokumente</h2>

          {this.renderUpload('vehicleRegistration', this.state.images.vehicleRegistration.fileList, 'Fahrzeugschein')}

          {this.renderUpload('serviceBook', this.state.images.serviceBook.fileList, 'Serviceheft')}

          {this.renderUpload('bills', this.state.images.bills.fileList, 'Rechnungen')}

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
