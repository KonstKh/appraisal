import * as React from 'react';
import { Steps, Popover } from 'antd';
import { navigationSteps } from '../../common/navigationSteps';
import './header.less';

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
    return Object.keys(navigationSteps).map(key => {
      return <Step key={key} title={navigationSteps[key]} />
    })
  }

  render() {
    return (
      <>
        <div className="header-info">
          <div className="title">Zustandbericht</div>
          <div className="auto-info">{this.props.auto}</div>
          <div className="user-info">Kunde: {this.props.userName}</div>
        </div>
        <div className="steps">
          <Steps current={this.props.currentStep} progressDot={customDot}>
            {this.createSteps()}
          </Steps>
        </div>
      </>
    );
  }
}
