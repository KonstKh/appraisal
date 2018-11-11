import * as React from 'react';
import { Steps, Popover } from 'antd';
import { appraisalSteps } from '../../common/appraisalSteps';

const Step = Steps.Step;
const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);

interface Props {
  auto: string;
  userName: string;
  currentStep: number;
}

export class HeaderComponent extends React.Component<Props, {}> {

  createSteps = () => {
    return Object.keys(appraisalSteps).map(key => {
      return <Step key={key} title={appraisalSteps[key]} />
    })
  }

  render() {
    return (
      <>
        <div className="header-user-info">
          <h2>Zustandbericht</h2>
          <span>{this.props.auto}</span><br />
          <span>Kunde: {this.props.userName}</span>
        </div>
        <Steps current={this.props.currentStep} progressDot={customDot}>
          {this.createSteps()}
        </Steps>
      </>
    );
  }
}
