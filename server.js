const express = require('express');
const recipes = require('./helpers/helpersRouter');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipes);
module.exports = server