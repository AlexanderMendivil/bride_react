import { GridRowSelectionModel } from "@mui/x-data-grid"
import axios from "axios"

export const deleteGuests = async (ids: GridRowSelectionModel) =>{
    const data = await axios.delete(' http://localhost:3001/guest', {data: ids} )
    return data.data
}