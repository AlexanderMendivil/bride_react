import axios from "axios"

export const getGuests = async () =>{
    const token = localStorage.getItem( 'jwt_bride')
    const data = await axios.get(' http://localhost:3001/guest', {
        headers: {'Authorization': `Bearer ${token}`}})
    return data.data
}