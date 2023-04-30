import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getGuests } from '../apis/getGuests';

const columns: GridColDef[] = [
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 150,
    editable: true,
  },
  {
    field: 'num_invitados',
    headerName: 'Numero de invitados',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'status',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'email',
    sortable: false,
    width: 200,
  },
  {
    field: 'phone_number',
    headerName: 'Numero de telefono',
    sortable: false,
    width: 160,
  },
];

export const Dashboard = () => {

  const [guests, setGuest] = useState()
  useEffect(() => {
    
    const getData = async () =>{
      const data = await getGuests() 
      setGuest(data)
    }

    getData()
  }, [])
  
  const deleteGuest = (email: string) => {
    
  }

  return (
    <Box sx={{width: '100%'}}>
      <Typography>Agrega a tus invitados!</Typography>
      <DataGrid
      sx={{height: 400, width: '100%' }}
        rows={guests ? guests : []}
        getRowId={(row) => row?._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
  </Box>
  )
}
