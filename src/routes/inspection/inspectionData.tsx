import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Select, Input } from 'antd';
import { FormInputComponent } from '../../components';

const Option = Select.Option;
const { TextArea } = Input;

interface Props {
  appraisalStep: number;
  nextStep: () => void;
  previousStep: () => void;
}

export class InspectionDataComponent extends React.Component<Props, {}>{
  render() {
    return (
      <React.Fragment>
        <div className="inspection-form">
          <div className="form-part">
            <div className="single-field">
              <label>Probefart</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label='' placeholder='z.B.: Aufgrund der Bedingungen wurde eine kurze Probefahrt nur mit mäßiger Geschwindigkeit durchgeführt.' />
            <div className="single-field">
              <label>Probefart</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="Hinweis" placeholder="z.B.: starker Luftverlust Reifen v.l." />
          </div>
          <hr />
          <div className="form-part">
            <h4>Unfallschadenprüfung</h4>
            <div className="single-field">
              <label>Lackschichtdickenmessung</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <TextArea rows={3} placeholder="z.B.: Am Fahrzeug wurde eine Lackschichtdickenmessung an der Karosserieaußenhaut durchgeführt..." />
            <div className="single-field">
              <label>Bestehender Unfallschaden</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <TextArea rows={3} placeholder="z.B.: Am Fahrzeug wurden im Rahmen einer Sichtprüfung der Karosserieaußenhaut ..." />
            <div className="single-field">
              <label>Rep. Vorschäden</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <TextArea rows={3} placeholder="z.B.: Im Rahmen einer Lackschichtdickenmessung der Karosserieaußenhaut konnten.." />
            <FormInputComponent label="Hinweis" placeholder="z.B.: ..." />
          </div>
          <hr />
          <div className="form-part">
            <h4>Technikprüfung</h4>
            <div className="single-field">
              <label>Lichtmaschine / Generator</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: Die Funktion der Lichtmaschine wurde mit Hilfe der Ladekontrollleuchte im Kombiinstrument geprüft." />

            <div className="single-field">
              <label>Ölverlust</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: Das Fahrzeug konnte auf Ölverlust nur eingeschränkt geprüft werden." />

            <div className="single-field">
              <label>Klimaanlage</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: Die Klimaanlage wurde bei der Besichtigung auf Funktion geprüft." />

            <div className="single-field">
              <label>Bremsanlage</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: Die Bremsanlage wurde durch eine Inaugenscheinnahme geprüft." />

            <div className="single-field">
              <label>Auspuffanlage</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: Die Auspuffanlage konnte bei der Besichtigung nur eingeschränkt geprüft werden.." />

            <div className="single-field">
              <label>Stoßdämpfer</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: Die Stoßdämpfer konnten bei der Besichtigung nur eingeschränkt geprüft werden.." />

            <div className="single-field">
              <label>Lichtanlage</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: Die Lichtanlage war zum Besichtigungszeitpunkt in Ordnung." />

            <div className="single-field">
              <label>Kupplung</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: Das Fahrzeug verfügt über ein Automatikgetriebe." />

            <div className="single-field">
              <label>Motorlauf</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: Ein Probelauf des Motors wurde durchgeführt. Dabei traten keine akustischen sowie visuellen Mängel auf." />

            <div className="single-field">
              <label>Getriebe</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: Das Getriebe konnte im Rahmen der Probefahrt eingeschränkt geprüft werden." />

            <div className="single-field">
              <label>Hinweis</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="" placeholder="z.B.: 2. Satz Sommerreifen auf Alufelgen wird mit verkauft." />
          </div>
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
