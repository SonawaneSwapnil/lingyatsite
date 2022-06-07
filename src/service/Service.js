
import axios from "axios";
const Base_url="https://atjoin.in/lingayat_matrimony_api/";
class Service{
getAllUsers(){
   return axios.get(Base_url+"user/get-user");
}

// send data to database
saveUsers(data){
   return axios.post(Base_url+"user/save-user",data);
}

deleteUsers(id){
   return axios.delete(Base_url+"user/delete-user/id"+id)
}

updateUsers(id,data){
   return axios.put(Base_url+'user/update-user'+id,data)
}
}
export default new Service();