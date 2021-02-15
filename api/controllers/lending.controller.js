const Lending = require("../models/lending.model");

// Create and Save a new Lending
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Lending
  const lending = new Lending({
    ElevNr: req.body.ElevNr,
    ComputerNr: req.body.ComputerNr,
    Udlånsdato: req.body.Udlånsdato,
    Udløbsdato: req.body.Udløbsdato,
  });

  // Save Lending in the database
  Lending.create(lending, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Lending.",
      });
    else res.send(data);
  });
};

// Retrieve all Lendings from the database.
exports.findAll = (req, res) => {
  Lending.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Lendings.",
      });
    else res.send(data);
  });
};

// Find a single Lending with a lendingId
exports.findOne = (req, res) => {
  Lending.findById(req.params.lendingId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Lending with id ${req.params.lendingId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Lending with id " + req.params.lendingId,
        });
      }
    } else res.send(data);
  });
};

// Update a Lending identified by the lendingId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Lending.updateById(
    req.params.lendingId,
    new Lending(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Lending with id ${req.params.lendingId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Lending with id " + req.params.lendingId,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Lending with the specified lendingId in the request
exports.delete = (req, res) => {
  Lending.remove(req.params.lendingId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Lending with id ${req.params.lendingId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Lending with id " + req.params.lendingId,
        });
      }
    } else res.send(data);
  });
};
