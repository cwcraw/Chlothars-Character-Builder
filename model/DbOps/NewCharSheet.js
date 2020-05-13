module.exports = knex => {
    return async params => {
        console.log(params) 
        await knex("char_list")
        .insert(params)
        .returning("id");
    };
  };
  