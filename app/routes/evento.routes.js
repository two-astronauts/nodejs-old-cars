module.exports = app => {
    const evento = require("../controllers/evento.controller.js");

    var router = require("express").Router();

    // Retrieve all events
    router.get("/", evento.findAll);

    app.use("/api/evento", router);
};
