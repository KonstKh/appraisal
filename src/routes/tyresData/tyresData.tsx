import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { FormInputComponent } from '../../components';
import { Select } from 'antd';
import './tyresData.less';

const Option = Select.Option;


interface Props {
  appraisalStep: number;
  nextStep: () => void;
  previousStep: () => void;
}

export class TyresDataComponent extends React.Component<Props, {}> {

  render() {
    return (
      <React.Fragment>
        <div className="tyre-data">
          <div className="form-part-left">
            <FormInputComponent label="Reifenart" placeholder=" z.B.: Sommerreifen" />
            <FormInputComponent label="1. Achse – links Hersteller/Bezeichnung" placeholder=" z.B.: Pirelli / 245/45r18 88V" />
            <FormInputComponent label="1. Achse – rechts Hersteller/Bezeichnung" placeholder="z.B.: Pirelli / 245/45r18 88V" />
            <FormInputComponent label="2. Achse – links Hersteller/Bezeichnung" placeholder="z.B.: Pirelli / 245/45r18 88V" />
            <FormInputComponent label="2. Achse – rechts Hersteller/Bezeichnung" placeholder="z.B.: Pirelli / 245/45r18 88V" />
            <FormInputComponent label="DOT - Nummer" placeholder="z.B.: 4503" />
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
            <FormInputComponent label="Zustand:" placeholder="z.B.: 7,31 mm" />
            <FormInputComponent label="Zustand:" placeholder="z.B.: 7,31 mm" />
            <FormInputComponent label="Zustand:" placeholder="z.B.: 7,31 mm" />
            <FormInputComponent label="Zustand:" placeholder="z.B.: 7,31 mm" />
          </div>
        </div>
        <hr/>
        <div className="tyre-data">
          <div className="form-part-left">
          <FormInputComponent label="Erzatzrad" placeholder="z.B.: Tirefit" />
          <FormInputComponent label="Zustand Erzatzrad" placeholder="z.B.: Nicht vorhanden" />
          </div>
        </div>
        <hr/>
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
        </div>
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
