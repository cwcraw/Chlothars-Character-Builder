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
    NewCharSheet(name:String!,race:String!,str:Int!,dex:Int!,con:Int!,int:Int!,wis:Int!,cha:Int!): CharSheet 
  }
`;

const resolvers = {
  Query: {
    CharSheets: async () => {
      let output = await dbOps.list()
      console.log("output from Query", output)
      return output
    },
    GetChar: async (_,request) => {
      let output = await dbOps.GetChar(request)
      console.log("output from GetChar", output)
      return output
    }
  },
  

  Mutation: {
    NewCharSheet: async (_,request) => {
      console.log(request)
      await dbOps.NewCharSheet(request)
    }
  }

};


module.exports = {typeDefs, resolvers};
