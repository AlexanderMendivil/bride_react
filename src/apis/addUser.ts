import axios from "axios"
import { IGuest } from "../interface/guest"

export const addGuest = async ( guest: IGuest) =>{
    const token = localStorage.getItem( 'jwt_bride')
    const data = await axios.post('http://localhost:3001/guest', guest, {headers: {'Authorization': `Bearer ${token}`}} )
    return data.data
}