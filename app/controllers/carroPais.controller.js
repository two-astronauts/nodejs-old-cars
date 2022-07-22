const db = require("../models");
const CarroPais = db.carroPais;

// Retrieve all car-country from the database.
exports.findAll = (req, res) => {
    CarroPais.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving car-country."
            });
        });
};
