import { Navigate } from "react-router-dom";

interface PublicRoutesProps{
    children: JSX.Element;
}
export const PrivateRoutes = ({ children }: PublicRoutesProps) => {

    const  token  = localStorage.getItem( 'auth' );
      return ( token ) ? children : <Navigate to='/auth/login'/>
}
