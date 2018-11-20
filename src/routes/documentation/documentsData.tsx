import * as React from 'react';
import { Button, Upload, Icon, Modal, Select, Input } from 'antd';
// import { UploadListProps, UploadFile, UploadListType } from '../../node_modules/antd/lib/upload/interface.d.ts';
import { UploadFile } from '../../../node_modules/antd/lib/upload/interface'
import { Link } from 'react-router-dom';
import './documentsData.less';

const Option = Select.Option;

interface Props {
  appraisalStep: number;
  navigateToComponentsForm: () => void;
  saveDocumentationData: (docFormData: any) => void;
}

interface State {
  previewVisible: boolean,
  previewImage: string,
  fileList?: UploadFile[],
  images?: any
}

export class DocumentsDataComponent extends React.Component<Props, State> {

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
  };

  handleCancel = () => this.setState({ previewVisible: false })

  renderUpload = (meta, fileList) => {
    return (
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
    )
  }

  renderDamageControl = () => {
    return (
      <div className="damage-wrapper">
        <div className="document-upload-container">
          {this.renderUpload('damage_1', this.state.images.damage_1.fileList)}
          <div className="label">Schadensbild 1</div>
          <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
          </Modal>
        </ div>

        <div className="damage-pictures-description">
          <div className="selectors-wrapper">
            <label>Bauteil</label>
            <Select defaultValue="Wählen">
              <Option value="Wählen">Wählen</Option>
              <Option value="Kotflügel">Kotflügel</Option>
              <Option value="Stoßstange">Stoßstange</Option>
              <Option value="Tür">Tür</Option>
              <Option value="Seitenwand">Seitenwand</Option>
              <Option value="Motorhaube">Motorhaube</Option>
              <Option value="Heckklappe">Heckklappe</Option>
              <Option value="Dach">Dach</Option>
              <Option value="Windschutzscheibe">Windschutzscheibe</Option>
            </Select>
            <label>Stelle</label>
            <Select defaultValue="Wählen">
              <Option value="Wählen">Wählen</Option>
              <Option value="Vorne">Vorne</Option>
              <Option value="Hinten">Hinten</Option>
              <Option value="Vorne links">Vorne links</Option>
              <Option value="Vorne rechts">Vorne rechts</Option>
              <Option value="Hinten links">Hinten links</Option>
              <Option value="Hinten rechts">Hinten rechts</Option>
            </Select>
          </div>
          <label htmlFor="">Art des Schadens</label>
          <Input placeholder="z.B. Hagelschaden"></Input>
          {/* // TODO: add another line at the bottom of this component - [suggestion]: use ant table instead?  */}
          {/* <button onClick={this.renderDamageControl}>Add noch ein linie</button> */}
        </div>
      </div>
    )
  }

  render() {

    const { previewVisible, previewImage, fileList } = this.state;

    return (
      <div className="document-data">
        <div className="documentation-form">
          <h2>Fotodokumentation</h2>
          <span>Alle Bilde pro Ansicht hohladen:</span>

          <div className="document-upload-container">
            {this.renderUpload('frontLeft', this.state.images.frontLeft.fileList)}
            <div className="label">Vorne links</div>
          </ div>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>

          <div className="document-upload-container">
            {this.renderUpload('frontRight', this.state.images.frontRight.fileList)}
            <div className="label">Vorne rechts</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('rearLeft', this.state.images.rearLeft.fileList)}
            <div className="label">Hinten links</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('rearRigth', this.state.images.rearRigth.fileList)}
            <div className="label">Hinten rechts</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('front', this.state.images.front.fileList)}
            <div className="label">Frontal vorne</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('frontBehind', this.state.images.frontBehind.fileList)}
            <div className="label">Frontal hinten</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('frontSide', this.state.images.frontSide.fileList)}
            <div className="label">Frontal Seite</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('driverSteering', this.state.images.driverSteering.fileList)}
            <div className="label">Fahrerseite mit Lenkgrad</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('driverSeat', this.state.images.driverSeat.fileList)}
            <div className="label">Fahrersitz</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('passengerSeat', this.state.images.passengerSeat.fileList)}
            <div className="label">Beifahrersitz</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('centerConsole', this.state.images.centerConsole.fileList)}
            <div className="label">Mittelkonsole</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('speedometer', this.state.images.speedometer.fileList)}
            <div className="label">Tacho</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('backSeat', this.state.images.backSeat.fileList)}
            <div className="label">Rückbank</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('trunk', this.state.images.trunk.fileList)}
            <div className="label">Kofferraum</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('rim', this.state.images.rim.fileList)}
            <div className="label">Felge</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('secondSetTires', this.state.images.secondSetTires.fileList)}
            <div className="label">zweiter satz reifen</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('misc', this.state.images.misc.fileList)}
            <div className="label">sonstiges</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <h2>Fotodokumentation Schadensbilder</h2>

          {this.renderDamageControl()}

          <h2>Fotodokumentation Dokumente</h2>
          <div className="document-upload-container">
            {this.renderUpload('vehicleRegistration', this.state.images.vehicleRegistration.fileList)}
            <div className="label">Fahrzeugschein</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('serviceBook', this.state.images.serviceBook.fileList)}
            <div className="label">Serviceheft</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>

          <div className="document-upload-container">
            {this.renderUpload('bills', this.state.images.bills.fileList)}
            <div className="label">Rechnungen</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </ div>
        </div>

        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/components/">
              <Button onClick={this.submitChanges}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next"></div>
        </div>
      </div>
    )
  }
}
