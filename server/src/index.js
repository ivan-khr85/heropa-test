import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphQL';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // mocks: true,
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready: ${url}`);
  })
  .catch((error) => {
    console.log(`💣 Server error: ${error}`);
  });
