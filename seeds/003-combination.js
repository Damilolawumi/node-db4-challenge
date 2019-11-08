
exports.seed = function (knex) {
  return knex('combination').insert([
    {ingredients_id: 1, recipe_id: 2, quantity: 2 },
    {ingredients_id: 2, recipe_id: 1, quantity: 4 },
    {ingredients_id: 3, recipe_id: 3, quantity: 2 },
    {ingredients_id: 4, recipe_id: 5, quantity: 1 },
    {ingredients_id: 1, recipe_id: 4, quantity: 2 }
  ])
};
