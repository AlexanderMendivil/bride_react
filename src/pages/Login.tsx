import login from "./login.module.css"
export const Login = () => {
  return (
    <div className={login.body}>
    
    <div className={login.background}>
         <div className={login.shape}></div>
         <div className={login.shape}></div>
     </div>
     <form className={login.form}>
         <h3 className={login.h3}>Login</h3>
 
         <label className={login.label}>Username</label>
         <input className={login.input} type="text" placeholder="Nombre" id="username"/>
 
         <label className={login.label}>Password</label>
         <input className={login.input} type="password" placeholder="Contraseña" id="password"/>
 
         <button className={login.button} type="submit">Log In</button>
     </form>
 </div>
  )
}
