module.exports = (sequelize, Sequelize) => {
    const CarroPais = sequelize.define("carro_pais", {
        carroId: {
            type: Sequelize.BIGINT,
            primaryKey: true
        },
        paisId: {
            type: Sequelize.BIGINT,
            primaryKey: true
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    });

    return CarroPais;
};
