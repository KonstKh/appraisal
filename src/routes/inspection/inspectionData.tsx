import * as React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';
import Inspection from '../../models/inspection';
import './inspection.less';

const Option = Select.Option;
const { TextArea } = Input;
const FormItem = Form.Item;

interface Props {
  saveInspectionData: (formData: Inspection) => void;
  uploadInspectionData: (formData: Inspection, dealId: String) => void;
  navigateToComponentsForm: () => void;
  navigateToEquipmentForm: () => void;
}

interface State {
  inspection: Inspection,
  dealId: String
}

class InspectionDataComponent extends React.Component<Props & FormComponentProps, State>{

  constructor(props) {
    super(props)

    const dealId = localStorage.getItem('dealId');

    this.state = {
      inspection: props.inspection,
      dealId
    }
  }
  handleItemChange = (key) => (event) => {
    if (typeof key === 'object' && key !== null && key.name) { key = key.name; }
    this.setState({ inspection: { ...this.state.inspection, [key]: event.target.value } });
  }

  handleSelectorChange = (key) => (event) => {
    this.setState({ inspection: { ...this.state.inspection, [key]: event }});
  }

  renderSelector = (name: string, label: string) => {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="selector-wrapper">
        <label>{label}</label>
        <FormItem>
          {getFieldDecorator(name, { rules: [], initialValue: this.state.inspection[name] || "Wählen" })(
            <Select onChange={this.handleSelectorChange(name)}>
              <Option value="partiallyTested">Eingeschränkt geprüft</Option>
              <Option value="fine">In Ordnung</Option>
              <Option value="notFine">Nicht in Ordnung</Option>
            </Select>
          )}
        </FormItem></div>
    )
  }

  renderSelectorComment = (name: string, placeholder: string) => {
    const { getFieldDecorator } = this.props.form;

    return (
      <FormItem hasFeedback className="single-field">
        {getFieldDecorator(name, { initialValue: this.state.inspection[name] || '' })(
          <Input placeholder={placeholder} onChange={this.handleItemChange(name)}></Input>
        )}
      </FormItem>
    )
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    return (
      <React.Fragment>
        <div className="inspection-form">
          <Form>
            <div className="form-part">
              <h2>Allgemeine Prüfung</h2>
              <div className="selector-wrapper">
                <label>Probefart</label>
                <FormItem>
                  {getFieldDecorator('rimType', { initialValue: this.state.inspection['rimType'] || "Wählen" })(
                    <Select onChange={this.handleSelectorChange('rimType')}>
                      <Option value="Durchgeführt">Durchgeführt</Option>
                      <Option value="Nicht möglich">Nicht möglich</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
              <FormItem hasFeedback className="single-field">
                {getFieldDecorator('testDriveComment', { rules: [] })(
                  <Input onChange={this.handleItemChange('testDriveComment')} placeholder="z.B.: Aufgrund der Bedingungen wurde eine kurze Probefahrt nur mit mäßiger Geschwindigkeit durchgeführt."></Input>
                )}
              </FormItem>
              <div className="selector-wrapper">
                <label>Laufleistung plausibel</label>
                <FormItem>
                  {getFieldDecorator('mileageCorrect', { initialValue: this.state.inspection['mileageCorrect'] || "Wählen" })(
                    <Select onChange={this.handleSelectorChange('mileageCorrect')}>
                      <Option value="Yes">Ja</Option>
                      <Option value="No">Nein</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
              <FormItem hasFeedback label="Hinweis" className="labeled-input">
                {getFieldDecorator('mileageCorrectAdvice', { rules: [] })(
                  <Input onChange={this.handleItemChange('mileageCorrectAdvice')} placeholder="z.B.: starker Luftverlust Reifen v.l."></Input>
                )}
              </FormItem>
            </div>
            <hr />
            <div className="form-part">
              <h2>Unfallschadenprüfung</h2>
              <div className="selector-wrapper">
                <label>Rep. Vorschäden</label>
                <FormItem hasFeedback>
                  {getFieldDecorator('previousDamage', { rules: [] })(
                    <Input placeholder="z.B.: Aufgrund der Bedingungen wurde eine kurze Probefahrt nur mit mäßiger Geschwindigkeit durchgeführt."></Input>
                  )}
                </FormItem>
              </div>
              <FormItem hasFeedback className="single-field">
                {getFieldDecorator('previousDamageDescription', { rules: [] })(
                  <TextArea onChange={this.handleItemChange('previousDamageDescription')} rows={3} placeholder="z.B.: Im Rahmen einer Lackschichtdickenmessung der Karosserieaußenhaut konnten.." />
                )}
              </FormItem>

              <div className="selector-wrapper">
                <label>Lackschichtdickenmessung</label>
                <FormItem>
                  {getFieldDecorator('paintThicknessMeasurement', { rules: [], initialValue: "Wählen" })(
                    <Select onChange={this.handleSelectorChange('paintThicknessMeasurement')}>
                      <Option value="Durchgeführt">Durchgeführt</Option>
                      <Option value="Nicht Durchgeführt">Nicht Durchgeführt</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('paintThicknessMeasurementDescription', { rules: [] })(
                  <TextArea rows={3} onChange={this.handleItemChange('paintThicknessMeasurementDescription')} placeholder="z.B.: Am Fahrzeug wurde eine Lackschichtdickenmessung an der Karosserieaußenhaut durchgeführt..." />
                )}
              </FormItem>
              <FormItem hasFeedback label="Bestehender Unfallschaden" className="labeled-input">
                {getFieldDecorator('existingAccidentDamage', { rules: [] })(
                  <Input onChange={this.handleItemChange('existingAccidentDamage')} placeholder="z.B.: Keine festgestellt"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('existingAccidentDamageDescription', { rules: [] })(
                  <TextArea rows={3} onChange={this.handleItemChange('existingAccidentDamageDescription')} placeholder="z.B.: Am Fahrzeug wurden im Rahmen einer Sichtprüfung der Karosserieaußenhaut ..." />
                )}
              </FormItem>

              <FormItem hasFeedback label="Hinweis" className="labeled-input">
                {getFieldDecorator('generalInspectionAdvice', { rules: [] })(
                  <Input onChange={this.handleItemChange('generalInspectionAdvice')} placeholder="z.B.: ..."></Input>
                )}
              </FormItem>
            </div>
            <hr />
            <div className="form-part">
              <h2>Technikprüfung</h2>
              {this.renderSelector("generator", "Lichtmaschine / Generator")}
              {this.renderSelectorComment("generatorComment", "z.B.: Die Funktion der Lichtmaschine wurde mit Hilfe der Ladekontrollleuchte im Kombiinstrument geprüft.")}

              {this.renderSelector("oilLoose", "Ölverlust")}
              {this.renderSelectorComment("oilLooseComment", "z.B.: Das Fahrzeug konnte auf Ölverlust nur eingeschränkt geprüft werden.")}

              {this.renderSelector("conditioning", "Klimaanlage")}
              {this.renderSelectorComment("conditioningComment", "z.B.: Die Klimaanlage wurde bei der Besichtigung auf Funktion geprüft.")}

              {this.renderSelector("brakes", "Bremsanlage")}
              {this.renderSelectorComment("brakesComment", "z.B.: Die Bremsanlage wurde durch eine Inaugenscheinnahme geprüft.")}

              {this.renderSelector("exhaust", "Auspuffanlage")}
              {this.renderSelectorComment("exhaustComment", "z.B.: Die Auspuffanlage konnte bei der Besichtigung nur eingeschränkt geprüft werden.")}

              {this.renderSelector("shockAbsober", "Stoßdämpfer")}
              {this.renderSelectorComment("shockAbsoberComment", "z.B.: Die Stoßdämpfer konnten bei der Besichtigung nur eingeschränkt geprüft werden.")}

              {this.renderSelector("light", "Lichtanlage")}
              {this.renderSelectorComment("lightComment", "z.B.: Die Lichtanlage war zum Besichtigungszeitpunkt in Ordnung.")}

              {this.renderSelector("clutch", "Kupplung")}
              {this.renderSelectorComment("clutchComment", "z.B.: Das Fahrzeug verfügt über ein Automatikgetriebe.")}

              {this.renderSelector("engine", "Motorlauf")}
              {this.renderSelectorComment("engineComment", "z.B.: Ein Probelauf des Motors wurde durchgeführt. Dabei traten keine akustischen sowie visuellen Mängel auf.")}

              {this.renderSelector("transmission", "Getriebe")}
              {this.renderSelectorComment("transmissionComment", "z.B.: Das Getriebe konnte im Rahmen der Probefahrt eingeschränkt geprüft werden.")}

              {this.renderSelectorComment("note", "z.B.: 2. Satz Sommerreifen auf Alufelgen wird mit verkauft.")}
            </div>
          </Form>
        </div>
        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/equipment/">
              <Button onClick={() => this.props.navigateToEquipmentForm()}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next">
            <Link to="/components/">
              <Button onClick={() => this.formSubmit()} className="button-right next">Weiter</Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }

  formSubmit(): any {
    const { validateFieldsAndScroll, resetFields,
      getFieldValue, isFieldsTouched } = this.props && this.props.form;

    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }

      this.props.saveInspectionData(this.state.inspection);
      this.props.uploadInspectionData(this.state.inspection, this.state.dealId);

      this.props.navigateToComponentsForm();
    });
  }
}

export const InspectionDataForm = Form.create<Props>()(InspectionDataComponent);
