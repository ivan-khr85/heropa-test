import React, { Component } from 'react';
import T from 'prop-types';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';


class TabLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {/*<Nav tabs>*/}
          {/*<NavItem>*/}
            {/*<NavLink*/}
              {/*className={classnames({ active: this.state.activeTab === '1' })}*/}
              {/*onClick={() => { this.toggle('1'); }}*/}
            {/*>*/}
              {/*Tab1*/}
            {/*</NavLink>*/}
          {/*</NavItem>*/}
          {/*<NavItem>*/}
            {/*<NavLink*/}
              {/*className={classnames({ active: this.state.activeTab === '2' })}*/}
              {/*onClick={() => { this.toggle('2'); }}*/}
            {/*>*/}
              {/*Moar Tabs*/}
            {/*</NavLink>*/}
          {/*</NavItem>*/}
        {/*</Nav>*/}
        {/*<TabContent activeTab={this.state.activeTab}>*/}
          {/*<TabPane tabId="1">*/}
            {/*<Row>*/}
              {/*<Col sm="12">*/}
                {/*<h4>Tab 1 Contents</h4>*/}
              {/*</Col>*/}
            {/*</Row>*/}
          {/*</TabPane>*/}
          {/*<TabPane tabId="2">*/}
            {/*<Row>*/}
              {/*<Col sm="6">*/}
                {/*<Card body>*/}
                  {/*<CardTitle>Special Title Treatment</CardTitle>*/}
                  {/*<CardText>With supporting text below as a natural lead-in to additional content.</CardText>*/}
                  {/*<Button>Go somewhere</Button>*/}
                {/*</Card>*/}
              {/*</Col>*/}
              {/*<Col sm="6">*/}
                {/*<Card body>*/}
                  {/*<CardTitle>Special Title Treatment</CardTitle>*/}
                  {/*<CardText>With supporting text below as a natural lead-in to additional content.</CardText>*/}
                  {/*<Button>Go somewhere</Button>*/}
                {/*</Card>*/}
              {/*</Col>*/}
            {/*</Row>*/}
          {/*</TabPane>*/}
        {/*</TabContent>*/}
      </div>
    );
  }
}

TabLayout.propsTypes = {
  // children: T.oneOfType([T.element, T.arrayOf(T.element)]).isRequired,

};

export default TabLayout;
