import React from 'react';
import { Link } from 'react-router-dom';

import { TableComponent } from '../../components';
import { routes } from '../../const';

const Home = () => (
  <div className="app-layout-content-wrapper">
    <div className="app-layout-content">
      <h3>Home page</h3>
      <h5>
        <Link to={routes.SHOW_COURSES}>
          Show courses Page
        </Link>
      </h5>
    </div>
  </div>
);

export default Home;
