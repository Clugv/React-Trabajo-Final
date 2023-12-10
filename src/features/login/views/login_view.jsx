import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'
import 'bootstrap/dist/css/bootstrap.css'

const LoginView = () => {

  const { login } = useAuth();
  //console.log(isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Me quedo con una reference del formulario
    const form = e.target;
    //Creo el formData
    const formData = new FormData(form);
    //Desestructuro los campos
    const { email, password } = Object.fromEntries(formData);

    login(email, password);
  };

  return (
    <div className='container' style={{
      backgroundImage: `url(images/website_large.jpg)`,
      //height:'680px',
      //width: '100%',  
      }}>
      <div className='row'>
          <div className='col'></div>
          <div className='col login-form'  style={{
            backgroundColor: 'rgba(0,0,0,.75)',
            borderRadius: '4px',
            boxSizing: 'border-box',
            padding: '60px 68px 40px',
          }}>

          <div className='login-page-container'>
            <h1 className='login-h1'>Inicia Sesión</h1>
            <form  className="form-inc" onSubmit={handleSubmit}>
              <input type="email" name="email" className='form-input border border-white' placeholder='Email o número de teléfono' />
              <input type="password" name="password" className='form-input border border-white' placeholder='Contraseña'/>
              <button type="submit" className='btn login-button'>Iniciar Sesión</button>
              <a href="#" className='login-link'>¿Olvidaste la contraseña?</a>
            </form>
          </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
  )
}

export default LoginView