module.exports = knex => {
  return async (params) => {
    console.log(params)
    let id = params.id
    delete params.id
    console.log(params)
    await knex("char_list")
      .where("id",id)
      .update(params)
  }
};