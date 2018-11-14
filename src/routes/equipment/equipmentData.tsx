import * as React from 'react';
import { Button, Input, Form } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';
import './equipmentData.less';

const { TextArea } = Input;
const FormItem = Form.Item;

interface Props {
  appraisalStep: number;
  nextStep: () => void;
  previousStep: () => void;
}

class EquipmentDataComponent extends React.Component<Props & FormComponentProps, {}> {

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const leftPlaceholder = "z.B.\nLenkrad mit Schaltwippen/-tasten\nLenksäule (Lenkrad) mech. verstellbar\nLM-Felgen 7,5x17 (10 Speichen) \nMercedes Notrufsystem \nMotor 2,1 Ltr. - 130 kw CDI KAT \nParameterlenkung \nReifendruck-Kontrollsystem \nReiserechner \nRücksitzlehne geteilt / klappbar \nRußpartikelfilter \nScheinwerfer mit integriertem Tagfahrlicht \nSeitenairbag (Sidebag) vorne \nSitz vorne links höhenverstellbar \nSitzbelegungserkennung für Airbag Beifahrerseite \nStart/Stop-Anlage \nTempomat \nTürgriffe außen in Wagenfarbe \nVerglasung getönt \nWarnanlage / Statusanzeige für Sicherheitsgurte im Fond \nWegfahrsperre";
    const rightPlaceholder = "z.B.\nAbbiege- und Allwetterlicht\nAudio-Navigationssystem Discover Pro (mit Festplattenspeicher)\nAußenspiegel asphärisch, links\nAußenspiegel elektr. verstell-, heiz- und anklappbar\nAußenspiegel konvex, rechts\nAußenspiegel mit Abblendautomatik, links\nAusstattungs-Paket: Easy Open\nBatterie 68 Ah\nBatterie im Kofferraum\nBremsscheiben hinten (310 mm x 22 mm)\nBremsscheiben vorn (340 mm x 30 mm)\nBusiness-Paket Premium mit Navigation\nDiebstahlsicherung für Räder (Felgenschlösser)\nFahrassistenz-Paket\nFahrassistenz-System: Dynamische Fernlichtregulierung (Dynamic Light Assist)\nFahrassistenz-System: Parklenkassistent (Park Assist)\nFahrassistenz-System: Verkehrszeichenerkennung\nFrontkamera\nFußraumbeleuchtung vorn LED\nGenerator 180 A";
    return (
      <React.Fragment>
        <div className="equipment-data">
          <Form>
            <div className="form-part">
              <h2>Serienausstattung</h2>
              <TextArea rows={30} placeholder={leftPlaceholder} />
            </div>
            <div className="form-part">
              <h2>Sonderausstattung</h2>
              <TextArea rows={30} placeholder={rightPlaceholder} />
            </div>
          </Form>
        </div>
        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/tyres-data">
              <Button onClick={() => this.props.previousStep()}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next">
            <Link to="/inspection/">
              <Button onClick={() => this.props.nextStep()} className="button-right next">Weiter</Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export const EquipementDataForm = Form.create<Props>()(EquipmentDataComponent);
