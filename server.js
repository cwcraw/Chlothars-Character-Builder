//BE Server
const { typeDefs, resolvers } = require("./server/schema.js");
const { ApolloServer } = require("apollo-server");
require("dotenv").config();

const server = new ApolloServer({ typeDefs, resolvers });
const port = process.env.PORT || 4000;

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
