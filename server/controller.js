const User = require("./model/users");
const fs = require("fs");
exports.addJsonData = (req, res, next) => {
  const fileUrl = req.file.filename.replace("\\", "/");
  const mainUrl = "Posts/" + fileUrl;
  console.log("fileURL ", mainUrl);
  fs.readFile(mainUrl, function (err, data) {
    if (err) {
      throw err;
    } else {
      //main logic
      const userJson = JSON.parse(data);
      console.log(userJson.length);
      const userJsonLen = userJson.length;
      let i;
      for (i = 0; i < userJsonLen; i++) {
        const user = new User(
          userJson[i].userId,
          userJson[i].id,
          userJson[i].title,
          userJson[i].body
        );
        user
          .save()
          .then()
          .catch((err) => {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
          });
        // consolse.log(userJson[i].userId);
      }

      res
        .status(201)
        .send(JSON.stringify({ result: "User data stored in the Database." }));
    }
  });
};
exports.getUserData = (req, res, next) => {
  User.getAll()
    .then((result) => {
      if (!result[0]) {
        const error = new error("Data not found");
        error.statusCode = 404;
        throw error;
      }
      console.log(result);
      res.status(201);
      res.send(JSON.stringify({ results: result[0] }));
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
