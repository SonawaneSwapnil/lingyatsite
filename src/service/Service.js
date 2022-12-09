import axios from "axios";
const Base_url = "http://localhost:8080/";
class Service {
  getAllUsers() {
    return axios.get(Base_url + "users/get-users");
  }
  saveAllUsers(data) {
    return axios.post(Base_url + "users/save-users", data);
  }
  updateUsers(data) {
    return axios.put(Base_url + "users/update-users", data);
  }
  getSingleUser(id) {
    return axios.get(Base_url + "users/get-userdata/" + id);
  }
  saveAllLogin(data) {
    return axios.post(Base_url + "users/login", data);
  }

  // family
  updateFamily(data) {
    return axios.put(Base_url + "users/update-family", data);
  }
  // Expecations

  updateExceptation(data) {
    return axios.put(Base_url + "users/update-expectation", data);
  }
  // FilterData
  getFilterUser(data) {
    return axios.post(Base_url + "users/get-filterdata", data);
  }

  getUserByContact(contact) {
    return axios.get(Base_url + "users/verify-contact/" + contact);
  }

  updatePassword(data) {
    return axios.post(Base_url + "users/update-reset-password", data);
  }

  // getImage path
  getDomainPath() {
    return axios.get(Base_url + "users/get-domainPath");
  }
  // save feedback
  saveAllFeedback(data) {
    return axios.post(Base_url + "users/save_feedback", data);
  }

  // dashboard apis

  getAllCompletedUsers() {
    return axios.get(Base_url + "dashboard/get-completed-users");
  }
  getAllInCompletedUsers() {
    return axios.get(Base_url + "dashboard/get-incomplete-users");
  }
  deleteUser(id) {
    return axios.delete(Base_url + "users/delete-users/" + id);
  }

  resetPassword(data) {
    return axios.put(Base_url + "dashboard/update-user-pass", data);
  }

  adminLogin(data) {
    return axios.post(Base_url + "dashboard/admin-login", data);
  }
}
export default new Service();
