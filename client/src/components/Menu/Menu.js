import React, { Component } from 'react';
import T from 'prop-types';
import { Col } from 'reactstrap';

import { UserSection, MenuItem } from './components';
import './menu.scss';


class Menu extends Component {
  constructor(props) {
    super(props);
    const { innerWidth } = window;

    this.state = {
      currentWidth: innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  shouldComponentUpdate({ collapsed: nextCollapsed }) {
    const { collapsed } = this.props;
    return nextCollapsed !== collapsed;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = ({ target: { innerWidth } }) => {
    const {
      props: { collapseMenuScreenWidth, toggleMenu },
      state: { currentWidth },
    } = this;

    if (currentWidth > collapseMenuScreenWidth && innerWidth <= collapseMenuScreenWidth) {
      toggleMenu(true);
    }

    if (currentWidth <= collapseMenuScreenWidth && innerWidth > collapseMenuScreenWidth) {
      toggleMenu(false);
    }

    this.setState({ currentWidth: innerWidth });
  };

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
        subItems: [
          { label: 'Users', href: '/reports/users' },
          { label: 'Grades', href: '/reports/grades' },
          { label: 'Usage', href: '/reports/usage' },
          { label: 'Virtual machines', href: '/reports/virtual-machines' },
          { label: 'Storage', href: '/reports/storage' },
        ],
      },
      {
        label: 'Administration',
        iconKey: 'faLandmark',
        subItems: [
          { label: 'Users', href: '/admin/users' },
          { label: 'Configs', href: '/admin/configs' },
          { label: 'Storage', href: '/adminreports/storage' },
        ],
      },
    ];

    return (
      <Col className={`app-menu-container ${collapsed ? 'app-menu-container-collapsed' : ''}`}>
        <UserSection userName="Firstname Lastname" collapsed={collapsed} />
        <div className={`app-menu-items-container ${collapsed ? 'app-menu-items-container-collapsed' : ''}`}>
          {menuItemData.map(data => <MenuItem {...{ key: data.label, data, collapsed }} />)}
        </div>
      </Col>
    );
  }
}

Menu.propTypes = {
  collapsed: T.bool.isRequired,
  collapseMenuScreenWidth: T.number.isRequired,
  toggleMenu: T.func.isRequired,
};

export default Menu;
