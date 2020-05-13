module.exports = knex => {
    return async params => {
      let output = await knex("char_list")
        .where("id", params.id)
        .select()
      console.log(output, "from DbOps")
      return output[0];
    };
  };
  