import * as React from 'react';
import { Button, Radio, Select, Form, Input, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FormComponentProps } from 'antd/lib/form/Form';
import Vehicle from '../../models/vehicle';

import './vehicleData.less';


const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;

interface Props {
  saveVehicleData: (formData: Vehicle) => void,
  navigateToTyresForm: () => void,
  uploadVehicleData: (vehicleData: Vehicle) => void,
  vehicle: Vehicle,
  location: any
}

interface State {
  vehicle: Vehicle
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

class VehicleDataComponent extends React.Component<Props & FormComponentProps, State> {

  constructor(props) {
    super(props)

    this.state = {
      vehicle: props.vehicle
    }
  }

  handleChange = (key) => (event) => {
    if (typeof key === 'object' && key !== null && key.name) { key = key.name; }
    this.setState({ vehicle: { ...this.state.vehicle, [key]: event.target.value } });
  }

  handleSelectChange = (key) => (event) => {
    this.setState({ vehicle: { ...this.state.vehicle, [key]: event}});
  }

  handleDataChange = (key) => (event) => {
    this.setState({ vehicle: { ...this.state.vehicle, [key]: event.toDate()}})
  }

  renderInput = (fieldName: string, label: string, placeholder: string) => {
    const { getFieldDecorator } = this.props.form;

    return (
      <FormItem hasFeedback label={label} className="single-field">
        {getFieldDecorator(fieldName, { rules: [], initialValue: this.state.vehicle[fieldName] })(
          <Input placeholder={placeholder} onChange={this.handleChange(fieldName)}></Input>
        )}
      </FormItem>
    )
  }

  renderRadio = (name: string, label: string) => {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="radio-wrapper">
        <FormItem label={label}>
          {getFieldDecorator(name, { initialValue: this.state.vehicle[name] })(
            <RadioGroup className="radio-group" name={name} onChange={this.handleChange({ name })}>
              <Radio value={1} >Ja</Radio>
              <Radio value={2} >Nein</Radio>
            </RadioGroup>
          )}
        </FormItem>
      </div>
    )
  }

  formSubmit = (e) => {
    const { validateFieldsAndScroll, resetFields,
      getFieldValue, isFieldsTouched } = this.props && this.props.form
    const { location } = this.props
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

      this.props.saveVehicleData(this.state.vehicle);
      this.props.uploadVehicleData(this.state.vehicle);
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

              {this.renderInput('registrationNumber', 'Amtl. Kennzeichen', 'z.B.: ED GG23E')}
              {this.renderInput('fin', 'Fahrzeug-Ident.-Nr.', 'WBAVP31050VK14533')}
              {this.renderInput('kbaNr', 'KBA-Nr. (HSN/TSN)', 'z.B.: 0603/CDN')}
              <FormItem label="Erstzulassung" className="single-field">
                {getFieldDecorator('year', { initialValue: moment(this.state.vehicle['year']) })(
                  <DatePicker onChange={this.handleDataChange('year')}></DatePicker>
                )
              }</FormItem>
              {this.renderInput('mileage', 'Laufleistung abgelesen', 'z.B.: 85295km')}

              {this.renderRadio('mileagePlausible', 'Laufleistung plausibel')}

              {this.renderInput('power', 'Hubraum / Leistung', 'z.B.: 1968ccm/176kW')}
              {this.renderInput('cylinder', 'Zylinder', 'z.B.: 6')}
              {this.renderInput('beltChanged', 'Zahnriemenwechsel km/am', 'z.B.: 50000 / 01.10.2017')}

            </div>
            <div className="form-part"> {/* Right top side */}
              {this.renderInput('previousOwners', 'Anzahl Vorbesitzer', 'z.B.: 1')}
              {this.renderInput('autoType', 'Fahrzeugart', 'z.B.: Personenkraftwagen')}
              {this.renderInput('body', 'Aufbauart', 'z.B.: Limousine')}
              {this.renderInput('doorsSits', 'Türen / Sitzplätze', 'z.B.: 5 / 5')}
              {this.renderInput('fuel', 'Kraftstoff', 'z.B.: Diesel')}
              {this.renderInput('emissionClass', 'Emissionsklasse', 'z.B.: Euro 6')}

              <div className="selector-wrapper">
                <label>Umweltplakette</label>
                <FormItem>
                  {getFieldDecorator('environmentalBadge', { rules: [], initialValue: this.state.vehicle['environmentalBadge'] || "Wählen" })(
                    <Select onChange={this.handleSelectChange('environmentalBadge')}>
                      {Object.keys(EnvironmentalBadge).map((item) => {
                        return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>

              {this.renderInput('driveType', 'Antriebsart', 'z.B.: Allrad')}
              {this.renderInput('gear', 'Getriebe Art', 'z.B.: Automatik')}

            </div>
          </div>
          <hr />
          <div className="vehicle-data">
            <div className="form-part"> {/* left middle side */}
              {this.renderInput('colour', 'Farbe / Lackar', 'z.B.: Deep Black / Perleffekt')}
              {this.renderInput('colourInterior', 'Farbe / Lackar', 'z.B.: Schwarz')}
              {this.renderInput('unpholstery', 'Polster Art', 'z.B.: Leder')}
            </div>
            <div className="form-part"> {/* Right middle side */}
              {this.renderInput('keysNumber', 'Anzahl Schlüssel', 'z.B.: 2')}
              {this.renderRadio('smokingVehicle', 'Raucherfahrzeug')}
            </div>
          </div>
          <hr />
          <div className="vehicle-data">
            <div className="form-part">{/* left middle under side */}
              {this.renderInput('vehicleDocuments', 'Fahrzeugunterlagen', 'z.B.: ZB | (Fzg. Schein)')}
              {this.renderRadio('serviceBookAvailable ', 'Serviceheft verfügbar')}
              {this.renderRadio('perfectlyMaintained ', 'Lückenlos gepflegt')}
              {this.renderRadio('vehicleRegistration ', 'Fahrzeugschein')}

              <div className="selector-wrapper">
                <label>Fahrzeugbrief</label>
                <FormItem>
                  {this.props.form.getFieldDecorator('registrationDocument', { rules: [], initialValue: "Wählen" })(
                    <Select onChange={this.handleSelectChange('registrationDocument')}>
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
                    <Select onChange={this.handleSelectChange('reimport')}>
                      <Option value="yes">Ja</Option>
                      <Option value="no">Nein</Option>
                      <Option value="unknown">Unbekannt</Option>
                    </Select>
                  )}
                </FormItem>
              </div>
            </div>
            <div className="form-part">{/* Right middle under side */}
              {/* {this.renderInput('nextHU', 'Nächste HU /AU', 'z.B.: 06.2020')} */}
              <FormItem label="Nächste HU /AU" className="single-field">
                {getFieldDecorator('nextHU', { initialValue: moment(this.state.vehicle['year']) })(
                  <DatePicker onChange={this.handleDataChange('nextHU')}></DatePicker>
                )
              }</FormItem>
              {this.renderInput('lastService', 'Letzter Service km/am', 'z.B.: 21000 / 01.02.2017')}

              <div className="selector-wrapper">
                <label>Besichtigungsbedingungen</label>
                <FormItem>
                  {getFieldDecorator('inspectionCondition', { rules: [], initialValue: this.state.vehicle['inspectionCondition'] || "Wählen" })(
                    <Select onChange={this.handleSelectChange('inspectionCondition')}>
                      {Object.keys(Conditions).map((item) => {
                        return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>
              {this.renderRadio('vehicleRoadworthy ', 'Fahrzeug verkehrssicher')}
              {this.renderRadio('vehicleReadyToDrive ', 'Fahrzeug fahrbereit')}

            </div>
          </div>
          <hr />
          <div className="vehicle-data">
            <div className="form-part"> {/* Left bottom side */}
              <div className="selector-wrapper">
                <label>Zustand allgemein</label>
                <FormItem>
                  {getFieldDecorator('generalCondition', { rules: [], initialValue: this.state.vehicle['generalCondition'] || "Wählen" })(
                    <Select onChange={this.handleSelectChange('generalCondition')}>
                      {Object.keys(Conditions).map((item) => {
                        return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>
              <div className="selector-wrapper">
                <label>Zustand Fahrwerk</label>
                <FormItem>
                  {getFieldDecorator('chassisCondition', { rules: [], initialValue: this.state.vehicle['chassisCondition'] || "Wählen" })(
                    <Select onChange={this.handleSelectChange('chassisCondition')}>
                      {Object.keys(Conditions).map((item) => {
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
                  {getFieldDecorator('outerCondition', { rules: [], initialValue: this.state.vehicle['outerCondition'] || "Wählen" })(
                    <Select onChange={this.handleSelectChange('outerCondition')}>
                      {Object.keys(Conditions).map((item) => {
                        return <Option key={item} value={item}>{item}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
              </div>
              <div className="selector-wrapper">
                <label>Zustand Innen</label>
                <FormItem>
                  {getFieldDecorator('innerCondition', { rules: [], initialValue: this.state.vehicle['innerCondition'] || "Wählen" })(
                    <Select onChange={this.handleSelectChange('innerCondition')}>
                      {Object.keys(Conditions).map((item) => {
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
