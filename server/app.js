const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const database = require("./database");
const routes = require("./routes");

const fileStoragePosts = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Posts");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/yourPost", multer({ storage: fileStoragePosts }).single("postFile"));

app.use("/postFile", express.static(path.join(__dirname, "Posts")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "Authorization"
  );
  next();
});

app.get("/check", (req, res) => {
  res.send("OOKK");
});

app.use("/yourPost", routes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

database.getConnection().then((_) => {
  const server = app.listen(3030);
});
