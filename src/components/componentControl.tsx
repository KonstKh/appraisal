import * as React from 'react';
import { Select, Input } from 'antd';

const Option = Select.Option;

interface Props {
  conditionLabel: string;
}

export class ComponentControl extends React.Component<Props, {}> {
  render() {
    return (
      <div className="component-control">
        <div className="part-description">
          <div className="single-field">
            <label>{this.props.conditionLabel}</label>
            <Select defaultValue="Wählen">
              <Option value="Wählen">Wählen</Option>
              <Option value="Wählen-1">Wählen 1</Option>
              <Option value="Wählen-2">Wählen 2</Option>
            </Select>
            <Input placeholder="Ggf. kurze Beschreibung des festgestellten Schadens" />
          </div>
        </div>
        <div className="lack-depth">
          <div>
            <label>Festgestellte Lackschichtendicke:</label>
          </div>
          <div>
            <Input addonAfter="µm" placeholder="z.B. 132" />
          </div>
        </div>
      </ div>
    )
  }
}