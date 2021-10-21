import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../src/components/firebase-auth/contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/firebase-auth/components/Dashboard";
import ViewData from "./components/firebase-auth/components/ViewData";
import UpdateProfile from "./components/firebase-auth/components/UpdateProfile";
import Signup from "./components/firebase-auth/components/Signup";
import LoginAuth from "./components/firebase-auth/components/Login";
import ForgotPassword from "./components/firebase-auth/components/ForgotPassword";
import PrivateRoute from "./components/firebase-auth/components/PrivateRoute";

function App() {
  return (
    <div>
      {/* <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    > */}
      {/* <div className="w-100" style={{ maxWidth: "400px" }}> */}
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w-100">
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={LoginAuth} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute exact path="/view-data" component={ViewData} />
              </div>
            </Container>
          </Switch>
        </AuthProvider>
      </Router>
      {/* </div> */}
      {/* </Container> */}
    </div>
  );
}

export default App;

// "firebase": "^9.1.3"
