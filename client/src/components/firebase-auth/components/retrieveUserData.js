import React, { Component } from "react";
import UserTableService from "../../../services/dataService";
import MakeTable from "./MakeTable";

class RetrieveData extends Component {
  constructor(props) {
    super(props);
    this.retrieveUserData = this.retrieveUserData.bind(this);
    this.state = {
      userInfo: [],
    };
  }
  componentDidMount() {
    this.retrieveUserData();
  }
  retrieveUserData() {
    UserTableService.getAll()
      .then((response) => {
        this.setState({ userInfo: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { userInfo } = this.state;

    console.log(userInfo);
    return (
      <div>
        <MakeTable data={userInfo} />
      </div>
    );
  }
}

export default RetrieveData;
