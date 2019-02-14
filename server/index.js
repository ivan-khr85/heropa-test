import { ApolloServer } from 'apollo-server';


const server = new ApolloServer({
  // typeDefs,
  // resolvers,
  // mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 🚀 🚀 🚀 Server ready: ${url} 🚀 🚀 🚀 🚀`);
});
