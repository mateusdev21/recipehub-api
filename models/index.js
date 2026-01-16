const dbConfig = require('../config/database');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.URL;
db.users = require('./user.model')(mongoose);
db.recipes = require('./recipe.model')(mongoose);
db.news = require('./news.model')(mongoose);

module.exports = db;