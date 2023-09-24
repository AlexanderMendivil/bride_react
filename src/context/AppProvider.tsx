import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { IGuest } from "../interface/guest";
import { getGuests } from "../apis/getGuests";
import { useNavigate } from "react-router-dom";

export const AppProvider = ({ children }: any) => {
    const [ guests, setGuest ]= useState<IGuest[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () =>{
          const data = await getGuests() 
          setGuest(data)
        }
        getData()
      }, [])
      
      const setNewGuests = (guestsFunc: IGuest[] ) =>{
            setGuest(guestsFunc)
        }

      const setNewAddedGuest = ( guest: IGuest ) =>{
          const newGuests = [...guests, guest]
            setGuest(newGuests)
      }
    
      const logout = () => {
        localStorage.removeItem('jwt_bride')
        navigate("/login")
      }

    return (
     <AppContext.Provider value={{guests, setNewGuests, setNewAddedGuest, logout}}>
        { children }
     </AppContext.Provider>
    )
}