import axios from "axios"
import { IGuest } from "../interface/guest"

export const addGuest = async ( guest: IGuest) =>{
    const data = await axios.post(' http://localhost:3000/guest', { data: { guest }})
    return data.data
}