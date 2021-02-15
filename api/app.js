const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "hello world!" });
});

require("./routes/user.routes")(app);
require("./routes/item.routes")(app);
require("./routes/lending.routes")(app);

// set port, listen for requests
app.listen(3200, () => {
  console.log("Server is running on port 3200.");
});
