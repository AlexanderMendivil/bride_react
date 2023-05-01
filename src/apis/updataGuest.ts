import axios from "axios"
import { IGuest } from "../interface/guest"

export const updataGuest = async ( guest: IGuest) =>{
    console.log(guest)
    const data = await axios.put(' http://localhost:3001/guest', guest )
    return data.data
}