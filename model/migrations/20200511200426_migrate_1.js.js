
exports.up = function(knex, Promise) {
  return knex.schema.createTable("char_list", t =>{
    t.increments()
      .index();;

    t.string("name")
      .notNullable()
      .index()

    t.string("race")
      .notNullable()
      .index()

    t.integer("str")
      .notNullable()

    t.integer("dex")
      .notNullable()
    
    t.integer("con")
      .notNullable()

    t.integer("int")
      .notNullable()
    
    t.integer("wis")
      .notNullable()

    t.integer("cha")
      .notNullable()
    
  })

};

exports.down = function(knex) {

};
