import * as React from 'react';
import { Upload, Icon, Modal } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from '../../../node_modules/antd/lib/upload/interface';

import './documentsData.less';

interface Props {
  fileList?: string[]
  title: string
}
interface State {
  previewVisible: boolean,
  previewImage: string,
  fileList: UploadFile[]
}

export class ImgUpload extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      fileList: this.constructFileList(props.fileList) || [],
      previewVisible: false,
      previewImage: ''
    }
  }

  apiUrl = 'http://127.0.0.1:9000/admin/appraisal';
  dealId = '5bcd9245ce27da436982f68c';

  constructFileList = (fileList) => {
    if(!fileList) return;
    return fileList.map((image, index) => ({
      uid: -1 - index,
      name: image.split('/')[image.split('/').length - 1],
      status: 'done',
      url: image,
      id: image._id,//todo: path fileList as a object with id
    }))
  }

  handlePreview = (file) => {
    console.log('file', file)
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
    const { previewVisible, previewImage } = this.state;
    const { title } = this.props;

    return (
      <React.Fragment>
        <Upload className="document-uploader"
          action={`${this.apiUrl}/appraisalImage`}
          name='appraisalImage'
          data={{ docPart: name, dealId: this.dealId }}
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

