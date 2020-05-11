// const db = require("../model/knexfile");
// const knex = require("knex");


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('char_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('char_list').insert([
        {id: 1, Name: 'Chlothar', Str:'1', Dex:'2',Con: '3', Int: '4',Wis:'5',Cha:'6'},
        {id: 2, Name: 'Ashbor', Str:'2', Dex:'3',Con: '4', Int: '5',Wis:'6',Cha:'7'},
        {id: 3, Name: 'Tuoba', Str:'2', Dex:'2',Con: '3', Int: '3',Wis:'2',Cha:'1'},

      ]);
    });
};
