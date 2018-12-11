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
          {getFieldDecorator(name, { initialValue: this.state.components[name] || '' })(
            <Input addonAfter="µm" placeholder="z.B. 132" onChange={this.handleInputChange(name)} />
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
    this.setState({ components: { ...this.state.components, [key]: event } });
  }

  handleInputChange = (key) => (event) => {
    if (typeof key === 'object' && key !== null && key.name) { key = key.name; }
    this.setState({ components: { ...this.state.components, [key]: event.target.value } });
  }

  renderInput = (name: string, placeholder: string) => {
    const { getFieldDecorator } = this.props.form;

    return (
      <FormItem hasFeedback label="" className="single-field">
        {getFieldDecorator(name, { initialValue: this.state.components[name] || '' })(
          <Input placeholder={placeholder} onChange={this.handleInputChange(name)}></Input>
        )}
      </FormItem>
    )
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const placeholder = 'Ggf. kurze Beschreibung des festgestellten Schadens';
    const components = [
      { name: 'wingFrontLeft', title: 'Kotflügel vorne links', descr: 'wingFrontLeftDescription', lack: 'wingFrontLeftLackDepth' },
      { name: 'frontBumber', title: 'Stoßstange vorne', descr: 'frontBumberDescription', lack: 'frontBumberLackDepth' },
      { name: 'frontLeftDoor', title: 'Tür vorne links', descr: 'frontLeftDoorDescription', lack: 'frontLeftDoorLackDepth' },
      { name: 'rearLeftDoor', title: 'Tür hinten links', descr: 'rearLeftDoorDescription', lack: 'rearLeftDoorLackDepth' },
      { name: 'rearLeftSidePanel', title: 'Seitenwand hinten links', descr: 'rearLeftSidePanelDescription', lack: 'rearLeftSidePanelLackDepth' },
      { name: 'rearBumper', title: 'Stoßstange hinten', descr: 'rearBumperDescription', lack: 'rearBumperLackDepth' },
      { name: 'trunk', title: 'Heckklappe', descr: 'trunkDescription', lack: 'trunkLackDepth' },
      { name: 'rearRightSidePanel', title: 'Seitenwand hinten rechts', descr: 'rearRightSidePanelDescription', lack: 'rearRightSidePanelLackDepth' },
      { name: 'rearRightDoor', title: 'Tür hinten rechts', descr: 'rearRightDoorDescription', lack: 'rearRightDoorLackDepth' },
      { name: 'frontRightDoor', title: 'Tür vorne rechts', descr: 'frontRightDoorDescription', lack: 'frontRightDoorLackDepth' },
      { name: 'wingFrontRight', title: 'Kotflügel vorne rechts', descr: 'wingFrontRightDescription', lack: 'wingFrontRightLackDepth' },
      { name: 'bonnet', title: 'Motorhaube', descr: 'frontRightDoorDescription', lack: 'frontRightDoorLackDepth' },
      { name: 'roof', title: 'Dach', descr: 'roofDescription', lack: 'roofLackDepth' },
      { name: 'windshield', title: 'Windschutzscheibe', descr: 'windshieldDescription', lack: 'windshieldLackDepth' },

    ]
    return (
      <React.Fragment>
        <div className="components-form">
          <div className="components-header">
            <h4>Bauteil</h4>
            <h4>Zustand</h4>
          </div>
          <Form>
            {components.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="component-row">
                    {this.renderSelect(item.name, item.title)}
                    {this.renderInput(item.descr, placeholder)}
                  </div>
                  {this.renderLackDepthComponent(item.lack)}
                </React.Fragment>
              )
            })}
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
