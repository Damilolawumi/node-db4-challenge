const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db("combination as c")
        .join("recipes as r", "c.recipe_id", "=", "r.id")
        .join("ingredients as i", "c.ingredient_id", "=", "i.id")
        .select("r.recipe_name", "i.ingredients_name", "c.quantity")
        .where("r.id", id);
}

function getInstructions(id) {
    return (
        db("steps")
            .join("recipes", "steps.recipe_id", "=", "recipes.id")
            .where({ recipe_id: id })
            .select("recipes.recipe_name", "steps.instruction")
            .then(instruction => {
                return instruction;
            })
    );
}



