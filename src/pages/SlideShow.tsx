import { useEffect, useState } from 'react';
//import { Slide } from 'react-slideshow-image';
import { IGuest } from '../interface/guest';
import { getOneGuest } from '../apis/getOneUser';
import { useParams } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import { confirmInvite } from '../apis/confirmInvite';
import slideShow from "../components/slideShow.module.css";

const SlideOne = ({ nombre }: { nombre: string }) => (
  <div className={slideShow.slideOne} >
    <div className={slideShow.opacity}>
      <h1 className={slideShow.invitation_heading} >Bienvenid@ a nuestra boda {nombre}!</h1>
      <p className={slideShow.invitation_text}>Celebrando a Andrea y Jose Ines</p>
      <p className={slideShow.invitation_text}><b>Fecha:</b> 16 de febrero de 2024</p>
      <p className={slideShow.invitation_text}><b>Lugar:</b> Hermosillo, Sonora</p>
      <p className={slideShow.invitation_text}><i>"El amor une nuestras vidas, los invitamos a compartir nuestro día especial"</i></p>
    </div>
  </div>
);

const SlideTwo = () => (
  <div className={slideShow.slideTwo} >
    <div className={slideShow.opacity}>
      <h2 className={slideShow.invitation_heading} >Detalles del evento</h2>
      <p className={slideShow.invitation_text}><b>Itinerario:</b> Ceremonia a las 18:00, seguida de cóctel, cena y baile</p>
      <p className={slideShow.invitation_text}><b>Código de vestimenta:</b> Etiqueta formal</p>
      <p className={slideShow.invitation_text}><b>Regalos:</b> No es necesario, su presencia es nuestro mejor regalo :)</p>
      <p className={slideShow.invitation_text}><b><i>#Andrea&Jose</i></b></p>
    </div>
  </div>
);

const SlideThree = () => (
  <div className={slideShow.slideThree} >
    <div className={slideShow.opacity}>
      <h2 className={slideShow.invitation_heading} >¡Gracias!</h2>
      <p className={slideShow.invitation_text}>Por favor, confirma tu asistencia antes del 1 de Junio</p>
      <p className={slideShow.invitation_text}>¡Gracias por ser parte de nuestro día especial, esperamos verte pronto!</p>
    </div>
  </div>
);

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
          <div>
            <SlideOne nombre={guest.nombre} />
            <SlideTwo />
            <SlideThree />

            <div className={slideShow.botones}>
              <div className={slideShow.opacity}>
                <Button disabled={loadingSuccess} variant='outlined' color='success' onClick={confirmSuccess}>
                  {loadingSuccess ? <CircularProgress size={20} /> : 'Aceptar'}
                </Button>
                <Button disabled={loadingError} variant='outlined' color='error' onClick={confirmError}>
                  {loadingError ? <CircularProgress size={20} /> : 'Rechazar'}
                </Button>
              </div>
            </div>
          </div>
        </>

        :
        <div>cargando...</div>}
    </>
  )
}
