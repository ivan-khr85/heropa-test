import React, { Component } from 'react';
import T from 'prop-types';
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

  render() {
    const {
      collapsed,
      data: {
        iconKey,
        label,
        href,
        subitems = [],
      },
    } = this.props;

    return (
      <div className="app-menu-item-container">
        <div className="app-menu-tem-icon-container">
          <FontAwesomeIcon icon={icons[iconKey]} />
        </div>
        <span className="app-menu-item-label">{label}</span>
      </div>
    );
  }
}

MenuItem.propTypes = {
  data: T.object.isRequired,
  collapsed: T.bool.isRequired,
};

export default MenuItem;
