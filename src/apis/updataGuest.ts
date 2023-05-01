import axios from "axios"
import { IGuest } from "../interface/guest"

export const updataGuest = async ( guest: IGuest) =>{
    const token = localStorage.getItem( 'jwt_bride')
    const data = await axios.put(' http://localhost:3001/guest', guest, {headers: {'Authorization': `Bearer ${token}`}} )
    return data.data
}