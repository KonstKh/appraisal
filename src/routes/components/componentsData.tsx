import * as React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';
import './componentsData.less';

const FormItem = Form.Item;
const Option = Select.Option;
interface Props {
  navigateToInspectionForm: () => void,
  navigateToDocumentsForm: () => void,
  saveComponentsFormData: (formData: any) => void
}

class ComponentsDataComponent extends React.Component<Props & FormComponentProps, {}> {
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    return (
      <React.Fragment>
        <div className="components-form">
          <div className="components-header">
            <h4>Bauteil</h4>
            <h4>Zustand</h4>
          </div>
          <Form>
            {/* Kotflügel vorne links */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Kotflügel vorne links</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('mudguardFrontLeftLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Kotflügel vorne links */}
            {/* Stoßstange vorne */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Stoßstange vorne</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('frontBamper', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('frontBamperLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Stoßstange vorne */}
            {/* Tür vorne links */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Tür vorne links</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('doorFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('doorFrontLeftLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Tür vorne links */}
            {/* Tür hinten links */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Tür hinten links</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('doorRearLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('doorRearLeftLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Tür hinten links */}
            {/* Seitenwand hinten links */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Seitenwand hinten links</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('sidewallRearLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('sidewallRearLeftLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Seitenwand hinten links */}
            {/* Stoßstange hinten */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Stoßstange hinten</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('rearBumper', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('rearBumperLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Stoßstange hinten */}
            {/* Heckklappe */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Heckklappe</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('tailgate', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('tailgateLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Heckklappe */}
            {/* Seitenwand hinten rechts */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Seitenwand hinten rechts</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('sidepanelRearRight', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('sidepanelRearRightLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Seitenwand hinten rechts */}
            {/* Tür hinten rechts */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Tür hinten rechts</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('doorRearRight', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('doorRearRightLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Tür hinten rechts */}
            {/* Tür vorne rechts */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Tür vorne rechts</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('doorFrontRight', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('doorFrontRightLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Tür vorne rechts */}
            {/* Kotflügel vorne rechts */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Kotflügel vorne rechts</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('mudguardFrontRight', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('mudguardFrontRightLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Kotflügel vorne rechts */}
            {/* Motorhaube */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Motorhaube</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('bonnet', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('bonnetLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Motorhaube */}
            {/* Dach */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Dach</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('roof', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('roofLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Dach */}
            {/* Windschutzscheibe */}
            <div className="component-control">
              <div className="part-description">
                <div className="component-row">
                  <div className="label">Windschutzscheibe</div>
                  <Select defaultValue="Wählen">
                    <Option value="Wählen">Wählen</Option>
                    <Option value="Wählen-1">Wählen 1</Option>
                    <Option value="Wählen-2">Wählen 2</Option>
                  </Select>
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('windshield', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('windshieldLackDepth')(
                      <Input addonAfter="µm" placeholder="z.B. 132" />
                    )}
                  </FormItem>
                </div>
              </div>
            </ div>
            {/* Windschutzscheibe */}
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

      const [mudguardFrontLeft, mudguardFrontLeftLackDepth, frontBamper, frontBamperLackDepth, doorFrontLeft, doorFrontLeftLackDepth,
        doorRearLeft, sidewallRearLeft, sidewallRearLeftLackDepth] =
        ['mudguardFrontLeft', 'mudguardFrontLeftLackDepth', 'frontBamper', 'frontBamperLackDepth', 'doorFrontLeft', 'doorFrontLeftLackDepth',
      'doorRearLeft', 'sidewallRearLeft', 'sidewallRearLeftLackDepth'].map(i => getFieldValue(i));

      this.props.saveComponentsFormData({mudguardFrontLeft, mudguardFrontLeftLackDepth, frontBamper, frontBamperLackDepth, doorFrontLeft, doorFrontLeftLackDepth,
        doorRearLeft, sidewallRearLeft, sidewallRearLeftLackDepth });

      this.props.navigateToDocumentsForm();
    });
  }

}

export const ComponentsDataForm = Form.create<Props>()(ComponentsDataComponent);
