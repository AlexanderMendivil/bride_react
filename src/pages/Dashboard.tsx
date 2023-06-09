import { Button, CircularProgress, Container, Drawer, Snackbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { useContext, useState } from 'react';
import { AddGuestModal } from '../components/AddGuestModal';
import { columns } from '../utils/columnHeaders';
import { IGuest } from '../interface/guest';
import { deleteGuests } from '../apis/deleteGuest';
import { AppContext } from '../context/AppContext';
import AddIcon from '@mui/icons-material/Add';
import { inviteGuests } from '../apis/inviteGuests';

export const Dashboard = () => {

  const { guests, setNewGuests, logout } = useContext(AppContext)

  const [modal, setModal] = useState<boolean>(false)
  const [modalEdit, setModalEdit] = useState<boolean>(false)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ loadingInvite, setLoadingInvite ] = useState<boolean>(false)
  const [ error, setError ] = useState<boolean>(false)
  const [ deleted, setDeleted ] = useState<boolean>(false)
  const [ invited, setInvited ] = useState<boolean>(false)
  const [guestEdit, setGuestEdit] = useState<IGuest>()
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
  
  const handleModal = () => setModal(!modal)
  const handleModalEdit = () => setModalEdit(!modalEdit)
  const toggleDrawer = () => setOpenDrawer(!openDrawer)
  
  
  const deleteItems = async () =>{
    try{
      
      setLoading(true)
      await deleteGuests(rowSelectionModel)
      const remainGuest = guests.filter( guest => !rowSelectionModel.includes( guest.id! ));
      setNewGuests(remainGuest)
      setDeleted(true)

    }catch(e){
      setError(true)
    }finally{
      setLoading(false)
      setTimeout(()=> setError(false), 3000)
      setTimeout(()=> setDeleted(false), 3000)

    }
  }

  const invite = async () =>{
    try{
      
      setLoadingInvite(true)
      await inviteGuests(rowSelectionModel)
      setInvited(true)

    }catch(e){
      setError(true)
    }finally{
      setLoadingInvite(false)
      setTimeout(()=> setError(false), 3000)
      setTimeout(()=> setInvited(false), 3000)

    }
  }

  const setEditOptions = (row: any) => {
    setGuestEdit(undefined)
    setTimeout(()=>{
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
    }, 1)
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
            { invited  ? <Snackbar
                            open={invited}
                            autoHideDuration={3000}
                            message="Invitados con exito"
            /> :  null}
      <Typography variant='h3'>¡Agrega a tus invitados!</Typography>
      <Box sx={{width: '80%', display: 'flex', justifyContent: 'flex-end', marginBottom: 1}}>
        <Button sx={{marginRight: 3}} disabled={rowSelectionModel.length <= 0 || loading } variant="outlined" color='error' onClick={deleteItems}>{loading ? <CircularProgress size={20}/> : 'Eliminar'}</Button>
        <Button variant="outlined" onClick={toggleDrawer}>Menu</Button>
      
        <Drawer
            anchor={"right"}
            open={openDrawer}
            onClose={toggleDrawer}
            >
              <Box sx={{display: 'flex', flexDirection: 'column', width: 300, height: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
              
              <Container sx={{display: 'flex', flexDirection: 'column',alignItems: 'center', marginTop: 5}}>
                <Typography>Bodas app</Typography>
                <Button sx={{width: '80%', justifySelf: 'center', marginTop:2}} variant="outlined" onClick={handleModal}>
                <AddIcon/>
                  Agregar
                  </Button>
              </Container>
                <Button sx={{width: '80%', justifySelf: 'center', marginBottom: 3}} color='error' onClick={logout}>Logout</Button>
              </Box>
          </Drawer>
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
        <Box sx={{width: '80%', display: 'flex', justifyContent: 'flex-end'}}>
          <Button sx={{marginTop: 1, marginBottom: 1}} disabled={rowSelectionModel.length <= 0 || loadingInvite } variant="outlined" color='success' onClick={invite}>{loadingInvite ? <CircularProgress size={20}/> : 'Invitar'}</Button>
        </Box>
        <AddGuestModal modalState={modal} handleModal={handleModal} title='Agregar'/>
        {guestEdit !== undefined && <AddGuestModal modalState={modalEdit} handleModal={handleModalEdit} guest={guestEdit} title='Editar'/>}
  </Box>
  )
}
