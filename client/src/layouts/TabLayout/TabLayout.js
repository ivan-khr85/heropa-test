import React, { Component } from 'react';
import T from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import * as R from 'ramda';
import {
  Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';

import { ACTIVE_TAB } from './const';
import { appendUrlQueryParam, fetchUrlQueryParam } from '../../utils';
import './tabLayout.scss';

class TabLayout extends Component {
  constructor(props) {
    super(props);

    const { history } = props;
    const urlInitialTabKey = fetchUrlQueryParam(history, ACTIVE_TAB);
    const state = {};

    if (urlInitialTabKey) {
      state.activeTabKey = urlInitialTabKey.toString();
    } else {
      const activeTabKey = R.pathOr(0, ['tabsConfig', '0', 'key'], props);
      Object.assign(state, { activeTabKey });
      appendUrlQueryParam(history, ACTIVE_TAB, activeTabKey, true);
    }

    this.state = state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { tabsConfig: nextTabsConfig } = nextProps;
    const { tabsConfig } = this.props;
    const { activeTabKey: nextActiveTabKey } = nextState;
    const { activeTabKey } = this.state;

    return activeTabKey !== nextActiveTabKey || !R.equals(tabsConfig, nextTabsConfig);
  }

  static getDerivedStateFromProps(props, state) {
    const { activeTabKey } = state;
    const { history } = props;
    const urlTabKey = fetchUrlQueryParam(history, ACTIVE_TAB);

    return urlTabKey && urlTabKey !== activeTabKey ? { activeTabKey: urlTabKey } : null;
  }

  setActiveTab = activeTabKey => this.setState({ activeTabKey }, () => {
    const { history } = this.props;
    appendUrlQueryParam(history, ACTIVE_TAB, activeTabKey, true);
  });

  renderTabs = (config, activeTabKey, setActiveTab) => config.map(({ key, name }) => (
    <NavItem key={key}>
      <NavLink className={classNames({ active: activeTabKey === key })} onClick={() => setActiveTab(key)}>
        {name}
      </NavLink>
    </NavItem>
  ));

  renderTabContent = config => config.map(({ key, component }) => <TabPane {...{ key, tabId: key }}>{component}</TabPane>);

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
        <Nav tabs>{renderTabs(tabsConfig, activeTabKey, setActiveTab)}</Nav>
        <TabContent activeTab={activeTabKey}>{renderTabContent(tabsConfig)}</TabContent>
      </div>
    );
  }
}

TabLayout.propTypes = {
  tabsConfig: T.arrayOf(T.object).isRequired,
  history: T.object.isRequired,
};

export default withRouter(TabLayout);
