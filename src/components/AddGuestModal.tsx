import { Box, Button, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Snackbar, TextField, Typography } from '@mui/material';
import { modalStyle } from '../styles/modalStyle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addGuest } from '../apis/addUser';
import { useContext, useState } from 'react';
import { IGuest } from '../interface/guest';
import { updataGuest } from '../apis/updataGuest';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import CloseIcon from '@mui/icons-material/Close';

  interface AddGuestModalProps{
    modalState: boolean
    handleModal: () => void
    guest?: IGuest
    title?: string
  }
export const AddGuestModal = ({ modalState, handleModal, guest, title }: AddGuestModalProps) => {
  const { setNewAddedGuest, guests, setNewGuests } = useContext(AppContext)
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ successAdd, setSuccessAdd ] = useState<boolean>(false)
    const [ successEdit, setSuccessEdit ] = useState<boolean>(false)
    const [ error, setError ] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            nombre: guest ? guest?.nombre : '',
            num_invitados: guest ? guest?.num_invitados : 0,
            status: guest ? guest?.status : 'Pendiente',
            email: guest ? guest?.email : '',
            phone_number: guest ? guest?.phone_number : '',
        },
        onSubmit: async (values) => {
            try{
                setLoading(true)
                if(!guest){
                  const newGuest = {id: uuidv4(), ...values}
                    await addGuest(newGuest)
                    setNewAddedGuest(newGuest)
                    setSuccessAdd(true)
                }else{
                    await updataGuest({id: guest.id, ...values})
                    const newArray = guests.map(guestMap => guestMap.id === guest.id ? guest : guestMap);
                    setNewGuests(newArray)
                    setSuccessEdit(true)

                }
            }catch(e){
                setError(true)
            }finally{
                setLoading(false)
                setTimeout(()=> setError(false), 3000)
                setTimeout(()=> setSuccessAdd(false), 3000)
                setTimeout(()=> setSuccessEdit(false), 3000)

            }
        },
        validationSchema: Yup.object({
            
            nombre: Yup.string().matches(/^[a-zA-Z]+$/, 'Nombre debe contener solo letras').required('Campo requerido'),
            num_invitados: Yup.number().required('Campo requerido'),
            status: Yup.string().required('Campo requerido'),
            email: Yup.string()
            .email('El correo no tiene un formato válido')
            .required('Campo requerido'),
            phone_number: Yup.string().matches(/^\+?[1-9]\d{1,14}$/, 'Número de telefono invalido').required('Campo requerido'),
        })
    });
  return (
      <Modal
        open={modalState}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
            { error  ? <Snackbar
                            open={error}
                            autoHideDuration={3000}
                            message="Algo salió mal, Ups!!"
            /> :  null}
            { successAdd  ? <Snackbar
                            open={successAdd}
                            autoHideDuration={3000}
                            message="Agregado con exito"
            /> :  null}
            { successEdit  ? <Snackbar
                            open={successEdit}
                            autoHideDuration={3000}
                            message="Editado con exito"
            /> :  null}
            <Box sx={{display: 'flex', justifyContent:'flex-end'}}>
              <Button color='error' onClick={handleModal}><CloseIcon/></Button>
            </Box>
            <Typography variant='h5' sx={{marginBottom: 3}}>{title}</Typography>
            <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>

                <Grid item xs={6}>
                <TextField
                sx={{marginBottom: 3}}
                  id="nombre"
                  name="nombre"
                  label="Nombre"
                  type='text'
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                  helperText={formik.touched.nombre && formik.errors.nombre}
                />
                <TextField
                sx={{marginBottom: 3}}
                  id="num_invitados"
                  name="num_invitados"
                  label="Número de invitados"
                  type='number'
                  InputProps={{
                    inputProps: { min: 0 }
                  }}
                  value={formik.values.num_invitados}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.num_invitados && Boolean(formik.errors.num_invitados)}
                  helperText={formik.touched.num_invitados && formik.errors.num_invitados}
                  />
                <FormControl fullWidth>
                 <InputLabel id="status">Status</InputLabel>
                 <Select
                   id="status"
                   name="status"
                   value={formik.values.status}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   error={formik.touched.status && Boolean(formik.errors.status)}
                 >
                   <MenuItem value={'Pendiente'}>Pendiente</MenuItem>
                 </Select>
                </FormControl>
                </Grid>

                <Grid item xs={6}>

            
                <TextField
                sx={{marginBottom: 3}}
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                sx={{marginBottom: 3}}
                  id="phone_number"
                  name="phone_number"
                  label="Número de telefono"
                  type='tel'
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                  helperText={formik.touched.phone_number && formik.errors.phone_number}
                />
                 </Grid>
             </Grid>
                <Button disabled={ loading } sx={{marginBottom: 3, alignSelf: 'flex-end', width: 150, height: 40, marginTop: 3}} type="submit" variant="outlined" color="primary">
                  {loading ? <CircularProgress size={20}/> : title === 'Editar' ? 'Editar' : 'Agregar'}
                </Button>
             </form>
        </Box>
      </Modal>
  )
}
