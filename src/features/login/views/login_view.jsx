import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'

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
    <div>
        <h1>¡Bienvenido!</h1>


        <form onSubmit={handleSubmit}>
          <input type="email" name="email" />
          <br />
          <input type="password" name="password" />
          <br />
          <button type="submit">Iniciar Sesión</button>
        </form>

      </div>
  )
}

export default LoginView