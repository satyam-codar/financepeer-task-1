import http from "../http-common";
class UserTableService {
  getAll() {
    return http.get("/getUserData");
  }
  get(id) {
    return http.get(`/userData/${id}`);
  }
  create(formData) {
    return http.post("/postJsonFile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
export default new UserTableService();
