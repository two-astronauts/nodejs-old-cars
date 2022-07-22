module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
        nombre: {
            type: Sequelize.STRING(40)
        },
        apellido: {
            type: Sequelize.STRING(40)
        },
        direccion: {
            type: Sequelize.STRING(100)
        },
        telefono: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Cliente;
};
