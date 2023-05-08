import { GridRowSelectionModel } from "@mui/x-data-grid"
import axios from "axios"

export const inviteGuests = async (ids: GridRowSelectionModel) =>{
    const token = localStorage.getItem( 'jwt_bride')
    const data = await axios.post(' http://localhost:3001/invite', { ids },{ headers: {'Authorization': `Bearer ${token}`}})
    return data.data
}