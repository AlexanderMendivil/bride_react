import axios from "axios"
import { IGuest } from "../interface/guest"

export const updataGuest = async ( email: string, guest: IGuest) =>{
    const data = await axios.put(' http://localhost:3000/guest', { data: { email, guest }})
    return data.data
}