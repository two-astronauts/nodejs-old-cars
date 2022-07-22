module.exports = app => {
    const venta = require("../controllers/venta.controller.js");

    var router = require("express").Router();

    // Retrieve all sales
    router.get("/", venta.findAll);

    app.use("/api/venta", router);
};
