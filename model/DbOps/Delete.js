module.exports = knex => {
    return async id => {
      id.id = parseInt(id.id)
      await knex("char_list")
        .where("id", id.id)
        .del();
    return "Deleted"
    };
  };
  