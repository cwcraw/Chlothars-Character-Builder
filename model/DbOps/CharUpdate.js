module.exports = (knex) => {
  return async (params) => {
    let id = params.id;
    delete params.id;
    await knex("char_list")
      .where("id", id)
      .update(params);
  };
};
