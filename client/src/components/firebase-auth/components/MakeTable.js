/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
class MakeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    function Data(props) {
      return (
        <tr>
          <td>{props.userId}</td>
          <td>{props.id} </td>
          <td>{props.title}</td>
          <td>{props.body}</td>
        </tr>
      );
    }
    return (
      <div className="table-responsive">
        <table className="table table-sm table-hover ml-3">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>

          <tbody>
            {data.map((child) => (
              <Data
                key={child.id}
                userId={child.userId}
                id={child.id}
                title={child.title}
                body={child.body}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MakeTable;
