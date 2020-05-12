const { ApolloServer, gql } = require('apollo-server');
const { chars } = require("./data/index")
const config = require("../config");
const knex = require("knex")(config.db);
const db = require("../model/DbOps")(knex);



const typeDefs = gql`
  type CharSheet {
    name: String
    race: String
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    char: Int

  }
  
  type Query {
    CharSheets: [CharSheet]
  }
`;

const resolvers = {
  Query: {
    CharSheets: async () => {
      let output = await db.list()
      console.log("output from Query", output)
      return output
    }
  
  },
};


module.exports = {typeDefs, resolvers};
