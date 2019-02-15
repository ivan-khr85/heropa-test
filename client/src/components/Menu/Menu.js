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
      },
      {
        label: 'Environments',
        iconKey: 'faSitemap',
        href: '/environments',
      },
      {
        label: 'Templates',
        iconKey: 'faColumns',
        href: '/templates',
      },
      {
        label: 'Polices',
        iconKey: 'faFileAlt',
        href: '/polices',
      },
      {
        label: 'Courses',
        iconKey: 'faPuzzlePiece',
        href: '/courses',
      },
      {
        label: 'Reports',
        iconKey: 'faCogs',
        href: '/reports',
      },
      {
        label: 'Administration',
        iconKey: 'faLandmark',
        href: '/administration',
      },
    ];

    return (
      <Col className={`app-menu-container ${collapsed ? 'app-menu-container-collapsed' : ''}`}>
        <UserSection userName="Firstname Lastname" collapsed={collapsed} />

        <div className="app-menu-items-container">
          {menuItemData.map(data => <MenuItem {...{ key: data.label, data, collapsed }} />)}
        </div>

      </Col>
    );
  }
}

Menu.propTypes = {
  collapsed: T.bool.isRequired,
};

export default Menu;
