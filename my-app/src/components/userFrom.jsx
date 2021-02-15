import React, { Component } from "react";

class UserFrom extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    ElevNr: "",
    Name: "",
    CprNr: "",
    Email: "",
    StamKlasse: "",
    Adresse: "",
    By: "",
    PostNr: "",
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value.trim() });
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card w-50 my-2">
          <div className="card-body">
            <h5 className="card-title">User from</h5>
            <form>
              <div className="row p-2 g-3">
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="ElevNr"
                    type="text"
                    className="form-control"
                    placeholder="ElevNr"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="Name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="row p-2 g-3">
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="CprNr"
                    type="text"
                    className="form-control"
                    placeholder="CprNr"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="Email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row p-2 g-3">
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="StamKlasse"
                    type="text"
                    className="form-control"
                    placeholder="StamKlasse"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="Adresse"
                    type="text"
                    className="form-control"
                    placeholder="Adresse"
                  />
                </div>
              </div>
              <div className="row p-2 g-3">
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="By"
                    type="text"
                    className="form-control"
                    placeholder="By"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="PostNr"
                    type="text"
                    className="form-control"
                    placeholder="PostNr"
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

export default UserFrom;
