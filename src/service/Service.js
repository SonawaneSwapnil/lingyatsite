import axios from "axios";
const Base_url="https://localhost:7119/";
class Service
{
    getAllstudent()
    {
        return axios.get(Base_url+"api/Students")
    }
}
export default new Service()
