import React, { Component } from "react";

class HomeTables extends Component {
  render() {
    const table1 = this.props.forsent ? (
      <table className="table table-sm table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ElevNr</th>
            <th scope="col">ComputerNr</th>
            <th scope="col">UdlånsDato</th>
            <th scope="col">UdløbsDato</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {this.props.forsent.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.ElevNr}</td>
              <td>{item.ComputerNr}</td>
              <td>{new Date(item.Udlånsdato).toLocaleDateString()}</td>
              <td>{new Date(item.Udløbsdato).toLocaleDateString()}</td>
              <td className="d-flex">
                <button
                  onClick={() => this.props.onAflever(item.id)}
                  className="flex-fill fw-bold btn btn-success btn-sm"
                >
                  Aflever
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    ) : (
      <div>Loading table...</div>
    );

    const table2 = this.props.lendings ? (
      <table className="table table-sm table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ElevNr</th>
            <th scope="col">ComputerNr</th>
            <th scope="col">UdlånsDato</th>
            <th scope="col">UdløbsDato</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {this.props.lendings.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.ElevNr}</td>
              <td>{item.ComputerNr}</td>
              <td>{new Date(item.Udlånsdato).toLocaleDateString()}</td>
              <td>{new Date(item.Udløbsdato).toLocaleDateString()}</td>
              <td className="d-flex">
                <button
                  onClick={() => this.props.onAflever(item.id)}
                  className="flex-fill fw-bold btn btn-success btn-sm"
                >
                  Aflever
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    ) : (
      <div>Loading table...</div>
    );
    return (
      <React.Fragment>
        <h3>Foresent aflevert.</h3>
        {table1}
        <h3>Udlåns.</h3>
        {table2}
      </React.Fragment>
    );
  }
}

export default HomeTables;
