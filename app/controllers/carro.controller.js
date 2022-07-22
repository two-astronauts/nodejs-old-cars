const db = require("../models");
const Carro = db.carro;
// const Op = db.Sequelize.Op;

// // Create and Save a new car
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.title) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//         return;
//     }

//     // Create a car
//     const car = {
//         title: req.body.title,
//         description: req.body.description,
//         detail: req.body.detail
//     };

//     // Save car in the database
//     Carro.create(car)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the Car."
//             });
//         });
// };

// Retrieve all cars from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    // Carro.findAll({ where: condition })
    Carro.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cars."
            });
        });
};

// // Find a single car with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Carro.findByPk(id)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving Car with id=" + id
//             });
//         });
// };

// // Update a car by the id in the request
// exports.update = (req, res) => {
//     const id = req.params.id;

//     Carro.update(req.body, {
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Car was updated successfully."
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot update Car with id=${id}. Maybe Car was not found or req.body is empty!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating Car with id=" + id
//             });
//         });
// };

// // Delete a car with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Carro.destroy({
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Car was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Car with id=${id}. Maybe Car was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Car with id=" + id
//             });
//         });
// };
