module.exports = (sequelize, Sequelize) => {
    const Carro = sequelize.define("carro", {
        placa: {
            type: Sequelize.STRING(6)
        },
        marca: {
            type: Sequelize.STRING(20)
        },
        modelo: {
            type: Sequelize.STRING(20)
        },
        color: {
            type: Sequelize.STRING(20)
        },
        valor: {
            type: Sequelize.DOUBLE
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Carro;
};
