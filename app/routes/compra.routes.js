module.exports = app => {
    const compra = require("../controllers/compra.controller.js");

    var router = require("express").Router();

    // Retrieve all shoppings
    router.get("/", compra.findAll);

    app.use("/api/compra", router);
};
