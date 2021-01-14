import React, { PureComponent } from "react";
import moment from "moment";
import { DatePicker } from "antd";

export default class antd extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loadings: true,
    };
  }
  render() {
    const { loadings } = this.state;
    const dateFormat = 'YYYY/MM/DD';
    return (
      <div>
        <DatePicker
          defaultValue={moment("2015/01/01", dateFormat)}
          format={dateFormat}
          allowClear={false}
        />
        <br />
      </div>
    );
  }
}
