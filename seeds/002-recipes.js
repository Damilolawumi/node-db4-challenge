
exports.seed = function(knex) {
  return knex ('recipes').insert([
    {recipe_name: 'Bolognese'},
    {recipe_name: 'Pizza'},
    {recipe_name: 'Jollof rice'},
    {recipe_name: 'Fried rice'},
    {recipe_name: 'Naija rice'}
  ])
};
