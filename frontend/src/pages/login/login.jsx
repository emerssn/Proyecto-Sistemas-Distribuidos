import React from "react";

function login() {
  return (
    <div className="grid grid-cols-2 content-center justify-items-center items-center">
      <div className="form-control w-full max-w-xs">
        <div className="mb-3">
        <img className="w-1/3 mb-4" src="\src\assets\logo.png" alt="Logo" />
          <p className="text-2xl text-left font-bold mb-1">Inicia sesión</p>
          <p className="text-sm text-left">
            Ingresa tus datos para iniciar sesión
          </p>
        </div>
        <div className="mb-4">
          <div className="label">
            <span className="label-text">Nombre</span>
          </div>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="input input-bordered w-full max-w-xs mb-2 text-sm"
          />
          <div className="label">
            <span className="label-text">Contraseña</span>
          </div>
          <input
            type="text"
            placeholder="Introduce tu contraseña"
            className="input input-bordered w-full max-w-xs mb-2 text-sm"
          />
        </div>
        <button className="btn btn-accent mb-4">Iniciar sesión</button>

        <span className="label-text text-left">
          ¿No tienes una cuenta?{" "}
          <a href="/registrarse" className="text-accent">Regístrate</a>
        </span>
      </div>
      <div className="">
      <img className="h-screen w-screen" src="\src\assets\portada2.png" alt="Portada"/>
      </div>
    </div>
  );
}

export default login;
