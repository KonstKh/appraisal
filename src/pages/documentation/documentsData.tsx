import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { DocumentUploadComponent } from '../../components/';
import './documentsData.less';

interface Props {
  appraisalStep: number;
  previousStep: () => void;
}

export class DocumentsDataComponent extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h3>Documents Data Form</h3>
        <div className="documentation-form">
          <h4>Fotodokumentation</h4>
          <span>Alle Bilde pro Ansicht hohladen:</span>
          <DocumentUploadComponent />
        </div>
        <div className="footer-nav">
          <Link to="/components/">
            <Button onClick={() => this.props.previousStep()}>Zurück</Button>
          </Link>
        </div>
      </div>
    )
  }
}
