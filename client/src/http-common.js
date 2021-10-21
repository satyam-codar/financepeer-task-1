import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3030/yourPost",
  headers: {
    "Content-type": "application/json",
  },
});
