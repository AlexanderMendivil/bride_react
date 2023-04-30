import axios from "axios"

export const getGuests = async () =>{
    const data = await axios.get(' http://localhost:3000/guest')
    return data.data
}