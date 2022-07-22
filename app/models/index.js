const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
const sequelize = new Sequelize(dbConfig.DATABASE_URL, {
    //   host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectOptions: {
        ssl: process.env.ENV === 'production' ? {
            require: true,
            rejectUnauthorized: false
        } : false
    },

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.carro = require("./carro.model.js")(sequelize, Sequelize);
db.carroPais = require("./carroPais.model.js")(sequelize, Sequelize);
db.cliente = require("./cliente.model.js")(sequelize, Sequelize);
db.compra = require("./compra.model.js")(sequelize, Sequelize);
db.evento = require("./evento.model.js")(sequelize, Sequelize);
db.pais = require("./pais.model.js")(sequelize, Sequelize);
db.venta = require("./venta.model.js")(sequelize, Sequelize);

db.evento.belongsTo(db.carro, {
    as: 'carro',
    foreignKey: 'carroId',
    targetKey: 'id'
});

db.compra.belongsTo(db.carro, {
    as: 'carro',
    foreignKey: 'carroId',
    targetKey: 'id'
});

db.compra.belongsTo(db.cliente, {
    as: 'cliente',
    foreignKey: 'clienteId',
    targetKey: 'id'
});

db.venta.belongsTo(db.carro, {
    as: 'carro',
    foreignKey: 'carroId',
    targetKey: 'id'
});

db.venta.belongsTo(db.cliente, {
    as: 'cliente',
    foreignKey: 'clienteId',
    targetKey: 'id'
});

module.exports = db;
