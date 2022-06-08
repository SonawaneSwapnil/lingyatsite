import axios from "axios";
const Base_url="https://atjoin.in/lingayat_matrimony_api/";
class Service
{
    getAllUsers()
    {
        return axios.get(Base_url+"users/get-users/")
    }
    saveAllUsers(data)
    {
        return axios.post(Base_url+"users/save-users",data)
    }
    // updateUsers(id,data)
    // {
    //     return axios.put(Base_url+"user/update-user/"+id,data)
    // }
    // deleteUsers(id)
    // {
    //     return axios.get(Base_url+"user/delete-user/"+id)
    // }

    // login 

    // getAllLogin()
    // {
    //     return axios.get(Base_url+"users/login")
    // }
    saveAllLogin(data)
    {
        return axios.post(Base_url+"users/login",data)
    }
}
export default new Service()
