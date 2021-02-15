import React, { Component } from "react";

class ItemTable extends Component {
  render() {
    const items = this.props.items ? (
      <table className="table table-sm table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ComputerNr</th>
            <th scope="col">Fabrikat</th>
            <th scope="col">Model</th>
            <th scope="col">Mus</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {this.props.items.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.ComputerNr}</td>
              <td>{item.Fabrikat}</td>
              <td>{item.Model}</td>
              <td>{item.Mus}</td>
              <td>
                <div className="d-flex">
                  <button
                    onClick={() => this.props.onEdit(item)}
                    className="flex-fill fw-bold btn btn-primary btn-sm"
                  >
                    Edit
                  </button>
                </div>
              </td>
              <td>
                <div className="d-flex">
                  <button
                    onClick={() => this.props.onDelete(item.id)}
                    className="flex-fill fw-bold btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
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
        <h3>Items</h3>
        {items}
      </React.Fragment>
    );
  }
}

export default ItemTable;
