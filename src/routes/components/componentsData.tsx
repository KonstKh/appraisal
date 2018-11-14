import * as React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form/Form';
import './componentsData.less';

const FormItem = Form.Item;
const Option = Select.Option;
interface Props {
  appraisalStep: number;
  nextStep: () => void;
  previousStep: () => void;
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
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
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
                    {getFieldDecorator('mudguardFrontLeft', { rules: [] })(
                      <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens"></Input>
                    )}
                  </FormItem>
                </div>
              </div>
              <div className="lack-depth">
                <div className="title">Festgestellte Lackschichtendicke:</div>
                <div className="input-wrapper">
                  <Input addonAfter="µm" placeholder="z.B. 132" />
                </div>
              </div>
            </ div>
            {/* Windschutzscheibe */}
          </Form>
        </div>
        <div className="footer-nav">
          <div className="go-prev">
            <Link to="/inspection/">
              <Button onClick={() => this.props.previousStep()}>Zurück</Button>
            </Link>
          </div>
          <div className="go-next">
            <Link to="/documentation/">
              <Button onClick={() => this.props.nextStep()} className="button-right next">Weiter</Button>
            </Link></div>
        </div>
      </ React.Fragment>
    )
  }
}

export const ComponentsDataForm = Form.create<Props>()(ComponentsDataComponent);
