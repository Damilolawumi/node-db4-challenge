
exports.up = function (knex) {
    return knex.schema
        .createTable('ingredients', table => {
            table.increments()
            table.string('ingredients_name', 128)
                .notNullable()
                .unique();
        })
        .createTable('recipes', table => {
            table.increments()
            table.string('recipe_name', 128)
                .notNullable()
                .unique();
        })
        .createTable('combination', table => {
            table.increments()
            table.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
            table.integer('quantity')
                .unsigned()
                .notNullable()
        })
        .createTable('steps', table => {
            table.increments()
            table.string('instruction', 500)
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
        })


};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('combination')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};
