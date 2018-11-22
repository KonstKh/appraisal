import * as React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';
import './inspection.less';

const Option = Select.Option;
const { TextArea } = Input;
const FormItem = Form.Item;

interface Props {
  saveInspectionData: (formData: any) => void;
  uploadInspectionData: (formData: any) => void;
  navigateToComponentsForm: () => void;
  navigateToEquipmentForm: () => void;
}

class InspectionDataComponent extends React.Component<Props & FormComponentProps, {}>{

  renderSelector = (formName: string, label: string) => {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="selector-wrapper">
        <label>{label}</label>
        <FormItem>
          {getFieldDecorator(formName, { rules: [], initialValue: "Wählen" })(
            <Select>
              <Option value="Eingeschränkt geprüft">Eingeschränkt geprüft</Option>
              <Option value="In Ordnung">In Ordnung</Option>
              <Option value="Nicht in Ordnung">Nicht in Ordnung</Option>
            </Select>
          )}
        </FormItem></div>
    )
  }

  renderSelectorComment = (formName: string, label: string) => {
    const { getFieldDecorator } = this.props.form;

    return (
      <FormItem hasFeedback label="" className="single-field">
        {getFieldDecorator(formName, { rules: [] })(
          <Input placeholder={label}></Input>
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
                  {getFieldDecorator('rimType', { rules: [], initialValue: "Wählen" })(
                    <Select>
                      <Option value="Durchgeführt">Durchgeführt</Option>
                      <Option value="Nicht möglich">Nicht möglich</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
              <FormItem hasFeedback className="single-field">
                {getFieldDecorator('testDriveComment', { rules: [] })(
                  <Input placeholder="z.B.: Aufgrund der Bedingungen wurde eine kurze Probefahrt nur mit mäßiger Geschwindigkeit durchgeführt."></Input>
                )}
              </FormItem>
              <div className="selector-wrapper">
                <label>Laufleistung plausibel</label>
                <FormItem>
                  {getFieldDecorator('mileageCorrect', { rules: [], initialValue: "Wählen" })(
                    <Select>
                      <Option value="Yes">Ja</Option>
                      <Option value="No">Nein</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
              <FormItem hasFeedback label="Hinweis" className="single-field">
                {getFieldDecorator('mileageCorrectAdvice', { rules: [] })(
                  <Input placeholder="z.B.: starker Luftverlust Reifen v.l."></Input>
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
                  <TextArea rows={3} placeholder="z.B.: Im Rahmen einer Lackschichtdickenmessung der Karosserieaußenhaut konnten.." />
                )}
              </FormItem>

              <div className="selector-wrapper">
                <label>Lackschichtdickenmessung</label>
                <FormItem>
                  {getFieldDecorator('rimType', { rules: [], initialValue: "Wählen" })(
                    <Select>
                      <Option value="Durchgeführt">Durchgeführt</Option>
                      <Option value="Nicht Durchgeführt">Nicht Durchgeführt</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('rimTypeDescription', { rules: [] })(
                  <TextArea rows={3} placeholder="z.B.: Am Fahrzeug wurde eine Lackschichtdickenmessung an der Karosserieaußenhaut durchgeführt..." />
                )}
              </FormItem>
              <div className="labeled-select">
                <FormItem hasFeedback label="Bestehender Unfallschaden" className="single-field">
                  {getFieldDecorator('existingAccidentDamage', { rules: [] })(
                    <Input placeholder="z.B.: Keine festgestellt"></Input>
                  )}
                </FormItem>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('existingAccidentDamageDescription', { rules: [] })(
                  <TextArea rows={3} placeholder="z.B.: Am Fahrzeug wurden im Rahmen einer Sichtprüfung der Karosserieaußenhaut ..." />
                )}
              </FormItem>

              <div className="single-field">
                <FormItem hasFeedback label="Hinweis">
                  {getFieldDecorator('tireType', { rules: [] })(
                    <Input placeholder="z.B.: ..."></Input>
                  )}
                </FormItem>
              </div>
            </div>
            <hr />
            <div className="form-part">
              <h2>Technikprüfung</h2>
              {this.renderSelector("generator", "Lichtmaschine / Generator")}
              {this.renderSelectorComment("generatorComment", "z.B.: Die Funktion der Lichtmaschine wurde mit Hilfe der Ladekontrollleuchte im Kombiinstrument geprüft.")}

              {this.renderSelector("oilLoose", "Ölverlust")}
              {this.renderSelectorComment("generatorComment", "z.B.: Das Fahrzeug konnte auf Ölverlust nur eingeschränkt geprüft werden.")}

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

      const [testDriveComment, mileageCorrect, tireType, generator, oilVaste, conditioning, brakes, exhaust, shockAbsober, light, clutch, engine, transmission, note] =
        ['testDriveComment', 'mileageCorrect', 'tireType', 'generator', 'oilVaste', 'conditioning', 'brakes', 'exhaust', 'shockAbsober', 'light', 'clutch', 'engine', 'transmission', 'note'].map(i => getFieldValue(i));

      this.props.saveInspectionData({ testDriveComment, mileageCorrect, tireType, generator, oilVaste, conditioning, brakes, exhaust, shockAbsober, light, clutch, engine, transmission, note });
      this.props.uploadInspectionData({ testDriveComment, mileageCorrect, tireType, generator, oilVaste, conditioning, brakes, exhaust, shockAbsober, light, clutch, engine, transmission, note });
      this.props.navigateToComponentsForm();
    });
  }
}

export const InspectionDataForm = Form.create<Props>()(InspectionDataComponent);
