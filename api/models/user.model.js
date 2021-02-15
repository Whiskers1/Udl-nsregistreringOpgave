const sql = require("./db");

const User = function (user) {
  this.ElevNr = user.ElevNr;
  this.Name = user.Name;
  this.Adresse = user.Adresse;
  this.By = user.By;
  this.PostNr = user.PostNr;
  this.CprNr = user.CprNr;
  this.Email = user.Email;
  this.StamKlasse = user.StamKlasse;
};

User.getAll = (result) => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = (itemId, result) => {
  sql.query("SELETE * FROM users WHERE id = ${userId}", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE users SET ElevNr = ?, Name = ?, Adresse = ?, By = ?, PostNr = ?, CprNr = ?, Email = ?, StamKlasse = ? WHERE id = ?",
    [
      user.ElevNr,
      user.Name,
      user.Adresse,
      user.By,
      user.PostNr,
      user.CprNr,
      user.Email,
      user.StamKlasse,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found user with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

//sql.end();
module.exports = User;
