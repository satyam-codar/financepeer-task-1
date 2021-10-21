import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Hello() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div>
      <h1>helllo</h1>
      {/* <p>{JSON.stringify(currentUser)}</p> */}
      <br />
      {currentUser.email === "satyam@test.com" ? (
        <p>{currentUser && currentUser.email}</p>
      ) : (
        <p>Fuck off u mf</p>
      )}
      <p>{currentUser && currentUser.email}</p>
    </div>
  );
}
