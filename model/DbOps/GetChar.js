module.exports = (knex) => {
  return async (params) => {
    let output = await knex("char_list")
      .where("id", params.id)
      .select();
    return output[0];
  };
};
