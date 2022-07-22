module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("venta", {
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

    return Venta;
};
