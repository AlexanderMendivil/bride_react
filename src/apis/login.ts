import axios from "axios"
import { User } from "../interface/user"

export const loginApi = async ( user: User) =>{
    const data = await axios.post('http://localhost:3001/login', user )
    return data.data
}