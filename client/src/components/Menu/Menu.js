import React, { Component } from 'react';
import T from 'prop-types';
import { Col } from 'reactstrap';
import classNames from 'classnames';

import { UserSection, MenuItem } from './components';
import './menu.scss';
import { menuItemData } from './fixtures';

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
    const { collapsed } = this.props;

    return (
      <Col className={classNames('app-menu-container', { 'app-menu-container-collapsed': collapsed })}>
        <UserSection userName="Firstname Lastname" collapsed={collapsed} />
        <div className={classNames('app-menu-items-container', { 'app-menu-items-container-collapsed': collapsed })}>
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
