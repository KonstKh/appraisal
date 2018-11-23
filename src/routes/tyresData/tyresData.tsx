import * as React from 'react';
import classnames from 'classnames';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';
import { TyresEntity } from '../../models/tyres';
import './tyresData.less';

const Option = Select.Option;
const FormItem = Form.Item;

interface Props {
  saveTyresData: (formData: any) => void,
  uploadTyresData: (formData: any) => void,
  navigateToEquipmentForm: () => void,
  navigateToVehicleForm: () => void
}

interface State {
  displayAdditionalTires: boolean,
  tyres: TyresEntity
}

enum TyreType {
  'Sommerrifen' = 'Sommerrifen',
  'Winterrifen' = 'Winterrifen',
  'Ganzjaresrifen' = 'Ganzjaresrifen',
  'Nicht vorhanden' = 'Nicht vorhanden'
}

class TyresDataComponent extends React.Component<Props & FormComponentProps, State> {
  constructor(props) {
    super(props);

    this.state = {
      displayAdditionalTires: false,
      tyres: props.tyres
    }
  }

  renderInput = (name: string, label: string, placeholder: string) => {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem hasFeedback label={label} className="single-field">
        {getFieldDecorator(name, { rules: [] })(
          <Input placeholder={placeholder} onChange={this.handleItemChange(name)}></Input>
        )}
      </FormItem>
    )
  }

  toggleAdditionalTyres = (value) => {
    value !== 'Select' ? this.setState({ displayAdditionalTires: true }) : this.setState({ displayAdditionalTires: false })
  }

  handleItemChange = (key) => (event) => {
    if (typeof key === 'object' && key !== null && key.name) { key = key.name; }
    this.setState({ tyres: { ...this.state.tyres, [key]: event.target.value } });
  }

  formSubmit = (e) => {
    const { validateFieldsAndScroll, resetFields,
      getFieldValue, isFieldsTouched } = this.props && this.props.form;

    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }

      this.props.saveTyresData(this.state.tyres);
      this.props.uploadTyresData(this.state.tyres);
      this.props.navigateToEquipmentForm();
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    return (
      <React.Fragment>
        <Form>
          <div className="tyre-data">
            <div className="form-part-left">
              <div className="selector-wrapper">
                <div className="label">Reifenart</div>
                <FormItem>
                  {getFieldDecorator('inspectionCondition', { initialValue: this.state.tyres['inspectionCondition'] || "Wählen" })(
                    <Select onChange={this.handleItemChange('inspectionCondition')}>
                      {Object.keys(TyreType).map((item) => {
                        return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>
              {this.renderInput('frontAxeLeft', '1. Achse – links Hersteller/Bezeichnung', 'z.B.: Pirelli / 245/45r18 88V')}
              {this.renderInput('frontAxeRigth', '1. Achse – rechts Hersteller/Bezeichnung', 'z.B.: Pirelli / 245/45r18 88V')}
              {this.renderInput('rearAxeLeft', '2. Achse – links Hersteller/Bezeichnung', 'z.B.: Pirelli / 245/45r18 88V')}
              {this.renderInput('rearAxeRight', '2. Achse – rechts Hersteller/Bezeichnung', 'z.B.: Pirelli / 245/45r18 88V')}
              {this.renderInput('dotNumber', 'DOT - Nummer', 'z.B.: 4503')}
            </div>
            <div className="form-part-right">
              <div className="selector-wrapper">
                <div className="label">Felgentyp</div>
                <FormItem>
                  {getFieldDecorator('rimType', { initialValue: this.state.tyres['rimType'] || "Wählen" })(
                    <Select onChange={this.handleItemChange('rimType')}>
                      <Option value="Aluminium">Aluminium</Option>
                      <Option value="Stahl">Stahl</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
              {this.renderInput('frontLeftState', 'Zustand:', 'z.B.: 7,31 mm')}
              {this.renderInput('frontRigthState', 'Zustand:', 'z.B.: 7,31 mm')}
              {this.renderInput('rearLeftState', 'Zustand:', 'z.B.: 7,31 mm')}
              {this.renderInput('rearRightState', 'Zustand:', 'z.B.: 7,31 mm')}
            </div>
          </div>
          <hr />
          <div className="tyre-data">
            <div className="form-part-left">
              {this.renderInput('spareWeel', 'Erzatzrad', 'z.B.: Tirefit')}
              {this.renderInput('spareWeelAdditional', 'Zustand Erzatzrad:', 'z.B.: Nicht vorhanden')}
            </div>
            <div className="form-part-right"></div>
          </div>
          <hr />
          <div className="tyre-data">
            <div className="form-part-left">
              <div className="selector-wrapper">
                <label>Zusätzliche Bereifung</label>
                <FormItem>
                  {getFieldDecorator('additionalTyres', { initialValue: this.state.tyres['additionalTyres'] || "Wählen" })(
                    <Select onChange={(tireType) => this.toggleAdditionalTyres(tireType)}>
                      <Option value="Select">Wählen</Option>
                      <Option value="Sommerrifen">Sommerrifen</Option>
                      <Option value="Winterrifen">Winterrifen</Option>
                      <Option value="Ganzjahresreifen">Ganzjahresreifen</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
              <div className={classnames({ hide: !this.state.displayAdditionalTires })}>
                {this.renderInput('spareWeelAdditionalFrontLeft', '1. Achse – links Hersteller/Bezeichnung', 'z.B.: Pirelli / 245/45r18 88V')}
                {this.renderInput('spareWeelAdditionalFrontRight', '1. Achse – rechts Hersteller/Bezeichnung', 'z.B.: Pirelli / 245/45r18 88V')}
                {this.renderInput('spareWeelAdditionalRearLeft', '2. Achse – links Hersteller/Bezeichnung', 'z.B.: Pirelli / 245/45r18 88V')}
                {this.renderInput('spareWeelAdditionalRearRight', '2. Achse – rechts Hersteller/Bezeichnung', 'z.B.: Pirelli / 245/45r18 88V')}
                {this.renderInput('spareWeelAdditionalDotNumber', 'DOT-Nummer', 'z.B.: 4503')}
              </div>
            </div>
            <div className="form-part-right">
              <div className={classnames({ hide: !this.state.displayAdditionalTires })}>
                <div className="selector-wrapper">
                  <div className="label">Felgentyp</div>
                  <FormItem>
                    {getFieldDecorator('additionalRimType', { initialValue: this.state.tyres['additionalRimType'] || "Wählen" })(
                      <Select onChange={this.handleItemChange('additionalRimType')}>
                        <Option value="Aluminium">Aluminium</Option>
                        <Option value="Stahl">Stahl</Option>
                        <Option value="Ohne">Ohne</Option>
                      </Select>
                    )}
                  </FormItem>
                </div>
                {this.renderInput('spareWeelAdditionalLeftFrontState', 'Zustand', 'z.B.: 7,31 mm')}
                {this.renderInput('spareWeelAdditionalRightFrontState', 'Zustand', 'z.B.: 7,31 mm')}
                {this.renderInput('spareWeelAdditionalLeftRearState', 'Zustand', 'z.B.: 7,31 mm')}
                {this.renderInput('spareWeelAdditionalRightRearState', 'Zustand', 'z.B.: 7,31 mm')}
              </div>
            </div>
          </div>
        </Form>
        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/">
              <Button onClick={() => this.props.navigateToVehicleForm()}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next">
            <Link to="/equipment/">
              <Button onClick={(e) => this.formSubmit(e)} className="button-right next">Weiter</Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export const TyresDataForm = Form.create<Props>()(TyresDataComponent);
