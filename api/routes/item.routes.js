module.exports = (app) => {
  const items = require("../controllers/item.controller");

  // Create a new Item
  app.get("/items", items.findAll);

  app.get("/items/free", items.findAllFree);

  // Retrieve all Items
  app.post("/items", items.create);

  // Retrieve a single Item with itemId
  app.get("/items/:itemId", items.findOne);

  // Update a Item with itemId
  app.put("/items/:itemId", items.update);

  // Delete a Item with itemId
  app.delete("/items/:itemId", items.delete);
};
