import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { GRAPHQL_URI_HTTP as uri } from './config';

export default new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
});
