import { useEffect, useState } from 'react';
import { IGuest } from '../interface/guest';
import { getOneGuest } from '../apis/getOneUser';
import { useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, AppBar } from '@mui/material';
import { confirmInvite } from '../apis/confirmInvite';
import slideShow from "../components/slideShow.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import { SlideFive, SlideFour, SlideSix, SlideThree, SlideTwo } from './slides';


const ColorIcon = styled(MenuIcon)({
  color: '#CFC199',
})

const CustomButton = styled(Button)({
  backgroundColor: '#CFC199',
  color: '#FFFF',
})

export const SlideShow = () => {

  const [guest, setGuest] = useState<IGuest | null>(null)
  const [loadingSuccess, setLoadingSuccess] = useState<boolean>(false)
  const [loadingError, setLoadingError] = useState<boolean>(false)
  let { userId } = useParams();
  useEffect(() => {
    const getGuest = async () => {
      const guest = await getOneGuest(userId!)
      setGuest(guest)
    }
    getGuest()
  })

  const confirmSuccess = async () => {
    try {
      setLoadingSuccess(true)
      await confirmInvite(userId!, 'Aceptada')
    } catch (e) {

    } finally {
      setLoadingSuccess(false)
    }
  }
  const confirmError = async () => {
    try {
      setLoadingError(true)
      await confirmInvite(userId!, 'Rechazada')
    } catch (e) {

    } finally {
      setLoadingError(false)

    }
  }
  return (
    <>
      {guest ?
        <>
          <Box> 
            <AppBar position="fixed" style={{backgroundColor: '#FFFF'}}>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Button aria-label='drawer'>
                <ColorIcon />
                </Button>              
              </Box>
            </AppBar>
            
            <div className={slideShow.slideOne} >
              <div className={slideShow.opacity}>
                <h1 className={slideShow.invitation_heading} >We are getting married</h1>
                  <p className={slideShow.invitation_text}>16 de febrero de 2024</p>
                  <CustomButton disabled={loadingSuccess} variant='outlined' color='success' onClick={confirmSuccess}>
                    {loadingSuccess ? <CircularProgress size={20} /> : 'RSVP'}
                  </CustomButton>
    </div>
  </div>
            <SlideTwo />
            <SlideThree />
            <SlideFour/>
            <SlideFive/>
            <SlideSix/>

            <div className={slideShow.botones}>
              <div className={slideShow.opacity}>
                <Button disabled={loadingError} variant='outlined' color='error' onClick={confirmError}>
                  {loadingError ? <CircularProgress size={20} /> : 'Rechazar'}
                </Button>
              </div>
            </div>
          </Box>
        </>

        :
        <div>cargando...</div>}
    </>
  )
}
