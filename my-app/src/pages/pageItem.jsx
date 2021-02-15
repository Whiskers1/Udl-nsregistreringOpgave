import React, { Component } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import ItemTable from "../components/itemTable";
import ItemFrom from "../components/itemFrom";

class PageItem extends Component {
  state = {
    item: {},
    show: false,
    items: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3200/items").then((res) => {
      this.setState({
        items: res.data,
      });
      //console.log(this.state);
    });
  }
  handleAdd = (item) => {
    axios
      .post("http://localhost:3200/items", {
        ComputerNr: item.ComputerNr,
        Fabrikat: item.Fabrikat,
        Model: item.Model,
        Mus: item.Mus,
      })
      .then((res) => {
        axios.get("http://localhost:3200/items").then((res) => {
          this.setState({
            items: res.data,
          });
        });
      });
  };
  handleEdit = (item) => {
    axios
      .put("http://localhost:3200/items/" + item.id, {
        ComputerNr: item.ComputerNr,
        Fabrikat: item.Fabrikat,
        Model: item.Model,
        Mus: item.Mus,
      })
      .then((res) => {
        axios.get("http://localhost:3200/items").then((res) => {
          this.setState({
            items: res.data,
            show: false,
            item: {},
          });
        });
      });
  };
  handleDelete = (id) => {
    axios.delete("http://localhost:3200/items/" + id).then((res) => {
      axios.get("http://localhost:3200/items").then((res) => {
        this.setState({
          items: res.data,
        });
      });
    });
  };
  handleShow = (item) => {
    this.setState({
      show: true,
      item: item,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
      item: {},
    });
  };
  handleChange = (event) => {
    this.setState({
      item: {
        ...this.state.item,
        [event.target.name]: event.target.value.trim(),
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <ItemFrom onAdd={this.handleAdd} />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="row p-2 g-3">
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="ComputerNr"
                    type="text"
                    value={this.state.item.ComputerNr}
                    className="form-control"
                    placeholder="ComputerNr"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="Fabrikat"
                    type="text"
                    value={this.state.item.Fabrikat}
                    className="form-control"
                    placeholder="Fabrikant"
                  />
                </div>
              </div>
              <div className="row p-2 g-3">
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="Model"
                    type="text"
                    value={this.state.item.Model}
                    className="form-control"
                    placeholder="Model"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="Mus"
                    type="text"
                    value={this.state.item.Mus}
                    className="form-control"
                    placeholder="Mus"
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => this.handleEdit(this.state.item)}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <ItemTable
          items={this.state.items}
          onEdit={this.handleShow}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default PageItem;
