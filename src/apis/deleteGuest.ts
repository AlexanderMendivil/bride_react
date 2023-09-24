import { GridRowSelectionModel } from "@mui/x-data-grid"
import axios from "axios"

export const deleteGuests = async (ids: GridRowSelectionModel) =>{
    const token = localStorage.getItem( 'jwt_bride')
    const data = await axios.delete('http://localhost:3001/guest', {
        data: ids, 
        headers: {'Authorization': `Bearer ${token}`}} )
    return data.data
}