import React, { Component } from 'react';
import T from 'prop-types';
import {
  Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classNames from 'classnames';
import './tabLayout.scss';


class TabLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTabKey: 1 };
  }

  setActiveTab = activeTabKey => this.setState({ activeTabKey });

  renderTabs = (config, activeTabKey, setActiveTab) => config.map(({ key, name }) => (
    <NavItem key={key}>
      <NavLink
        className={classNames({ active: activeTabKey === key })}
        onClick={() => setActiveTab(key)}
      >
        {name}
      </NavLink>
    </NavItem>
  ));

  renderTabContent = config => config.map(({ key, component }) => (
    <TabPane {...{ key, tabId: key }}>
      {component}
    </TabPane>
  ));

  render() {
    const {
      state: { activeTabKey },
      props: { tabsConfig },
      renderTabs,
      setActiveTab,
      renderTabContent,
    } = this;

    return (
      <div className="app-tab-layout-container">
        <Nav tabs>
          {renderTabs(tabsConfig, activeTabKey, setActiveTab)}
        </Nav>
        <TabContent activeTab={activeTabKey}>
          {renderTabContent(tabsConfig)}
        </TabContent>
      </div>
    );
  }
}

TabLayout.propsTypes = {
  tabsConfig: T.arrayOf(T.object).isRequired,
};

export default TabLayout;
