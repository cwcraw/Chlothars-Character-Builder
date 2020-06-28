module.exports = (knex) => {
  return {
    CharSheetList: require("./CharSheetList.js")(knex),
    NewCharSheet: require("./NewCharSheet.js")(knex),
    Delete: require("./Delete.js")(knex),
    GetChar: require("./GetChar.js")(knex),
    CharUpdate: require("./CharUpdate.js")(knex),
  };
};
