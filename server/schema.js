const { ApolloServer, gql } = require("apollo-server");
// const { chars } = require("./data/index")
const config = require("../config");
const knex = require("knex")(config.db);
const dbOps = require("../model/DbOps")(knex);

const typeDefs = gql`
  type CharSheet {
    id: ID!
    name: String
    race: String
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    cha: Int
  }

  type Query {
    GetChar(id: ID!): CharSheet
    CharSheetList: [CharSheet]
  }

  type Mutation {
    Delete(id: ID!): String
    CharUpdate(
      id: ID!
      name: String
      race: String
      str: Int
      dex: Int
      con: Int
      int: Int
      wis: Int
      cha: Int
    ): CharSheet
    NewCharSheet(
      name: String!
      race: String!
      str: Int!
      dex: Int!
      con: Int!
      int: Int!
      wis: Int!
      cha: Int!
    ): CharSheet
  }
`;

const resolvers = {
  Query: {
    CharSheetList: async () => {
      let output = await dbOps.CharSheetList();
      return output;
    },
    GetChar: async (_, request) => {
      let output = await dbOps.GetChar(request);
      return output;
    },
  },

  Mutation: {
    NewCharSheet: async (_, request) => {
      await dbOps.NewCharSheet(request);
    },
    Delete: async (_, request) => {
      await dbOps.Delete(request);
    },
    CharUpdate: async (_, request) => await dbOps.CharUpdate(request),
  },
};

module.exports = { typeDefs, resolvers };
