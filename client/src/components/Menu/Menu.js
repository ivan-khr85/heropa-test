import React, { Component } from 'react';
import T from 'prop-types';
import { Col } from 'reactstrap';

import { UserSection, MenuItem } from './components';
import './menu.scss';


class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props: { collapsed },
    } = this;

    const menuItemData = [
      {
        label: 'Dashboards',
        iconKey: 'faThLarge',
        href: '/dashboard',
        subitems: [],
      },

    ];



    return (
      <Col className={`app-menu-container ${collapsed ? 'app-menu-container-collapsed' : ''}`}>
        <UserSection userName="Firstname Lastname" collapsed={collapsed} />

        <div className="app-menu-items-container">
          <MenuItem {...{ data: menuItemData[0], collapsed }} />
        </div>

      </Col>
    );
  }
}

Menu.propTypes = {
  collapsed: T.bool.isRequired,
};

export default Menu;
