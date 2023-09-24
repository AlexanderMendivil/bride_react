import { Button, Divider } from '@mui/material';
import slideShow from "../components/slideShow.module.css";
import styled from '@emotion/styled';
import ChurchIcon from '@mui/icons-material/Church';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { CounterDay } from '../components';

const CustomBorderButton = styled(Button)({
  border: '1px solid #CFC199',
  color: '#CFC199',
  fontWeight: '400',
})

const ColorChurchIcon = styled(ChurchIcon)({
  color: '#000000',
})

const ColorCoctailIcon = styled(LocalBarIcon)({
  color: '#000000',
})

const ColorMealIcon = styled(DinnerDiningIcon)({
  color: '#000000',
})
export const SlideTwo = () => (
    <div className={slideShow.slideTwo} >
      <div className={slideShow.opacity2}>
        <ColorChurchIcon />
        <p className={`${slideShow.infoText}`}>Ceremonia religiosa</p>
        <p className={`${slideShow.infoText}`}>4:00 PM</p>
        <p className={`${slideShow.infoText}`}>Parroquia del Espiruto Santo</p>
        <p className={`${slideShow.infoText}`}>Ave. José Rafael Campoy 605 Colonia Pitic</p>
        <CustomBorderButton>
          <p>Ver en Google Maps</p>
        </CustomBorderButton>
  
      </div>
    </div>
  );
  
  export const SlideThree = () => (
    <div className={slideShow.slideThree} >
      <div className={slideShow.opacity2}>
        <ColorCoctailIcon/>
        <p className={`${slideShow.infoText}`}>Coctail de bienvenida</p>
        <p className={`${slideShow.infoText}`}>5:30 PM</p>
        <p className={`${slideShow.infoText}`}>Granaja Ferraris</p>
        <p className={`${slideShow.infoText}`}>Blvd. Agustin G. del Campo Quinta Emilia</p>
        <CustomBorderButton>
          <p>Ver en Google Maps</p>
        </CustomBorderButton>
  
  
      </div>
    </div>
  );
  
  export const SlideFour = () => (
    <div className={slideShow.slideThree} >
      <div className={slideShow.opacity2}>
        <ColorMealIcon/>
        <p className={`${slideShow.infoText}`}>Recepción</p>
        <p className={`${slideShow.infoText}`}>6:30 PM</p>
        <p className={`${slideShow.infoText}`}>Granaja Ferraris</p>
        <p className={`${slideShow.infoText}`}>Blvd. Agustin G. del Campo Quinta Emilia</p>
        <CustomBorderButton>
          <p>Ver en Google Maps</p>
        </CustomBorderButton>
  
  
      </div>
    </div>
  );

  export const SlideFive = () => (
    <div className={slideShow.slideThree}>
        <div style={{height: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems:'center'}} className={slideShow.slideFive}>
          <p>Dias para el evento</p>
          <CounterDay/>
        </div>
      <div className={slideShow.bookInfo}>
        <div style={{marginBottom: 20}}>
          <p className={`${slideShow.infoText}`}>Hospedaje</p>
          <Divider/>
        </div>
        <p className={`${slideShow.infoText}`}>Para todos nuestros invitados de fuera de la ciudad, les compartimos dos opciones de hospedaje cerca del lugar del evento.</p>  
  

        <div className={slideShow.suites}>
          <div>
            <p>asds</p>
          </div>
          <div>
            <p className={`${slideShow.infoText}`}>Holiday Inn Hotel & Suites Hermosillo Aeropuerto</p>
            <p className={`${slideShow.infoText}`}>Teléfono: (662) 5000460</p>
          </div>
        </div>

        <div className={slideShow.suites}>
          <div>
            <p>asds</p>
          </div>
          <div>
            <p className={`${slideShow.infoText}`}>Holiday Inn Hotel & Suites Hermosillo Aeropuerto</p>
            <p className={`${slideShow.infoText}`}>Teléfono: (662) 5000460</p>
          </div>
        </div>
      </div>
    </div>
  );

  export const SlideSix = () => (
    <div className={slideShow.slideThree} >
      <div className={slideShow.opacity2}>
        <p className={`${slideShow.infoText}`}>Mesa re regalos</p>
        <p className={`${slideShow.infoText}`}>Para nosotros lo más importante es contar con tu presencia en este día tan especial, pero si quieres regalarnos algo te compartimos estas opciones.</p>
        <p className={`${slideShow.infoText}`}>Granaja Ferraris</p>
        <p className={`${slideShow.infoText}`}>Blvd. Agustin G. del Campo Quinta Emilia</p>
        <CustomBorderButton>
          <p>Ver en Google Maps</p>
        </CustomBorderButton>
  
  
      </div>
    </div>
  );