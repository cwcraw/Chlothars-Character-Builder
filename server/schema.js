const { ApolloServer, gql } = require('apollo-server');
const { chars } = require("./data/index")
const config = require("../config");
const knex = require("knex")(config.db);
const dbOps = require("../model/DbOps")(knex);



const typeDefs = gql`
  type CharSheet {
    id:ID!
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
    GetChar(id:ID!): CharSheet,
    CharSheets: [CharSheet]
  }

  type Mutation {
    Delete(id:ID!): String,
    NewCharSheet(name:String!,race:String!,str:Int!,dex:Int!,con:Int!,int:Int!,wis:Int!,cha:Int!): CharSheet 
  }
`;

const resolvers = {
  Query: {
    CharSheets: async () => {
      let output = await dbOps.list()
      return output
    },
    GetChar: async (_,request) => {
      let output = await dbOps.GetChar(request)
      return output
    }
  },
  

  Mutation: {
    NewCharSheet: async (_,request) => {
      await dbOps.NewCharSheet(request)
    },
    Delete: async (_,request) => {
      await dbOps.Delete(request)
    },
  }

};


module.exports = {typeDefs, resolvers};
