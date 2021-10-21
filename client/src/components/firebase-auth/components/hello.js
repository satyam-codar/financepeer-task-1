import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Hello() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div>
      <h1>helllo</h1>
    </div>
  );
}
