import React, { Component } from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

import './menuItem.scss';

class MenuItem extends Component {
  shouldComponentUpdate(nextProps) {
    const { data: nextData, collapsed: nextCollapsed } = nextProps;
    const { data, collapsed } = this.props;

    return collapsed !== nextCollapsed || !R.equals(data, nextData);
  }

  renderMenuItem = ({ collapsed, iconKey, label }) => collapsed
    ? (
      <div className="app-menu-item-container app-menu-item-container-collapsed">
        <div className="app-menu-tem-icon-container">
          <FontAwesomeIcon icon={icons[iconKey]} />
        </div>
      </div>
    )
    : (
      <div className="app-menu-item-container">
        <div className="app-menu-tem-icon-container">
          <FontAwesomeIcon icon={icons[iconKey]} />
        </div>
        <span className="app-menu-item-label">{label}</span>
      </div>
    );

  render() {
    const {
      renderMenuItem,
      props: {
        collapsed,
        data: {
          iconKey,
          label,
          href,
          subitems = [],
        },
      },
    } = this;

    const menuItemLink = subitems.length === 0 && href ? href : false;

    return (
      menuItemLink
        ? (
          <Link to={menuItemLink}>
            {renderMenuItem({ collapsed, iconKey, label })}
          </Link>
        )
        : renderMenuItem({ collapsed, iconKey, label })
    );
  }
}

MenuItem.propTypes = {
  data: T.object.isRequired,
  collapsed: T.bool.isRequired,
};

export default MenuItem;
