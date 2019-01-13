import * as React from 'react';
import { Upload, Icon, Modal } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from '../../../node_modules/antd/lib/upload/interface';

import './documentsData.less';

const config = require('config');

interface Props {
  fileList?: string[]
  title: string,
  name: string
}
interface State {
  previewVisible: boolean,
  previewImage: string,
  fileList: UploadFile[],
  dealId: String,
  apiUrl: String
}

export class ImgUpload extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    const dealId = localStorage.getItem('dealId');
    const apiUrl = `${config.services.backend.api}admin/appraisal`;

    this.state = {
      fileList: this.constructFileList(props.fileList) || [],
      previewVisible: false,
      previewImage: '',
      dealId,
      apiUrl
    }
  }

  constructFileList = (fileList) => {
    if(!fileList) return;
    return fileList.map((image, index) => ({
      uid: -1 - index,
      name: image.split('/')[image.split('/').length - 1],
      status: 'done',
      url: image,
      id: image._id,
    }))
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  handleCancel = () => this.setState({ previewVisible: false });

  handleImageChange = (info: UploadChangeParam) => {
    this.setState({fileList: info.fileList});
  }

  render() {
    const { previewVisible, previewImage, dealId, apiUrl } = this.state;
    const { title, name } = this.props;

    return (
      <React.Fragment>
        <Upload className="document-uploader"
          action={`${apiUrl}/appraisalImage`}
          name='appraisalImage'
          data={{ partName: name, dealId }}
          listType="picture-card"
          fileList={this.state.fileList}
          onPreview={this.handlePreview}
          onChange={this.handleImageChange}
        >
          <div>
            <Icon type='plus' className="plus-icon" />
            <div className="ant-upload-text">Hochladen</div>
          </div>
        </Upload>
        <div className="label">{title}</div>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </React.Fragment>
    )
  }
}

