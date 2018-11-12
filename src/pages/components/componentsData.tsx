import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ComponentControl } from '../../components';
import './componentsData.less';

interface Props {
  appraisalStep: number;
  nextStep: () => void;
  previousStep: () => void;
}

export class ComponentsDataComponent extends React.Component<Props, {}> {
  render() {
    return (
      <React.Fragment>
        <div className="components-form">
          <div className="components-header">
            <h4>Bauteil</h4>
            <h4>Zustand</h4>
          </div>
          <ComponentControl conditionLabel="Kotflügel vorne links"/>
          <ComponentControl conditionLabel="Stoßstange vorne"/>
          <ComponentControl conditionLabel="Tür vorne links" />
          <ComponentControl conditionLabel="Tür hinten links" />
          <ComponentControl conditionLabel="Seitenwand hinten links" />
          <ComponentControl conditionLabel="Stoßstange hinten" />
          <ComponentControl conditionLabel="Heckklappe" />
          <ComponentControl conditionLabel="Seitenwand hinten rechts" />
          <ComponentControl conditionLabel="Tür hinten rechts" />
          <ComponentControl conditionLabel="Tür vorne rechts" />
          <ComponentControl conditionLabel="Kotflügel vorne rechts" />
          <ComponentControl conditionLabel="Motorhaube" />
          <ComponentControl conditionLabel="Dach" />
          
          <ComponentControl conditionLabel="Windschutzscheibe" />

        </div>
        <div className="footer-nav">
          <Link to="/inspection/">
            <Button onClick={() => this.props.previousStep()}>Zurück</Button>
          </Link>
          <Link to="/documentation/">
            <Button onClick={() => this.props.nextStep()}>Weiter</Button>
          </Link>
        </div>
      </ React.Fragment>
    )
  }
}
