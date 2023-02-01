import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Menu pointing style={{ marginTop: "10px", marginBottom: "20px" }}>
          <Link legacyBehavior route="/">
            <a className="item">CrowdCoin</a>
          </Link>

          <Menu.Menu position="right">
            <Link legacyBehavior route="/">
              <a className="item">Campaigns</a>
            </Link>
            <Link legacyBehavior route="/campaigns/new">
              <a className="item">+</a>
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
