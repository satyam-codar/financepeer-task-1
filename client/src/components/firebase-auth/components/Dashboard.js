import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

import UserTableService from "../../../services/dataService";
import RetrieveData from "./retrieveUserData";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const [file, setFile] = useState(null);
  const [submit, setSubmit] = useState(null);

  const types = ["application/json"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
      console.log("hello there");
    }
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    setSubmit(1);
    var data = file;
    var formData = new FormData();
    formData.append("postFile", data);
    UserTableService.create(formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col mt-2">
                  <strong>You are logged in as:</strong> {currentUser.email}
                </div>
                <div className="col text-center">
                  <div className="w-100 text-center">
                    <Button variant="link" onClick={handleLogout}>
                      Log Out
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col mt-2">
                  <strong>Upload a JSON file: </strong>
                  <input type="file" onChange={handleChange} />
                  <Button type="submit" onClick={handleSubmit}>
                    Upload
                  </Button>
                  {error && <div className="error">{error}</div>}
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col mt-2">
                  <h3>User Data:</h3>
                  <RetrieveData />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
