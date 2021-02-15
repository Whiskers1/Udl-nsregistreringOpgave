module.exports = (app) => {
  const lendings = require("../controllers/lending.controller");

  // Create a new Lending
  app.get("/lendings", lendings.findAll);

  // Retrieve all Lendings
  app.post("/lendings", lendings.create);

  // Retrieve a single Lending with lendingId
  app.get("/lendings/:lendingId", lendings.findOne);

  // Update a Lending with lendingId
  app.put("/lendings/:lendingId", lendings.update);

  // Delete a Lending with lendingId
  app.delete("/lendings/:lendingId", lendings.delete);
};
