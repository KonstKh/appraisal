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

  renderSelect = (formName: string, ) => {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem className="selector-wrapper">
        {getFieldDecorator(formName, { rules: [], initialValue: "Wählen" })(
          <Select>
            <Option value="correct">In Ordnung</Option>
            <Option value="damageDetected">Schaden festgestellt</Option>
          </Select>
        )}
      </FormItem>
    )
  }

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
                  {this.renderSelect('wingFrontLeft')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('wingFrontLeftDescription', { rules: [] })(
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
                  {this.renderSelect('frontBumber')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('frontBumberDescription', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('frontBumberLackDepth')(
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
                  {this.renderSelect('frontLeftDoor')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('frontLeftDoorDescription', { rules: [] })(
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
                  {this.renderSelect('rearLeftDoor')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('rearLeftDoorDescription', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('rearLeftDoorLackDepth')(
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
                  {this.renderSelect('rearLeftSidePanel')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('rearLeftSidePanelDescription', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <FormItem >
                    {getFieldDecorator('rearLeftSidePanelLackDepth')(
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
                  {this.renderSelect('rearBumper')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('rearBumperDescription', { rules: [] })(
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
                  {this.renderSelect('tailgate')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('tailgateDescription', { rules: [] })(
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
                  {this.renderSelect('rearRightSidePanel')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('rearRightSidePanelDescription', { rules: [] })(
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
                  {this.renderSelect('rearRightDoor')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('rearRightDoorDescription', { rules: [] })(
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
                  {this.renderSelect('frontRightDoor')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('frontRightDoorDescription', { rules: [] })(
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
                  {this.renderSelect('mudguardFrontRight')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('mudguardFrontRightDescription', { rules: [] })(
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
                  {this.renderSelect('bonnet')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('bonnetDescription', { rules: [] })(
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
                  {this.renderSelect('root')}
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
                  {this.renderSelect('windshield')}
                  <FormItem hasFeedback label="" className="single-field">
                    {getFieldDecorator('windshieldDescription', { rules: [] })(
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

      this.props.saveComponentsFormData({
        mudguardFrontLeft, mudguardFrontLeftLackDepth, frontBamper, frontBamperLackDepth, doorFrontLeft, doorFrontLeftLackDepth,
        doorRearLeft, sidewallRearLeft, sidewallRearLeftLackDepth
      });

      this.props.navigateToDocumentsForm();
    });
  }

}

export const ComponentsDataForm = Form.create<Props>()(ComponentsDataComponent);
