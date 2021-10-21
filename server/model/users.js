const db = require("../database");

module.exports = class User {
  constructor(userId, id, title, body) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }

  save() {
    try {
      return db.execute(
        "INSERT INTO user_data (userId,id,title,body) VALUES (?,?,?,?)",
        [this.userId, this.id, this.title, this.body]
      );
    } catch (err) {
      const error = new Error(err);
      error.statusCode = 401;
      throw error;
    }
  }
  static getAll() {
    try {
      return db.execute("SELECT * from user_data");
    } catch (err) {
      const error = new Errow(err);
      error.statusCode = 401;
      throw error;
    }
  }
};
