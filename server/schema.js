const { ApolloServer, gql } = require('apollo-server');
const { chars } = require("./data/index")


const typeDefs = gql`
  type CharSheet {
    name: String
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
    CharSheets: () => charsTest
  },
};

const charsTest = 
[
    {
      "name": "Chlothar",
      "str": 8,
      "dex": 8,
      "con": 8,
      "int": 8,
      "wis": 8,
      "cha": 8
    },
    {
      "name": "Ashbor",
      "str": 8,
      "dex": 8,
      "con": 8,
      "int": 8,
      "wis": 8,
      "cha": 8
    },
    {
      "name": "Tuoba",
      "str": 8,
      "dex": 8,
      "con": 8,
      "int": 8,
      "wis": 8,
      "cha": 8
    }
  ]



module.exports = {typeDefs, resolvers};
