import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { GRAPHQL_URI_HTTP as uri } from './config';

const link = new HttpLink({ uri });
const cache = new InMemoryCache();

export default new ApolloClient({
  link,
  cache,
});
