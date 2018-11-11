import * as React from 'react';
import { Input } from 'antd';

interface Props {
  label: string;
  placeholder: string;
}

export class FormInputComponent extends React.Component<Props, {}> {
  render() {
    return (
      <div className="single-field">
        <label>{this.props.label}</label>
        <Input placeholder={this.props.placeholder}></Input>
      </div>
    )
  }
}
