module.exports = app => {
    const cliente = require("../controllers/cliente.controller.js");

    var router = require("express").Router();

    // Retrieve all clients
    router.get("/", cliente.findAll);

    app.use("/api/cliente", router);
};
