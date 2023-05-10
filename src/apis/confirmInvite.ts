import axios from "axios"

export const confirmInvite = async (id: string, status: string) =>{
    const data = await axios.put(' http://localhost:3001/invite', { id, status }
    )
    return data.data
}