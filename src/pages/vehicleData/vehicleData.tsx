import * as React from 'react';
import { VehicleEntity } from '../../models/vehicle';
import { Button, Radio, Select } from 'antd';
import { Link } from 'react-router-dom';
import { FormInputComponent } from '../../components';
import './vehicleData.less';

const RadioGroup = Radio.Group;
const Option = Select.Option;

interface Props {
  appraisalStep: number,
  nextStep: () => void
}

export class VehicleDataComponent extends React.Component<Props, {}> {

  render() {
    return (
      <React.Fragment>
        <div className="vehicle-data">
          <div className="form-part"> {/* Left top side */}
            <FormInputComponent label="Fahrzeug-Ident.-Nr." placeholder="WBAVP31050VK14533" />
            <FormInputComponent label="Erstzulassung" placeholder="16.06.2016" />
            <FormInputComponent label="Fahrzeugart" placeholder="z.B.: Personenkraftwagen" />
            <FormInputComponent label="Aufbauart" placeholder="z.B.: Limousine" />
            <FormInputComponent label="Kraftstoff" placeholder="z.B.: Diesel" />
            <FormInputComponent label="Emissionsklasse" placeholder="z.B.: Euro 6" />
            <div className="single-field">
              <label>Umweltplakette</label>
              <RadioGroup name="Umweltplakette" className="radio-group">
                <Radio value={1}>Ja</Radio>
                <Radio value={2}>Nein</Radio>
              </RadioGroup>
            </div>
            <FormInputComponent label="Antriebsart" placeholder="z.B.: Allrad" />
            <FormInputComponent label="Anzahl Vorbesitzer" placeholder="z.B.: 1" />
            <FormInputComponent label="Anzahl Schlüssel" placeholder="z.B.: 2" />
            <FormInputComponent label="Polster Art" placeholder="z.B.: Leder" />
            <FormInputComponent label="Farbe Innenraum" placeholder="z.B.: Schwarz" />
            <div className="single-field">
              <label>Raucherfahrzeug</label>
              <RadioGroup name="raucherfahrzeug" className="radio-group">
                <Radio value={1}>Ja</Radio>
                <Radio value={2}>Nein</Radio>
              </RadioGroup>
            </div>
            <div className="single-field">
              <label>Fahrzeug fahrbereit</label>
              <RadioGroup name="fahrzeugFahrbereit" className="radio-group">
                <Radio value={1}>Ja</Radio>
                <Radio value={2}>Nein</Radio>
              </RadioGroup>
            </div>
            <FormInputComponent label="Fahrzeugunterlagen" placeholder="z.B.: ZB | (Fzg.Scheie)" />

            <div className="single-field">
              <label>Re-Import</label>
              <Select placeholder="z.B.: Schwarz" defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
          </div>
          <div className="form-part"> {/* Right top side */}
            <FormInputComponent label="Amtl. Kennzeichen" placeholder="z.B.: ED GG23E" />
            <FormInputComponent label="KBA-Nr. (HSN/TSN)" placeholder="z.B.: 0603/CDN" />
            <FormInputComponent label="Getriebe Art" placeholder="z.B.: Automatik" />
            <FormInputComponent label="Hubraum / Leistung" placeholder="z.B.: 1968 ccm / 176 kW" />
            <FormInputComponent label="Farbe / Lackart" placeholder="z.B.: Deep Black / Perleffekt" />
            <FormInputComponent label="Türen / Sitzplätze" placeholder="z.B.: 5 / 5" />
            <FormInputComponent label="Zylinder" placeholder="z.B.: 6" />
            <FormInputComponent label="Zahnriemenwechsel km/am" placeholder="z.B.: 50000 / 01.10.2017" />
            <FormInputComponent label="Nächste HU /AU" placeholder="z.B.: 06.2020" />
            <div className="single-field">
              <label>Serviceheft verfügbar</label>
              <RadioGroup name="serviceheftVerfügbar" className="radio-group">
                <Radio value={1}>Ja</Radio>
                <Radio value={2}>Nein</Radio>
              </RadioGroup>
            </div>
            <div className="single-field">
              <label>Lückenlos gepflegt</label>
              <RadioGroup name="lueckenlosGepflegt" className="radio-group">
                <Radio value={1}>Ja</Radio>
                <Radio value={2}>Nein</Radio>
              </RadioGroup>
            </div>
            <FormInputComponent label="Letzter Service km/am" placeholder="z.B.: 21000 / 01.02.2017" />
            <div className="single-field">
              <label>Fahrzeug verkehrssicher</label>
              <RadioGroup name="fahrzeugVerkehrssicher" className="radio-group">
                <Radio value={1}>Ja</Radio>
                <Radio value={2}>Nein</Radio>
              </RadioGroup>
            </div>
            <div className="single-field">
              <label>Besichtigungsbedingungen</label>
              <Select placeholder="z.B.: Schwarz" defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <FormInputComponent label="Laufleistung abgelesen" placeholder="z.B.: 85295km" />
          </div>
        </div>
        <hr />
        <div className="vehicle-data">
          <div className="form-part"> {/* Left bottom side */}
            <div className="single-field">
              <label>Zustand allgemein</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <div className="single-field">
              <label>Zustand Fahrwerk</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
          </div>
          <div className="form-part"> {/* Rigth bottom side */}
            <div className="single-field">
              <label>Zustand außen</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
            <div className="single-field">
              <label>Zustand Innen</label>
              <Select defaultValue="Wählen">
                <Option value="Wählen">Wählen</Option>
                <Option value="Wählen-1">Wählen 1</Option>
                <Option value="Wählen-2">Wählen 2</Option>
              </Select>
            </div>
          </div>
        </div>
        <hr />
        <div className="agreement">
          <span>Der Zustandsbericht wurde unparteiisch und nach bestem Wissen und Gewissen erstellt. Die im Zustandsbericht aufgeführten Bilder sind Bestandteil der Fahrzeugbeschreibung, hinsichtlich der Ausstattung und des Fahrzeugzustandes.</span>
        </div>
        <div className="footer-nav">
          <Link to="/tyres-data">
            <Button onClick={() => this.props.nextStep()} className="button-right">Weiter</Button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}