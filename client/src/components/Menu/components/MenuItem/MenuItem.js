import React, { Component } from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { Collapse } from 'reactstrap';
import './menuItem.scss';

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItemExpanded: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { data: nextData, collapsed: nextCollapsed } = nextProps;
    const { data, collapsed } = this.props;
    const { menuItemExpanded: nextMenuItemExpanded } = nextState;
    const { menuItemExpanded } = this.state;

    return collapsed !== nextCollapsed
      || menuItemExpanded !== nextMenuItemExpanded
      || !R.equals(data, nextData);
  }

  toggleItemExpanded = menuItemExpanded => this.setState({ menuItemExpanded });

  renderMenuItem = ({
    collapsed, iconKey, label, subItems,
  }) => {
    const {
      state: { menuItemExpanded },
      toggleItemExpanded,
    } = this;
    const showSubItemsComponents = subItems && subItems.length && !collapsed;

    return (
      <div>
        <div
          className={classNames('app-menu-item-container', { 'app-menu-item-container-collapsed': collapsed })}
          role="button"
          tabIndex="0"
          onClick={() => showSubItemsComponents && toggleItemExpanded(!menuItemExpanded)}
          onKeyPress={() => {}}
        >
          <div className="app-menu-tem-icon-container">
            <FontAwesomeIcon icon={icons[iconKey]} />
          </div>
          <span className="app-menu-item-label">{label}</span>
          { showSubItemsComponents
            ? (
              <div className="app-chevron-icon-container">
                <FontAwesomeIcon icon={menuItemExpanded ? icons.faChevronUp : icons.faChevronDown} />
              </div>
            )
            : null }
        </div>
        { showSubItemsComponents
          ? (
            <Collapse isOpen={menuItemExpanded}>
              <div className="app-submenus-container">
                {subItems.map(({ label: subItemLabel, href }) => (
                  <Link to={href} key={subItemLabel}>
                    <span className="app-submenu-item">{subItemLabel}</span>
                  </Link>
                ))}
              </div>
            </Collapse>
          )
          : null
        }
      </div>
    );
  };


  render() {
    const {
      renderMenuItem,
      props: {
        collapsed,
        data: {
          iconKey,
          label,
          href,
          subItems,
        } = {},
      },
    } = this;

    const menuItemLink = R.isNil(subItems) && href ? href : false;
    const menuItem = renderMenuItem({
      collapsed, iconKey, label, subItems,
    });

    return (
      menuItemLink ? <Link to={menuItemLink}>{menuItem}</Link> : menuItem
    );
  }
}

MenuItem.propTypes = {
  data: T.object.isRequired,
  collapsed: T.bool.isRequired,
};

export default MenuItem;
