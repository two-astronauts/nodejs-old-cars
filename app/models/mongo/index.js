const dbConfig = require("../../config/mongo.db.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.evento = require("./evento.model.js")(mongoose);

module.exports = db;
