import * as React from 'react';
import { Button, Upload, Icon, Modal } from 'antd';
// import { UploadListProps, UploadFile, UploadListType } from '../../node_modules/antd/lib/upload/interface.d.ts';
import { UploadFile } from '../../../node_modules/antd/lib/upload/interface'
import { Link } from 'react-router-dom';
import './documentsData.less';

interface Props {
  appraisalStep: number;
  navigateToComponentsForm: () => void;
}

interface State {
  previewVisible: boolean,
  previewImage: string,
  fileList?: UploadFile[]
}

export class DocumentsDataComponent extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.state = {
      previewVisible: false,
      previewImage: '',
    }
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList });

  handleCancel = () => this.setState({ previewVisible: false })

  render() {

    const { previewVisible, previewImage, fileList } = this.state;

    return (
      <div className="document-data">
        <div className="documentation-form">
          <h2>Fotodokumentation</h2>
          <span>Alle Bilde pro Ansicht hohladen:</span>
          <div className="document-upload-container">
            <Upload className="document-uploader"
              action=""
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              <div>
                <Icon type='plus' className="plus-icon" />
                <div className="ant-upload-text">Hochladen</div>
              </div>
            </Upload>
            <div className="label">Vorne links</div>
          </ div>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>

        <div className="documentation-form">
          <div className="document-upload-container">
            <Upload className="document-uploader" 
              action=""
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              <div>
                <Icon type='plus' />
                <div className="ant-upload-text">Hochladen</div>
              </div>
            </Upload>
            <div className="label">Vorne rechts</div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
          </ div>
        </div>

        <div className="documentation-form">
          <div className="document-upload-container">
            <Upload className="document-uploader">
              <div>
                <Icon type='plus' />
                <div className="ant-upload-text">Hochladen</div>
              </div>
            </Upload>
            <div className="label">Hinten links</div>
          </ div>
        </div>

        <div className="documentation-form">
          <div className="document-upload-container">
            <Upload className="document-uploader">
              <div>
                <Icon type='plus' />
                <div className="ant-upload-text">Hochladen</div>
              </div>
            </Upload>
            <div className="label">Hinten rechts</div>
          </ div>
        </div>

        <div className="documentation-form">
          <div className="document-upload-container">
            <Upload className="document-uploader">
              <div>
                <Icon type='plus' />
                <div className="ant-upload-text">Hochladen</div>
              </div>
            </Upload>
            <div className="label">Frontal vorne</div>
          </ div>
        </div>

        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/components/">
              <Button onClick={() => this.props.navigateToComponentsForm()}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next"></div>
        </div>
      </div>
    )
  }
}
