import * as React from 'react';
import { Upload, Icon } from 'antd';
 
interface Props {

}

interface State {
  loading: boolean;
  imageUrl: string;
}

export class DocumentUploadComponent extends React.Component<Props, State> {
  render() {
    const uploadButton = (
      <div>
        <Icon /* type={this.state.loading ? 'loading' : 'plus'} */ type='plus' />
        <div className="ant-upload-text">Hochladen</div>
      </div>
    )
    // const imageUrl = this.state.imageUrl;
    return(
      <div className="document-upload-container">
        <Upload className="document-uploader">
           {/* {imageUrl ? <img src={imageUrl} alt="document" /> : uploadButton }  */}
           {uploadButton}
        </Upload>
        <label>Vorne links</label>
      </ div>
    )
  }
}