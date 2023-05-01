import axios from "axios"

export const getGuests = async () =>{
    const data = await axios.get(' http://localhost:3001/guest')
    return data.data
}