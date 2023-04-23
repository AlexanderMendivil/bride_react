import { Navigate } from "react-router-dom";

interface PublicRoutesProps{
    children: JSX.Element;
}
export const PublicRoutes = ({ children }: PublicRoutesProps) => {

    const token = localStorage.getItem( 'auth' );
      return ( token ) ? <Navigate to='/dashboard'/> : children;
}
