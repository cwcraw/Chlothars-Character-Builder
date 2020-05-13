module.exports = knex => {
    return async params => {
        await knex("char_list")
        .insert(params)
        .returning("id");
    };
  };
  