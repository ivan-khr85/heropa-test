import React, { Component } from 'react';
import T from 'prop-types';
import { Col } from 'reactstrap';
import classNames from 'classnames';
import { graphql } from 'react-apollo';

import { UserSection, MenuItem } from './components';
import './menu.scss';
import { menuItemData } from './fixtures';
import { menu as menuQuery } from '../../graphQL/queries';

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

  // shouldComponentUpdate({ collapsed: nextCollapsed }) {
  //   const { collapsed } = this.props;
  //   return nextCollapsed !== collapsed;
  // }


  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  static getDerivedStateFromProps(props) {
    const {
      collapsed,
      data: { loading, menuItems },
    } = props;


    return { loading, menuItems, collapsed };
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
    const { loading, menuItems, collapsed } = this.state;

    console.log('loading ', loading);
    console.log('menuItems ', menuItems);
    console.log('collapsed ', collapsed);

    return (
      <Col className={
          classNames('app-menu-container', {
            'app-menu-container-collapsed': collapsed,
            'app-menu-container-loading': loading,
          })
      }
      >
        <UserSection userName="Firstname Lastname" collapsed={collapsed} />
        <div
          className={classNames('app-menu-items-container', { 'app-menu-items-container-collapsed': collapsed })}
        >
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

export default graphql(menuQuery)(Menu);
