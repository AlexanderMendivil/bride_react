import { useEffect, useState } from "react"
import { CounterDay } from "../components/CounterDay"
export const LandingPage = () => {

    const [background ,setBackground]= useState<string>('background-image2 flex fade-in-image')
    useEffect(() =>randomBackground(), [])
    const randomBackground = () =>{

        setInterval(()=> {
          let randomImage = Math.floor(Math.random() * 13);
          switch(randomImage){
            case 1: 
                setBackground('background-image2 flex fade-in-image');
                break;
            case 2: 
                setBackground('background-image3 flex fade-in-image');
                break;
            case 3: 
                setBackground('background-image4 flex fade-in-image');
                break;
            case 4: 
                setBackground('background-image5 flex fade-in-image');
                break;
            case 5: 
                setBackground('background-image7 flex fade-in-image');
                break;
            case 6: 
                setBackground('background-image9 flex fade-in-image');
                break;
            case 7: 
                setBackground('background-image10 flex fade-in-image');
                break;
            case 8: 
                setBackground('background-image11 flex fade-in-image');
                break;
            case 9: 
                setBackground('background-image12 flex fade-in-image');
                break;
            case 10: 
                setBackground('background-image13 flex fade-in-image'); 
                break;
            case 11: 
                setBackground('background-image14 flex fade-in-image');
                break;
            case 12: 
              setBackground('background-image15 flex fade-in-image'); 
              break;
            default:
              setBackground('background-image2 flex fade-in-image'); 
              break;
          }
  
        }, 5000);
      }
    useEffect(() => {
      
    }, [])
    
  return (
    <div className={background}>
      
    <div className="center">
      <h1 className="text">Save the date!</h1>
      <h3 className="text">16 de febrero de 2024</h3>
    </div>
    
    <div>
      <CounterDay/>
    </div>
    
  </div>
  )
}
