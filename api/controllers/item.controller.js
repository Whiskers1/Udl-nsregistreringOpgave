const Item = require("../models/item.model");

// Create and Save a new Item
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Item
  const item = new Item({
    ComputerNr: req.body.ComputerNr,
    Fabrikat: req.body.Fabrikat,
    Model: req.body.Model,
    Mus: req.body.Mus,
  });

  // Save Item in the database
  Item.create(item, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Item.",
      });
    else res.send(data);
  });
};

// Retrieve all Items from the database.
exports.findAll = (req, res) => {
  Item.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Items.",
      });
    else res.send(data);
  });
};
exports.findAllFree = (req, res) => {
  Item.getAllFree((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Items.",
      });
    else res.send(data);
  });
};
// Find a single Item with a itemsId
exports.findOne = (req, res) => {
  Item.findById(req.params.itemId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.itemId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Item with id " + req.params.itemId,
        });
      }
    } else res.send(data);
  });
};

// Update a Item identified by the itemsId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Item.updateById(req.params.itemId, new Item(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.itemId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Item with id " + req.params.itemId,
        });
      }
    } else res.send(data);
  });
};

// Delete a Item with the specified itemsId in the request
exports.delete = (req, res) => {
  Item.remove(req.params.itemId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.itemId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Item with id " + req.params.itemId,
        });
      }
    } else res.send({ message: `Item was deleted successfully!` });
  });
};
