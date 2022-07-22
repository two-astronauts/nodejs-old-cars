const db = require("../models");
const Compra = db.compra;

// Retrieve all shoppings from the database.
exports.findAll = (req, res) => {
    Compra.findAll({ include: [{ model: db.carro, as: 'carro' }, { model: db.cliente, as: 'cliente' }] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving shoppings."
            });
        });
};
