import * as React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';
import './tyresData.less';

const Option = Select.Option;
const FormItem = Form.Item;

interface Props {
  appraisalStep: number;
  nextStep: () => void;
  previousStep: () => void;
}

class TyresDataComponent extends React.Component<Props & FormComponentProps, {}> {

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    return (
      <React.Fragment>
        <Form>
          <div className="tyre-data">
            <div className="form-part-left">
              <FormItem hasFeedback label="Reifenart" className="single-field">
                {getFieldDecorator('tire', { rules: [] })(
                  <Input placeholder="z.B.: Sommerreifen"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="1. Achse – links Hersteller/Bezeichnung" className="single-field">
                {getFieldDecorator('firstAxeLeft', { rules: [] })(
                  <Input placeholder="z.B.: Pirelli / 245/45r18 88V"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="1. Achse – rechts Hersteller/Bezeichnung" className="single-field">
                {getFieldDecorator('firstAxeRigth', { rules: [] })(
                  <Input placeholder="z.B.: Pirelli / 245/45r18 88V"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="2. Achse – links Hersteller/Bezeichnung" className="single-field">
                {getFieldDecorator('secondAxeLeft', { rules: [] })(
                  <Input placeholder="z.B.: Pirelli / 245/45r18 88V"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="2. Achse – rechts Hersteller/Bezeichnung" className="single-field">
                {getFieldDecorator('secondAxeRight', { rules: [] })(
                  <Input placeholder="z.B.: Pirelli / 245/45r18 88V"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="DOT - Nummer" className="single-field">
                {getFieldDecorator('dotNumber', { rules: [] })(
                  <Input placeholder="z.B.: 4503"></Input>
                )}
              </FormItem>
            </div>
            <div className="form-part-right">
              <div className="selector-wrapper">
                <label>Felgentyp</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="Zustand:" className="single-field">
                {getFieldDecorator('state', { rules: [] })(
                  <Input placeholder="z.B.: 7,31 mm"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Zustand:" className="single-field">
                {getFieldDecorator('state1', { rules: [] })(
                  <Input placeholder="z.B.: 7,31 mm"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Zustand:" className="single-field">
                {getFieldDecorator('state2', { rules: [] })(
                  <Input placeholder="z.B.: 7,31 mm"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Zustand:" className="single-field">
                {getFieldDecorator('state3', { rules: [] })(
                  <Input placeholder="z.B.: 7,31 mm"></Input>
                )}
              </FormItem>
            </div>
          </div>
          <hr />
          <div className="tyre-data">
            <div className="form-part-left">
            <FormItem hasFeedback label="Erzatzrad" className="single-field">
                {getFieldDecorator('spareWeel', { rules: [] })(
                  <Input placeholder="z.B.: Tirefit"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Zustand Erzatzrad" className="single-field">
                {getFieldDecorator('spareWeelAdditional', { rules: [] })(
                  <Input placeholder="z.B.: Nicht vorhanden"></Input>
                )}
              </FormItem>
            </div>
            <div className="form-part-right"></div>
          </div>
          <hr />
          <div className="tyre-data">
            <div className="form-part-left">
              <div className="selector-wrapper">
                <label>Zusätzliche Bereifung</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
            </div>
            <div className="form-part-right"></div>
          </div>
        </Form>
        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/">
              <Button onClick={() => this.props.previousStep()}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next">
            <Link to="/equipment/">
              <Button onClick={() => this.props.nextStep()} className="button-right next">Weiter</Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export const TyresDataForm = Form.create<Props>()(TyresDataComponent);
