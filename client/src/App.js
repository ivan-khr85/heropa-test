import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppLayout } from './layouts';
import Routes from './routes';

export default () => (
  <Router>
    <AppLayout>
      <Routes/>
    </AppLayout>
  </Router>
);
