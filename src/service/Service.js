import axios from "axios";
const Base_url = "https://atjoin.in/lingayat_matrimony_api/";
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
  getFilterUser(
    workplace,
    looking_for_gender,
    income,
    married_status,
    agefrom,
    ageto
  ) {
    return axios.get(
      Base_url +
        "users/get-filterdata/" +
        workplace +
        "/" +
        looking_for_gender +
        "/" +
        income +
        "/" +
        married_status +
        "/" +
        agefrom +
        "/" +
        ageto
    );
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
}
export default new Service();
