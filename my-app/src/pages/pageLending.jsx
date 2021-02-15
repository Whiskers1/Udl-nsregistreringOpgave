import React, { Component } from "react";
import axios from "axios";
import LendingTables from "../components/lendingTables";
import LendingFrom from "../components/lendingFrom";

class PageLending extends Component {
  state = {
    lendings: [],
    free: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3200/lendings").then((res) => {
      this.setState({
        lendings: res.data,
      });
      //console.log(this.state);
    });
    axios.get("http://localhost:3200/items/free").then((res) => {
      this.setState({
        free: res.data,
      });
    });
  }
  handleAdd = (item) => {
    axios
      .post("http://localhost:3200/lendings", {
        ElevNr: item.ElevNr,
        ComputerNr: item.ComputerNr,
        Udlånsdato: item.Udlånsdato,
        Udløbsdato: item.Udløbsdato,
      })
      .then((res) => {
        axios.get("http://localhost:3200/lendings").then((res) => {
          this.setState({
            lendings: res.data,
          });
        });
        axios.get("http://localhost:3200/items/free").then((res) => {
          this.setState({
            free: res.data,
          });
        });
      });
    console.log(item);
    console.log(this.state);
  };
  handleDelete = (id) => {
    axios.delete("http://localhost:3200/lendings/" + id).then((res) => {
      axios.get("http://localhost:3200/lendings").then((res) => {
        this.setState({
          lendings: res.data,
        });
      });
      axios.get("http://localhost:3200/items/free").then((res) => {
        this.setState({
          free: res.data,
        });
      });
    });
  };
  render() {
    return (
      <React.Fragment>
        <LendingFrom onAdd={this.handleAdd} />
        <LendingTables
          onAflever={this.handleDelete}
          lendings={this.state.lendings}
          free={this.state.free}
        />
      </React.Fragment>
    );
  }
}

export default PageLending;
