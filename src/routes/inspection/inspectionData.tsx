import * as React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';
import './inspection.less';

const Option = Select.Option;
const { TextArea } = Input;
const FormItem = Form.Item;

interface Props {
  appraisalStep: number;
  nextStep: () => void;
  previousStep: () => void;
}

class InspectionDataComponent extends React.Component<Props & FormComponentProps, {}>{
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    return (
      <React.Fragment>
        <div className="inspection-form">
          <Form>
            <div className="form-part">
              <h2>Allgemeine Prüfung</h2>
              <div className="labeled-select">
                <label>Probefart</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('testDriveComment', { rules: [] })(
                  <Input placeholder="z.B.: Aufgrund der Bedingungen wurde eine kurze Probefahrt nur mit mäßiger Geschwindigkeit durchgeführt."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Laufleistung plausibel</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('mileageCorrect', { rules: [] })(
                  <Input placeholder="z.B.: starker Luftverlust Reifen v.l."></Input>
                )}
              </FormItem>
            </div>
            <hr />
            <div className="form-part">
              <h2>Unfallschadenprüfung</h2>
              <div className="labeled-select">
                <label>Lackschichtdickenmessung</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <TextArea rows={3} placeholder="z.B.: Am Fahrzeug wurde eine Lackschichtdickenmessung an der Karosserieaußenhaut durchgeführt..." />
              <div className="labeled-select">
                <label>Bestehender Unfallschaden</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <TextArea rows={3} placeholder="z.B.: Am Fahrzeug wurden im Rahmen einer Sichtprüfung der Karosserieaußenhaut ..." />
              <div className="labeled-select">
                <label>Rep. Vorschäden</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <TextArea rows={3} placeholder="z.B.: Im Rahmen einer Lackschichtdickenmessung der Karosserieaußenhaut konnten.." />
              <FormItem hasFeedback label="Hinweis" className="single-field">
                {getFieldDecorator('tireType', { rules: [] })(
                  <Input placeholder="z.B.: ..."></Input>
                )}
              </FormItem>
            </div>
            <hr />
            <div className="form-part">
              <h2>Technikprüfung</h2>
              <div className="labeled-select">
                <label>Lichtmaschine / Generator</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('generator', { rules: [] })(
                  <Input placeholder="z.B.: Die Funktion der Lichtmaschine wurde mit Hilfe der Ladekontrollleuchte im Kombiinstrument geprüft."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Ölverlust</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('oilVaste', { rules: [] })(
                  <Input placeholder="z.B.: Das Fahrzeug konnte auf Ölverlust nur eingeschränkt geprüft werden."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Klimaanlage</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('conditioning', { rules: [] })(
                  <Input placeholder="z.B.: Die Klimaanlage wurde bei der Besichtigung auf Funktion geprüft."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Bremsanlage</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('brakes', { rules: [] })(
                  <Input placeholder="z.B.: Die Bremsanlage wurde durch eine Inaugenscheinnahme geprüft."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Auspuffanlage</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('exhaust', { rules: [] })(
                  <Input placeholder="z.B.: Die Auspuffanlage konnte bei der Besichtigung nur eingeschränkt geprüft werden."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Stoßdämpfer</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('shockAbsober', { rules: [] })(
                  <Input placeholder="z.B.: Die Stoßdämpfer konnten bei der Besichtigung nur eingeschränkt geprüft werden."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Lichtanlage</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('light', { rules: [] })(
                  <Input placeholder="z.B.: Die Lichtanlage war zum Besichtigungszeitpunkt in Ordnung."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Kupplung</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('clutch', { rules: [] })(
                  <Input placeholder="z.B.: Das Fahrzeug verfügt über ein Automatikgetriebe."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Motorlauf</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('engine', { rules: [] })(
                  <Input placeholder="z.B.: Ein Probelauf des Motors wurde durchgeführt. Dabei traten keine akustischen sowie visuellen Mängel auf."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Getriebe</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('transmission', { rules: [] })(
                  <Input placeholder="z.B.: Das Getriebe konnte im Rahmen der Probefahrt eingeschränkt geprüft werden."></Input>
                )}
              </FormItem>
              <div className="labeled-select">
                <label>Hinweis</label>
                <Select defaultValue="Wählen">
                  <Option value="Wählen">Wählen</Option>
                  <Option value="Wählen-1">Wählen 1</Option>
                  <Option value="Wählen-2">Wählen 2</Option>
                </Select>
              </div>
              <FormItem hasFeedback label="" className="single-field">
                {getFieldDecorator('note', { rules: [] })(
                  <Input placeholder="z.B.: 2. Satz Sommerreifen auf Alufelgen wird mit verkauft."></Input>
                )}
              </FormItem>
            </div>
          </Form>
        </div>
        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/equipment/">
              <Button onClick={() => this.props.previousStep()}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next">
            <Link to="/components/">
              <Button onClick={() => this.props.nextStep()} className="button-right next">Weiter</Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export const InspectionDataForm = Form.create<Props>()(InspectionDataComponent);
