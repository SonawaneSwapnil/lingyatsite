import axios from "axios";
const Base_url="https://atjoin.in/lingayat_matrimony_api/";
class Service
{
    getAllUsers()
    {
        return axios.get(Base_url+"users/get-users")
    }
    saveAllUsers(data)
    {
        return axios.post(Base_url+"users/save-users",data)
    }
    updateUsers(data)
    {
        return axios.put(Base_url+"users/update-users",data)
    }
    // deleteUsers(id)
    // {
    //     return axios.get(Base_url+"user/delete-user/"+id)
    // }

    // login 

    // getAllLogin()
    // {
    //     return axios.get(Base_url+"users/login")
    // }
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
    // Expecations
    saveAllEceptation(data)
    {
        return axios.post(Base_url+"exceptation/save-expectation",data)
    }
}
export default new Service()
