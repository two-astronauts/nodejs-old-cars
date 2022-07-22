module.exports = app => {
    const carro = require("../controllers/carro.controller.js");

    var router = require("express").Router();

    // // Create a new Car
    // router.post("/", carro.create);

    // Retrieve all Cars
    router.get("/", carro.findAll);

    // // Retrieve a single Car with id
    // router.get("/:id", carro.findOne);

    // // Update a Car with id
    // router.put("/:id", carro.update);

    // // Delete a Car with id
    // router.delete("/:id", carro.delete);

    app.use("/api/carro", router);
};
