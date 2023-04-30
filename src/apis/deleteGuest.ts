import axios from "axios"

export const deleteGuest = async (email: string) =>{
    const data = await axios.delete(' http://localhost:3000/guest', { data: { email }})
    return data.data
}