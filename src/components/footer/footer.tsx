import * as React from 'react';
import './footer.less';

const logo = require("../../static/positiv.png");

export const FooterComponent = () => {
  return(
    <div className="footer">
      <img src={logo} alt="abracar logo" className="footer-logo"/>
    </div>
  )
}
