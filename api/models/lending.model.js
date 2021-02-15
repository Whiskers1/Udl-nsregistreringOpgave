const sql = require("./db");

const Lending = function (lending) {
  this.ElevNr = lending.ElevNr;
  this.ComputerNr = lending.ComputerNr;
  this.Udlånsdato = lending.Udlånsdato;
  this.Udløbsdato = lending.Udløbsdato;
};

Lending.getAll = (result) => {
  sql.query(
    "SELECT le.id, us.ElevNr, it.ComputerNr, le.Udlånsdato, le.Udløbsdato FROM lendings AS le LEFT JOIN items AS it ON le.ComputerNr = it.id LEFT JOIN users AS us ON le.ElevNr = us.id",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("lendings: ", res);
      result(null, res);
    }
  );
};

Lending.create = (newItem, result) => {
  sql.query(
    "INSERT INTO lendings SET Udlånsdato = ?, Udløbsdato = ?, ElevNr = (SELECT id FROM users WHERE ElevNr = ? ), ComputerNr = (SELECT id FROM items WHERE ComputerNr = ? )",
    [
      newItem.Udlånsdato,
      newItem.Udløbsdato,
      newItem.ElevNr,
      newItem.ComputerNr,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created lending: ", { id: res.insertId, ...newItem });
      result(null, { id: res.insertId, ...newItem });
    }
  );
};

Lending.findById = (lendingId, result) => {
  sql.query("SELETE * FROM lendings WHERE id = ${lendingId}", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found lending ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Lending.updateById = (id, item, result) => {
  sql.query(
    "UPDATE lendings SET ElevNr = ?, ComputerNr = ?, Udlånsdato = ?, Udløbsdato = ? WHERE id = ?",
    [item.ElevNr, item.ComputerNr, item.Udlånsdato, item.Udløbsdato, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found lending with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated lending: ", { id: id, ...item });
      result(null, { id: id, ...item });
    }
  );
};

Lending.remove = (id, result) => {
  sql.query("DELETE FROM lendings WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found lending with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted lending with id: ", id);
    result(null, res);
  });
};

//sql.end();
module.exports = Lending;
