import * as React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';
import Components from '../../models/components';
import './componentsData.less';

const FormItem = Form.Item;
const Option = Select.Option;
interface Props {
  navigateToInspectionForm: () => void,
  navigateToDocumentsForm: () => void,
  saveComponentsFormData: (formData: Components) => void,
  uploadComponentData: (formData: Components) => void
}

interface State {
  components: Components
}

class ComponentsDataComponent extends React.Component<Props & FormComponentProps, State> {

  constructor(props) {
    super(props)

    this.state = {
      components: props.components
    }
  }

  renderLackDepthComponent = (name: string) => {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="lack-depth">
        <FormItem className="input-wrapper" label="Festgestellte Lackschichtendicke:">
          {getFieldDecorator(name, { initialValue: this.state.components[name] || ''})(
            <Input addonAfter="µm" placeholder="z.B. 132" onChange={this.handleInputChange(name)}/>
          )}
        </FormItem>
      </div>
    )
  }

  renderSelect = (name: string, label: string) => {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem className="selector-wrapper" label={label}>
        {getFieldDecorator(name, { rules: [], initialValue: this.state.components[name] || "Wählen" })(
          <Select onChange={this.handleSelectorChange(name)}>
            <Option value="correct">In Ordnung</Option>
            <Option value="damageDetected">Schaden festgestellt</Option>
          </Select>
        )}
      </FormItem>
    )
  }

  handleSelectorChange = (key) => (event) => {
    this.setState({ components: { ...this.state.components, [key]: event }});
  }

  handleInputChange = (key) => (event) => {
    if (typeof key === 'object' && key !== null && key.name) { key = key.name; }
    this.setState({ components: { ...this.state.components, [key]: event.target.value } });
  }

  renderInput = (name: string, placeholder: string) => {
    const { getFieldDecorator } = this.props.form;

    return (
      <FormItem hasFeedback label="" className="single-field">
        {getFieldDecorator(name, { initialValue: this.state.components[name] || ''})(
          <Input placeholder={placeholder} onChange={this.handleInputChange(name)}></Input>
        )}
      </FormItem>
    )
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const placeholder = 'Ggf. kurze Beschreibung des festgestellten Schadens'
    return (
      <React.Fragment>
        <div className="components-form">
          <div className="components-header">
            <h4>Bauteil</h4>
            <h4>Zustand</h4>
          </div>
          <Form>
            <div className="component-row">
              {this.renderSelect('wingFrontLeft', 'Kotflügel vorne links')}
              {this.renderInput('wingFrontLeftDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('wingFrontLeftLackDepth')}

            <div className="component-row">
              {this.renderSelect('frontBumber', 'Stoßstange vorne')}
              {this.renderInput('frontBumberDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('frontBumberLackDepth')}

            <div className="component-row">
              {this.renderSelect('frontLeftDoor', 'Tür vorne links')}
              {this.renderInput('frontLeftDoorDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('frontLeftDoorLackDepth')}

            <div className="component-row">
              {this.renderSelect('rearLeftDoor', 'Tür hinten links')}
              {this.renderInput('rearLeftDoorDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('rearLeftDoorLackDepth')}

            <div className="component-row">
              {this.renderSelect('rearLeftSidePanel', 'Seitenwand hinten links')}
              {this.renderInput('rearLeftSidePanelDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('rearLeftSidePanelLackDepth')}

            <div className="component-row">
              {this.renderSelect('rearBumper', 'Stoßstange hinten')}
              {this.renderInput('rearBumperDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('rearBumperLackDepth')}

            <div className="component-row">
              {this.renderSelect('trunk', 'Heckklappe')}
              {this.renderInput('trunkDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('trunkLackDepth')}

            <div className="component-row">
              {this.renderSelect('rearRightSidePanel', 'Seitenwand hinten rechts')}
              {this.renderInput('rearRightSidePanelDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('rearRightSidePanelLackDepth')}

            <div className="component-row">
              {this.renderSelect('rearRightDoor', 'Tür hinten rechts')}
              {this.renderInput('rearRightDoorDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('rearRightDoorLackDepth')}

            <div className="component-row">
              {this.renderSelect('frontRightDoor', 'Tür vorne rechts')}
              {this.renderInput('frontRightDoorDescription', placeholder)}
            </div>

            {this.renderLackDepthComponent('frontRightDoorLackDepth')}

            <div className="component-row">
              {this.renderSelect('wingFrontRight', 'Kotflügel vorne rechts')}
              {this.renderInput('wingFrontRightDescription', placeholder)}
            </div>

            {this.renderLackDepthComponent('wingFrontRightLackDepth')}
            <div className="component-row">
              {this.renderSelect('bonnet', 'Motorhaube')}
              {this.renderInput('bonnetDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('bonnetLackDepth')}

            <div className="component-row">
              {this.renderSelect('roof', 'Dach')}
              {this.renderInput('roofDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('roofLackDepth')}

            <div className="component-row">
              {this.renderSelect('windshield', 'Windschutzscheibe')}
              {this.renderInput('windshieldDescription', placeholder)}
            </div>
            {this.renderLackDepthComponent('windshieldLackDepth')}

          </Form>
        </div>
        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/inspection/">
              <Button onClick={() => this.props.navigateToInspectionForm()}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next">
            <Link to="/documentation/">
              <Button onClick={() => this.formSubmit()} className="button-right next">Weiter</Button>
            </Link></div>
        </div>
      </ React.Fragment>
    )
  }

  formSubmit(): any {
    const { validateFieldsAndScroll, resetFields,
      getFieldValue, isFieldsTouched } = this.props && this.props.form;

    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }

      this.props.saveComponentsFormData(this.state.components);
      this.props.uploadComponentData(this.state.components);
      this.props.navigateToDocumentsForm();
    });
  }

}

export const ComponentsDataForm = Form.create<Props>()(ComponentsDataComponent);
