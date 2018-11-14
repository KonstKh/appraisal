import * as React from 'react';
import { Input, Form } from 'antd';
import './formInput.less';
import {FormComponentProps} from 'antd/lib/form/Form';

const FormItem = Form.Item;

interface Props {
  label: string;
  placeholder: string;
}

export class FormInputComponent extends React.Component<Props & FormComponentProps, {}> {
  
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    return (
      <div className="single-field">
        {/* <label>{this.props.label}</label>
        <Input placeholder={this.props.placeholder}></Input> */}
        <FormItem hasFeedback>
          {getFieldDecorator(this.props.label, {})(<Input placeholder={this.props.placeholder}></Input>)}
        </FormItem>
      </div>
    )
  }
}
