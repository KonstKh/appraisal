import * as React from 'react';
import { Button, Radio, Select, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';
import './vehicleData.less';

const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;

interface Props {
  saveVehicleData: (formData: any) => void,
  navigateToTyresForm: () => void,
  uploadVehicleData: (vehicleData: any) => void
}

enum Conditions {
  '1- sehr gut' = '1- sehr gut',
  '2- gut' = '2- gut',
  '3- befriedigend' = '3- befriedigend',
  '4- ausreichend' = '4- ausreichend',
  '5- mangelhaft' = '5- mangelhaft',
  '6- ungenügend' = '6- ungenügend'
}

enum EnvironmentalBadge {
  'Grün' = 'Grün',
  'Gelb' = 'Gelb',
  'Rot' = 'Rot',
  'Blau' = 'Blau',
  'Keine' = 'Keine'
}

class VehicleDataComponent extends React.Component<Props & FormComponentProps, {}> {

  formSubmit = (e) => {
    const { validateFieldsAndScroll, resetFields,
      getFieldValue, isFieldsTouched } = this.props && this.props.form
    // e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });

    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }

      const [registrationNumber, fin, kbaNr, year, mileage, power, cylinder, beltChanged, previousOwners, farbeLack, unpholstery,
        keysNumber, vehicleDocoments, nextHU, lastService] =
        ['registrationNumber', 'fin', 'kbaNr', 'year', 'mileage', 'power', 'cylinder', 'beltChanged', 'previousOwners', 'farbeLack', 'unpholstery',
          'keysNumber', 'vehicleDocoments', 'nextHU', 'lastService'].map(i => getFieldValue(i));

      this.props.saveVehicleData({
        fin, registrationNumber, kbaNr, year, mileage, power, cylinder, beltChanged, previousOwners, farbeLack, unpholstery,
        keysNumber, vehicleDocoments, nextHU, lastService
      });

      this.props.uploadVehicleData({
        fin, registrationNumber, kbaNr, year, mileage, power, cylinder, beltChanged, previousOwners, farbeLack, unpholstery,
        keysNumber, vehicleDocoments, nextHU, lastService
      });

      this.props.navigateToTyresForm();
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    return (
      <React.Fragment>
        <Form>
          <div className="vehicle-data">
            <div className="form-part"> {/* Left top side */}
              <FormItem hasFeedback label="Amtl. Kennzeichen" className="single-field">
                {getFieldDecorator('registrationNumber', { rules: [] })(
                  <Input placeholder="z.B.: ED GG23E"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Fahrzeug-Ident.-Nr." className="single-field">
                {getFieldDecorator('fin', { rules: [] })(
                  <Input placeholder="WBAVP31050VK14533"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="KBA-Nr. (HSN/TSN)" className="single-field">
                {getFieldDecorator('kbaNr', { rules: [] })(
                  <Input placeholder="z.B.: 0603/CDN"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Erstzulassung" className="single-field">
                {getFieldDecorator('year', { rules: [] })(
                  <Input placeholder="16.06.2016"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Laufleistung abgelesen" className="single-field">
                {getFieldDecorator('mileage', { rules: [] })(
                  <Input placeholder="z.B.: 85295km"></Input>
                )}
              </FormItem>
              <div className="radio-wrapper">
                <label>Laufleistung plausibel</label>
                <RadioGroup name="Umweltplakette" className="radio-group">
                  <Radio value={1}>Ja</Radio>
                  <Radio value={2}>Nein</Radio>
                </RadioGroup>
              </div>
              <FormItem hasFeedback label="Hubraum / Leistung" className="single-field">
                {getFieldDecorator('power', { rules: [] })(
                  <Input placeholder="z.B.: 1968ccm/176kW"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Zylinder" className="single-field">
                {getFieldDecorator('cylinder', { rules: [] })(
                  <Input placeholder="z.B.: 6"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Zahnriemenwechsel km/am" className="single-field">
                {getFieldDecorator('beltChanged', { rules: [] })(
                  <Input placeholder="z.B.: 50000 / 01.10.2017"></Input>
                )}
              </FormItem>
            </div>
            <div className="form-part"> {/* Right top side */}
              <FormItem hasFeedback label="Anzahl Vorbesitzer" className="single-field">
                {getFieldDecorator('previousOwners', { rules: [] })(
                  <Input placeholder="z.B.: 1"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Fahrzeugart" className="single-field">
                {getFieldDecorator('autotype', { rules: [] })(
                  <Input placeholder="z.B.: Personenkraftwagen"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Aufbauart" className="single-field">
                {getFieldDecorator('body', { rules: [] })(
                  <Input placeholder="z.B.: Limousine"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Türen / Sitzplätze" className="single-field">
                {getFieldDecorator('doorsSits', { rules: [] })(
                  <Input placeholder="z.B.: 5 / 5"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Kraftstoff" className="single-field">
                {getFieldDecorator('fuel', { rules: [] })(
                  <Input placeholder="z.B.: Diesel"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Emissionsklasse" className="single-field">
                {getFieldDecorator('emissionClass', { rules: [] })(
                  <Input placeholder="z.B.: Euro 6"></Input>
                )}
              </FormItem>
              <div className="selector-wrapper">
                <label>Umweltplakette</label>
                <FormItem>
                  {getFieldDecorator('environmentalBadge', { rules: [], initialValue: "Wählen" })(
                    <Select>
                      { Object.keys(EnvironmentalBadge).map((item) => {
                          return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>
              <FormItem hasFeedback label="Antriebsart" className="single-field">
                {getFieldDecorator('autoType', { rules: [] })(
                  <Input placeholder="z.B.: Allrad"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Getriebe Art" className="single-field">
                {getFieldDecorator('gear', { rules: [] })(
                  <Input placeholder="z.B.: Automatik"></Input>
                )}
              </FormItem>
            </div>
          </div>
          <hr />
          <div className="vehicle-data">
            <div className="form-part"> {/* left middle side */}
              <FormItem hasFeedback label="Farbe / Lackart" className="single-field">
                {getFieldDecorator('farbeLack', { rules: [] })(
                  <Input placeholder="z.B.: 50000 / 01.10.2017"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Farbe Innenraum" className="single-field">
                {getFieldDecorator('farbeInner', { rules: [] })(
                  <Input placeholder="z.B.: 50000 / 01.10.2017"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Polster Art" className="single-field">
                {getFieldDecorator('unpholstery', { rules: [] })(
                  <Input placeholder="z.B.: Leder"></Input>
                )}
              </FormItem>
            </div>
            <div className="form-part"> {/* Right middle side */}
              <FormItem hasFeedback label="Anzahl Schlüssel" className="single-field">
                {getFieldDecorator('keysNumber', { rules: [] })(
                  <Input placeholder="z.B.: 2"></Input>
                )}
              </FormItem>
              <div className="radio-wrapper">
                <label>Raucherfahrzeug</label>
                <RadioGroup name="Umweltplakette" className="radio-group">
                  <Radio value={1}>Ja</Radio>
                  <Radio value={2}>Nein</Radio>
                </RadioGroup>
              </div>
            </div>
          </div>
          <hr />
          <div className="vehicle-data">
            <div className="form-part">{/* left middle under side */}
              <FormItem hasFeedback label="Fahrzeugunterlagen" className="single-field">
                {getFieldDecorator('vehicleDocoments', { rules: [] })(
                  <Input placeholder="z.B.: ZB | (Fzg. Schein)"></Input>
                )}
              </FormItem>
              <div className="radio-wrapper">
                <label>Serviceheft verfügbar</label>
                <RadioGroup name="Umweltplakette" className="radio-group">
                  <Radio value={1}>Ja</Radio>
                  <Radio value={2}>Nein</Radio>
                </RadioGroup>
              </div>
              <div className="radio-wrapper">
                <label>Lückenlos gepflegt</label>
                <RadioGroup name="Umweltplakette" className="radio-group">
                  <Radio value={1}>Ja</Radio>
                  <Radio value={2}>Nein</Radio>
                </RadioGroup>
              </div>
              <div className="radio-wrapper">
                <label>Fahrzeugschein</label>
                <RadioGroup name="Umweltplakette" className="radio-group">
                  <Radio value={1}>Ja</Radio>
                  <Radio value={2}>Nein</Radio>
                </RadioGroup>
              </div>
              <div className="selector-wrapper">
                <label>Fahrzeugbrief</label>
                <FormItem>
                  {this.props.form.getFieldDecorator('registrationDocument', {rules:[], initialValue:"Wählen"})(
                    <Select>
                      <Option value="available">Vorhanden</Option>
                      <Option value="unavailable">Nicht vorhanden</Option>
                      <Option value="at the bank">Bei der Bank</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
              <div className="selector-wrapper">
                <label>Re-Import</label>
                <FormItem>
                  {this.props.form.getFieldDecorator('reimport', { rules: [], initialValue: "Wählen" })(
                    <Select>
                      <Option value="yes">Ja</Option>
                      <Option value="no">Nein</Option>
                      <Option value="unknown">Unbekannt</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
            </div>
            <div className="form-part">{/* Right middle under side */}
              <FormItem hasFeedback label="Nächste HU /AU" className="single-field">
                {getFieldDecorator('nextHU', { rules: [] })(
                  <Input placeholder="z.B.: 06.2020"></Input>
                )}
              </FormItem>
              <FormItem hasFeedback label="Letzter Service km/am" className="single-field">
                {getFieldDecorator('lastService', { rules: [] })(
                  <Input placeholder="z.B.: 21000 / 01.02.2017"></Input>
                )}
              </FormItem>
              <div className="selector-wrapper">
              <label>Besichtigungsbedingungen</label>
                <FormItem>
                  {getFieldDecorator('inspectionCondition', { rules: [], initialValue: "Wählen" })(
                    <Select>
                      { Object.keys(Conditions).map((item) => {
                          return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>
              <div className="radio-wrapper">
                <label>Fahrzeug verkehrssicher</label>
                <RadioGroup name="Umweltplakette" className="radio-group">
                  <Radio value={1}>Ja</Radio>
                  <Radio value={2}>Nein</Radio>
                </RadioGroup>
              </div>
              <div className="radio-wrapper">
                <label>Fahrzeug fahrbereit</label>
                <RadioGroup name="Umweltplakette" className="radio-group">
                  <Radio value={1}>Ja</Radio>
                  <Radio value={2}>Nein</Radio>
                </RadioGroup>
              </div>
            </div>
          </div>
          <hr />
          <div className="vehicle-data">
            <div className="form-part"> {/* Left bottom side */}
              <div className="selector-wrapper">
                <label>Zustand allgemein</label>
                <FormItem>
                  {getFieldDecorator('generalCondition', { rules: [], initialValue: "Wählen" })(
                    <Select>
                      { Object.keys(Conditions).map((item) => {
                          return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>
              <div className="selector-wrapper">
                <label>Zustand Fahrwerk</label>
                <FormItem>
                  {getFieldDecorator('chassisCondition', { rules: [], initialValue: "Wählen" })(
                    <Select>
                      { Object.keys(Conditions).map((item) => {
                          return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>
            </div>
            <div className="form-part"> {/* Rigth bottom side */}
              <div className="selector-wrapper">
                <label>Zustand außen</label>
                <FormItem>
                  {getFieldDecorator('outerCondition', { rules: [], initialValue: "Wählen" })(
                    <Select>
                      { Object.keys(Conditions).map((item) => {
                          return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>
              <div className="selector-wrapper">
                <label>Zustand Innen</label>
                <FormItem>
                  {getFieldDecorator('innerCondition', { rules: [], initialValue: "Wählen" })(
                    <Select>
                      { Object.keys(Conditions).map((item) => {
                          return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>
            </div>
          </div>
        </Form>
        <hr />
        <div className="agreement">
          <span>Der Zustandsbericht wurde unparteiisch und nach bestem Wissen und Gewissen erstellt. Die im Zustandsbericht aufgeführten Bilder sind Bestandteil der Fahrzeugbeschreibung, hinsichtlich der Ausstattung und des Fahrzeugzustandes.</span>
        </div>
        <div className="footer-nav">
          <div className="go-prev">
          </div>
          <div className="go-next">
            <Link to="/tyres-data">
              <Button onClick={(e) => this.formSubmit(e)} className="button-right next">Weiter</Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export const VehicleDataForm = Form.create<Props>()(VehicleDataComponent);
