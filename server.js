const { ApolloServer, gql } = require("apollo-server");

// Define GraphQL schema
const typeDefs = gql`
  type Query {
    ping: String
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    ping: () => "pong",
  },
};

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
