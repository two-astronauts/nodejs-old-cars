const db = require("../../models/mongo");
const Evento = db.evento;

const eventoPost = require("../evento.controller.js");

// Create and Save a new Evento
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a Evento
    const evento = new Evento({
        nombre: req.body.nombre,
        carro: req.body.carro
    });
    // Save Evento in the database
    evento
        .save(evento)
        .then(data => {
            eventoPost.create(req, res);
            // res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Evento."
            });
        });
};

// Retrieve all Eventos from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Evento.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving eventos."
            });
        });
};

// Find a single Evento with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Evento.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Evento with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Evento with id=" + id });
        });
};

// Update a Evento by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    Evento.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Evento with id=${id}. Maybe Evento was not found!`
                });
            } else res.send({ message: "Evento was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Evento with id=" + id
            });
        });
};

// Delete a Evento with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Evento.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Evento with id=${id}. Maybe Evento was not found!`
                });
            } else {
                res.send({
                    message: "Evento was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Evento with id=" + id
            });
        });
};
