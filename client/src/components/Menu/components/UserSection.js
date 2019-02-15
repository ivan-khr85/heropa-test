import React from 'react';
import T from 'prop-types';

import {
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { getReducedUserName } from '../utils';
import './userSection.scss';

const UserSection = ({ userName, collapsed }) => (
  <Row>
    {collapsed
      ? (
        <div className="app-user-container-collapsed">
          <div className="app-user-initials">
            <span>{getReducedUserName(userName)}</span>
          </div>
        </div>
      )
      : (
        <div className="app-avatar-container">
          <img
            className="app-user-avatar"
            src={`${process.env.PUBLIC_URL}/avatar-man.png`}
            alt="User avatar"
          />
          <UncontrolledDropdown className="user-name-dropdown">
            <DropdownToggle className="nav-link" caret>
              {userName}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Some action</DropdownItem>
              <DropdownItem>Some another action</DropdownItem>
              <DropdownItem>Some more action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  </Row>
);

UserSection.propTypes = {
  userName: T.string.isRequired,
  collapsed: T.bool.isRequired,
};

export default UserSection;
