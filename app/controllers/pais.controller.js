const db = require("../models");
const Pais = db.pais;

// Retrieve all countries from the database.
exports.findAll = (req, res) => {
    Pais.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving countries."
            });
        });
};
