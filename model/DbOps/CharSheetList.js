module.exports = knex => {
    return async params => {
      let output = await knex("char_list").select();
      return output;
    };
  };
  