const express = require('express');

const recipe = require('./helpersdb');

const router = express.Router();

router.get('/', (req, res) => {
    recipe.getRecipes()
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipe' });
        });
});

module.exports = router;