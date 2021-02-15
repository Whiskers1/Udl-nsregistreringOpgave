import React, { Component } from "react";

class LendingFrom extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    ElevNr: "",
    ComputerNr: "",
    Udlånsdato: "",
    Udløbsdato: "",
  };
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value.trim() });
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card w-50 my-2">
          <div className="card-body">
            <h5 className="card-title">Lending from</h5>
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
                    name="ComputerNr"
                    type="text"
                    className="form-control"
                    placeholder="ComputerNr"
                  />
                </div>
              </div>
              <div className="row p-2 g-3">
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="Udlånsdato"
                    type="date"
                    className="form-control"
                    placeholder="UdlånsDato"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={this.handleChange}
                    name="Udløbsdato"
                    type="date"
                    className="form-control"
                    placeholder="UdløbsDato"
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

export default LendingFrom;
