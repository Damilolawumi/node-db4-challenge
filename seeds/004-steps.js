
exports.seed = function(knex) {
  return knex('steps').insert([
    {instruction: 'boil water', recipe_id: '1'},
    {instruction: 'add pasta', recipe_id: '1'},
    {instruction: 'fry pepper ', recipe_id: '1'},
    {instruction: 'add salt', recipe_id: '1'},
    {instruction: 'serve food', recipe_id: '1'},
  ])
};
