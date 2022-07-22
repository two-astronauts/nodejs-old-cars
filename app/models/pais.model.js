module.exports = (sequelize, Sequelize) => {
    const Pais = sequelize.define("pais", {
        nombre: {
            type: Sequelize.STRING(40)
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Pais;
};
