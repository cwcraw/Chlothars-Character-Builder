module.exports = knex => {
    return {
      list: require("./list.js")(knex),
      NewCharSheet: require("./NewCharSheet.js")(knex),
      GetChar: require("./GetChar.js")(knex)
    };
  };