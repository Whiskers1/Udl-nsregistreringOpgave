import React, { Component } from "react";

class UserTable extends Component {
  state = {};
  render() {
    const users = this.props.users ? (
      <table className="table table-sm table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ElevNr</th>
            <th scope="col">Name</th>
            <th scope="col">CprNr</th>
            <th scope="col">Email</th>
            <th scope="col">StamKlasse</th>
            <th scope="col">Adresse</th>
            <th scope="col">By</th>
            <th scope="col">PostNr</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {this.props.users.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td>{user.ElevNr}</td>
              <td>{user.Name}</td>
              <td>{user.CprNr}</td>
              <td>{user.Email}</td>
              <td>{user.StamKlasse}</td>
              <td>{user.Adresse}</td>
              <td>{user.By}</td>
              <td>{user.PostNr}</td>
              <td>
                <div className="d-flex">
                  <button
                    onClick={() => this.props.onEdit(user.id)}
                    className="flex-fill fw-bold btn btn-primary btn-sm"
                  >
                    Edit
                  </button>
                </div>
              </td>
              <td>
                <div className="d-flex">
                  <button
                    onClick={() => this.props.onDelete(user.id)}
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
        <h3>Users</h3>
        {users}
      </React.Fragment>
    );
  }
}

export default UserTable;
