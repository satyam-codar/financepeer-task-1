import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoginAuth from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function AuthApp() {
  return (
    // <div>
    //   <h1>hello world</h1>
    // </div>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/adminv2" component={Dashboard} />
              <PrivateRoute
                path="/adminv2/update-profile"
                component={UpdateProfile}
              />
              <Route path="/adminv2/signup" component={Signup} />
              <Route path="/adminv2/login" component={LoginAuth} />
              <Route
                path="/adminv2/forgot-password"
                component={ForgotPassword}
              />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default AuthApp;
