import React, { PureComponent } from "react";
import MobileNav from "./mobile";
import DesktopNav from "./desktop";

import "./nav.css";

class Nav extends PureComponent {
  goBackTo = e => {
    e && e.preventDefault();
    window.history.back();
  };

  render() {
    const { location } = this.props;

    return (
      <div className={"navbar-fixed-wrapper"}>
        <MobileNav
          visible={true}
          path={location.pathname}
          goBack={this.goBackTo}
        />
        <DesktopNav visible={false} path={location.pathname} />
        {this.props.children}
      </div>
    );
  }
}

export default Nav;
