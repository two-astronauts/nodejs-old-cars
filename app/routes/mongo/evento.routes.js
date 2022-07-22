module.exports = app => {
    const eventos = require("../../controllers/mongo/evento.controller.js");
    var router = require("express").Router();

    // Create a new Evento
    router.post("/", eventos.create);
    // Retrieve all Eventos
    router.get("/", eventos.findAll);
    // Retrieve a single Evento with id
    router.get("/:id", eventos.findOne);
    // Update a Evento with id
    router.put("/:id", eventos.update);
    // Delete a Evento with id
    router.delete("/:id", eventos.delete);

    app.use('/api/mongo/evento', router);
};