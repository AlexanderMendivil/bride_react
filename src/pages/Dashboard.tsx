import { Button, CircularProgress, Snackbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getGuests } from '../apis/getGuests';
import { AddGuestModal } from '../components/AddGuestModal';
import { columns } from '../utils/columnHeaders';
import { IGuest } from '../interface/guest';
import { deleteGuests } from '../apis/deleteGuest';

export const Dashboard = () => {

  const [guests, setGuest] = useState<IGuest[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [modalEdit, setModalEdit] = useState<boolean>(false)
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<boolean>(false)
  const [ deleted, setDeleted ] = useState<boolean>(false)
  const [guestEdit, setGuestEdit] = useState<IGuest>()
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

  useEffect(() => {
    const getData = async () =>{
      const data = await getGuests() 
      setGuest(data)
    }
    getData()
  }, [])
  
  const handleModal = () => setModal(!modal)
  const handleModalEdit = () => setModalEdit(!modalEdit)
  
  const deleteItems = async () =>{
    try{
      
      setLoading(true)
      await deleteGuests(rowSelectionModel)
      const remainGuest = guests.filter( guest => !rowSelectionModel.includes( guest.id! ));
      setGuest(remainGuest)
      setDeleted(true)

    }catch(e){
      setError(true)
    }finally{
      setLoading(false)
      setTimeout(()=> setError(false), 3000)
      setTimeout(()=> setDeleted(false), 3000)

    }
  }

  const setEditOptions = (row: any) => {
    const guest = {
      id: row.id,
      nombre: row.nombre,
      num_invitados: row.num_invitados,
      status: row.status,
      email: row.email,
      phone_number: row.phone_number,
    }
    setGuestEdit(guest)
    handleModalEdit()
  }

  return (
    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center'}}>
      { error  ? <Snackbar
                            open={error}
                            autoHideDuration={3000}
                            message="Algo salió mal, Ups!!"
            /> :  null}
            { deleted  ? <Snackbar
                            open={deleted}
                            autoHideDuration={3000}
                            message="Eliminado con exito"
            /> :  null}
      <Typography variant='h3'>¡Agrega a tus invitados!</Typography>
      <Box sx={{width: '80%', display: 'flex', justifyContent: 'flex-end', marginBottom: 1}}>
        <Button sx={{marginRight: 2}} variant="outlined" onClick={handleModal}>Agregar</Button>
        <Button disabled={rowSelectionModel.length <= 0} variant="outlined" color='error' onClick={deleteItems}>{loading ? <CircularProgress size={20}/> : 'Eliminar'}</Button>
      </Box>
      <DataGrid
      sx={{height: '50%', width: '80%' }}
      rows={guests ? guests : []}
      onRowClick={(param) => setEditOptions(param.row)}
      rowSelection={true}
      getRowId={(row) => row?.id}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        />
        <AddGuestModal modalState={modal} handleModal={handleModal} title='Agregar'/>
        {guestEdit !== undefined && <AddGuestModal modalState={modalEdit} handleModal={handleModalEdit} guest={guestEdit} title='Editar'/>}
  </Box>
  )
}
