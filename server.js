const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

var corsOptions = {
    origin: ["http://localhost:4200"]
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./app/models");

// db.sequelize.sync(); // create tables

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

const db = require("./app/models/mongo");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to cars application." });
});

require("./app/routes/carro.routes")(app);
require("./app/routes/carroPais.routes")(app);
require("./app/routes/cliente.routes")(app);
require("./app/routes/compra.routes")(app);
require("./app/routes/evento.routes")(app);
require("./app/routes/pais.routes")(app);
require("./app/routes/venta.routes")(app);

require("./app/routes/mongo/evento.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
