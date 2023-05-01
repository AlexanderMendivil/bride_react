import { createContext } from "react";
import { IGuest } from "../interface/guest";

interface IContext {
    guests: IGuest[],
    setNewGuests: (guestsFunc: IGuest[]) => void,
    setNewAddedGuest: (guest: IGuest) => void,
    logout: () => void
}
export const AppContext = createContext<IContext>({
    guests: [],
    setNewGuests: () => {},
    setNewAddedGuest: () => {},
    logout: () => {},
})