module.exports = (sequelize, Sequelize) => {
    const Compra = sequelize.define("compra", {
        fecha: {
            type: Sequelize.DATE
        },
        valor: {
            type: Sequelize.DOUBLE
        },
        clienteId: {
            type: Sequelize.BIGINT
        },
        carroId: {
            type: Sequelize.BIGINT
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    });

    return Compra;
};
