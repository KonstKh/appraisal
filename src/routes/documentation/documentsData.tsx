import * as React from 'react';
import { Button, Upload, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './documentsData.less';

interface Props {
  appraisalStep: number;
  previousStep: () => void;
}

export class DocumentsDataComponent extends React.Component<Props, {}> {
  render() {
    return (
      <div className="document-data">
        <h3>Documents Data Form</h3>
        <div className="documentation-form">
          <h4>Fotodokumentation</h4>
          <span>Alle Bilde pro Ansicht hohladen:</span>
          <div className="document-upload-container">
            <Upload className="document-uploader">
              <div>
                <Icon type='plus' />
                <div className="ant-upload-text">Hochladen</div>
              </div>
            </Upload>
            <label>Vorne links</label>
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
            <label>Vorne rechts</label>
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
            <label>Vorne rechts</label>
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
            <label>Vorne rechts</label>
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
            <label>Vorne rechts</label>
          </ div>
        </div>

        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/components/">
              <Button onClick={() => this.props.previousStep()}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next"></div>
        </div>
      </div>
    )
  }
}
