const db = require("../models");
const Cliente = db.cliente;

// Retrieve all clients from the database.
exports.findAll = (req, res) => {
    Cliente.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving clients."
            });
        });
};
