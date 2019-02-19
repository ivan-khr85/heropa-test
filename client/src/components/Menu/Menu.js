import React, { Component } from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import { graphql } from 'react-apollo';
import * as R from 'ramda';

import { Col, Spinner } from 'reactstrap';
import { UserSection, MenuItem } from './components';
import './menu.scss';
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

  shouldComponentUpdate(nextProps, nextState) {
    const {
      loading: nextLoading,
      menuItems: nextMenuItems,
      collapsed: nextCollapsed,
    } = nextState;
    const {
      loading,
      menuItems,
      collapsed,
    } = this.state;

    return loading !== nextLoading
      || nextCollapsed !== collapsed
      || !R.equals(menuItems, nextMenuItems);
  }


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

  renderMenuItems = (menuItemsData, collapsed) => (
    <div
      className={classNames('app-menu-items-container', { 'app-menu-items-container-collapsed': collapsed })}
    >
      {menuItemsData.map(data => <MenuItem {...{ key: data.label, data, collapsed }} />)}
    </div>
  );

  render() {
    const {
      state: { loading, menuItems, collapsed },
      renderMenuItems,
    } = this;

    return (
      <Col className={
          classNames('app-menu-container', { 'app-menu-container-collapsed': collapsed })
      }
      >
        <UserSection userName="Firstname Lastname" collapsed={collapsed} />
        {loading
          ? <div className="app-menu-spinner-container"><Spinner color="light" /></div>
          : renderMenuItems(menuItems, collapsed)
        }
      </Col>
    );
  }
}

Menu.propTypes = {
  collapsed: T.bool.isRequired,
  collapseMenuScreenWidth: T.number.isRequired,
  toggleMenu: T.func.isRequired,
  data: T.object.isRequired,
};

export default graphql(menuQuery)(Menu);
