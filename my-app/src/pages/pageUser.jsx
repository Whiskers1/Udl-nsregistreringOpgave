import React, { Component } from "react";
import axios from "axios";
import UserTable from "../components/userTable";
import UserFrom from "../components/userFrom";

class PageUser extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3200/users").then((res) => {
      this.setState({
        users: res.data,
      });
      //console.log(this.state);
    });
  }
  handleAdd = (item) => {
    axios
      .post("http://localhost:3200/users", {
        ElevNr: item.ElevNr,
        Name: item.Name,
        Adresse: item.Adresse,
        By: item.By,
        PostNr: item.PostNr,
        CprNr: item.CprNr,
        Email: item.Email,
        StamKlasse: item.StamKlasse,
      })
      .then((res) => {
        axios.get("http://localhost:3200/users").then((res) => {
          this.setState({
            users: res.data,
          });
        });
      });
    console.log(item);
    console.log(this.state);
  };
  handleEdit = (id) => {};
  handleDelete = (id) => {
    axios.delete("http://localhost:3200/users/" + id).then((res) => {
      axios.get("http://localhost:3200/users").then((res) => {
        this.setState({
          users: res.data,
        });
      });
    });
  };
  render() {
    return (
      <React.Fragment>
        <UserFrom onAdd={this.handleAdd} />
        <UserTable
          users={this.state.users}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default PageUser;
