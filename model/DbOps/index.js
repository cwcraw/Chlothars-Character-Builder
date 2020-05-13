module.exports = knex => {
    return {
      list: require("./list.js")(knex),
      NewCharSheet: require("./NewCharSheet.js")(knex),
      Delete: require("./Delete.js")(knex),
      GetChar: require("./GetChar.js")(knex)
    };
  };