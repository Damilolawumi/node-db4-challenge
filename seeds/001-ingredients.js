
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredients_name: 'pasta'},
    {ingredients_name: 'salt'},
    {ingredients_name: 'cheese'},
    {ingredients_name: 'tomato paste'},
    {ingredients_name: 'maggi'}
  ])
};
