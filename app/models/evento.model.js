const Carro = require("./carro.model.js");

module.exports = (sequelize, Sequelize) => {
    const Evento = sequelize.define("evento", {
        nombre: {
            type: Sequelize.STRING(100)
        },
        carroId: {
            type: Sequelize.BIGINT,
            references: {
                model: Carro,
                key: "id"
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    });

    return Evento;
};
