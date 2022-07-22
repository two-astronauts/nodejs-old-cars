const db = require("../models");
const Evento = db.evento;

// Retrieve all events from the database.
exports.findAll = (req, res) => {
    Evento.findAll({ include: [{ model: db.carro, as: 'carro' }] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving events."
            });
        });
};

// Create and Save a new event
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a event
    const event = {
        nombre: req.body.nombre,
        carroId: req.body.carro.id
    };

    // Save event in the database
    Evento.create(event)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Event."
            });
        });
};
