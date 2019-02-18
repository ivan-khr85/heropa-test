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
      renderTabs,
      setActiveTab,
      renderTabContent,
    } = this;

    const tabLayoutConfig = [
      {
        name: 'Tab1',
        key: 1,
        component: (<h3>Tab 1 content</h3>),
      },
      {
        name: 'Tab2',
        key: 2,
        component: (<h3>Tab 2 content</h3>),
      },
      {
        name: 'Tab3',
        key: 3,
        component: (<h3>Tab 3 content</h3>),
      },
      {
        name: 'Tab4',
        key: 4,
        component: (<h3>Tab 4 content</h3>),
      },
    ];

    return (
      <div className="app-tab-layout-container">
        <Nav tabs>
          {renderTabs(tabLayoutConfig, activeTabKey, setActiveTab)}
        </Nav>
        <TabContent activeTab={activeTabKey}>
          {renderTabContent(tabLayoutConfig)}
        </TabContent>
      </div>
    );
  }
}

TabLayout.propsTypes = {
  // children: T.oneOfType([T.element, T.arrayOf(T.element)]).isRequired,

};

export default TabLayout;
