const sql = require("./db");

const Item = function (item) {
  this.ComputerNr = item.ComputerNr;
  this.Fabrikat = item.Fabrikat;
  this.Model = item.Model;
  this.Mus = item.Mus;
};

Item.getAll = (result) => {
  sql.query("SELECT * FROM items", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("items: ", res);
    result(null, res);
  });
};
Item.getAllFree = (result) => {
  sql.query(
    "SELECT * FROM items AS it WHERE it.id NOT IN (SELECT le.ComputerNr FROM lendings AS le) ",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("items: ", res);
      result(null, res);
    }
  );
};

Item.create = (newItem, result) => {
  sql.query("INSERT INTO items SET ?", newItem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created item: ", { id: res.insertId, ...newItem });
    result(null, { id: res.insertId, ...newItem });
  });
};

Item.findById = (itemId, result) => {
  sql.query("SELETE * FROM items WHERE id = ${itemId}", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found item ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Item.updateById = (id, item, result) => {
  sql.query(
    "UPDATE items SET ComputerNr = ?, Fabrikat = ?, Model = ?, Mus = ? WHERE id = ?",
    [item.ComputerNr, item.Fabrikat, item.Model, item.Mus, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found item with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated item: ", { id: id, ...item });
      result(null, { id: id, ...item });
    }
  );
};

Item.remove = (id, result) => {
  sql.query("DELETE FROM items WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found item with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted item with id: ", id);
    result(null, res);
  });
};

//sql.end();
module.exports = Item;
