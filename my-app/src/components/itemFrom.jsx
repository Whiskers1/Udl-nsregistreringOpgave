import React, { Component } from "react";

class ItemFrom extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    ComputerNr: "",
    Fabrikat: "",
    Model: "",
    Mus: "",
  };
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value.trim() });
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card w-50 my-2">
          <div className="card-body">
            <h5 className="card-title">Item from</h5>
            <form>
              <div className="row p-2 g-3">
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="ComputerNr"
                    type="text"
                    className="form-control"
                    placeholder="ComputerNr"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="Fabrikat"
                    type="text"
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
                    className="form-control"
                    placeholder="Model"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="Mus"
                    type="text"
                    className="form-control"
                    placeholder="Mus"
                  />
                </div>
              </div>
            </form>
            <div className="col-12 p-2">
              <button
                onClick={() => this.props.onAdd(this.state)}
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemFrom;
