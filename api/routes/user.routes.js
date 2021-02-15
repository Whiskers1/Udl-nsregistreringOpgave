module.exports = (app) => {
  const users = require("../controllers/user.controller");

  // Create a new User
  app.get("/users", users.findAll);

  // Retrieve all Users
  app.post("/users", users.create);

  // Retrieve a single user with userId
  app.get("/users/:userId", users.findOne);

  // Update a User with userId
  app.put("/users/:userId", users.update);

  // Delete a User with userId
  app.delete("/users/:userId", users.delete);
};
