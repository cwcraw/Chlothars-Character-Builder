//BE Server
const { typeDefs, resolvers } = require("./schema.js")
const { ApolloServer } = require("apollo-server");
require("dotenv").config();

const server = new ApolloServer({ typeDefs, resolvers });
const port = process.env.PORT // || 4000; // Works on local without it.
server.listen(port).then(({ url }) => {
  // process.env.DATABASE_URL = url // probably w
  console.log(`🚀 Server ready at ${url}`);
});
