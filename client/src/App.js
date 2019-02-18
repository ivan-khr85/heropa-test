import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import client from './graphQL/apolloClient';
import { AppLayout } from './layouts';
import Routes from './routes';

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  </ApolloProvider>
);
