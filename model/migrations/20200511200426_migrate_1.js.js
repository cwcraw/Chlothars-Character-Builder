
exports.up = function(knex, Promise) {
  return knex.schema.createTable("char_list", t =>{
    t.increments()
      .index();;

    t.string("Name")
      .notNullable()
      .index()

    t.integer("Str")
      .notNullable()

    t.integer("Dex")
      .notNullable()
    
    t.integer("Con")
      .notNullable()

    t.integer("Int")
      .notNullable()
    
    t.integer("Wis")
      .notNullable()

    t.integer("Cha")
      .notNullable()
    
  })

};

exports.down = function(knex) {

};
