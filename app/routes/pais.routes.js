module.exports = app => {
    const pais = require("../controllers/pais.controller.js");

    var router = require("express").Router();

    // Retrieve all countries
    router.get("/", pais.findAll);

    app.use("/api/pais", router);
};
