import axios from "axios";
const Base_url="https://atjoin.in/lingayat_matrimony_api/";
class Service
{
    getAllUsers()
    {
        return axios.get(Base_url+"users/get-users");
    }
    saveAllUsers(data)
    {
        return axios.post(Base_url+"users/save-users",data)
    }
    updateUsers(data)
    {
        return axios.put(Base_url+"users/update-users",data)
    }
    getSingleUser(id){
        return axios.get(Base_url+"users/get-userdata/"+id);
    }
    saveAllLogin(data)
    {
        return axios.post(Base_url+"users/login",data)
    }

    // family
    saveAllFamily(data)
    {
        return axios.post(Base_url+"users/save-family",data)
    }
    updateFamily(data)
    {
        return axios.put(Base_url+"users/update-family",data)
    }
    // Expecations
    saveAllEceptation(data)
    {
        return axios.post(Base_url+"exceptation/save-expectation",data)
    }
    updateExceptation(data)
    {
        return axios.put(Base_url+"users/update-expectation",data)
    }
}
export default new Service()
