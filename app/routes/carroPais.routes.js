module.exports = app => {
    const carroPais = require("../controllers/carroPais.controller.js");

    var router = require("express").Router();

    // Retrieve all car-countries
    router.get("/", carroPais.findAll);

    app.use("/api/carro-pais", router);
};
