module.exports = knex => {
    return {
      list: require("./list.js")(knex),
    };
  };