import React from "react";

function signup() {
  return (
    <div className="grid grid-cols-2 content-center justify-items-center items-center">
      <div className="form-control w-full max-w-xs">
        <div className="mb-3">
          <img className="w-1/3 mb-4" src="\src\assets\logo.png" alt="Logo" />
          <p className="text-2xl text-left font-bold mb-1">Regístrate ahora</p>
          <p className="text-sm text-left">
            Ingresa tus datos para crear una cuenta
          </p>
        </div>
        <div>
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
            placeholder="Crea tu contraseña"
            className="input input-bordered w-full max-w-xs mb-2 text-sm"
          />
          <div className="label">
            <span className="label-text">Confirmar contraseña</span>
          </div>
          <input
            type="text"
            placeholder="Ingresa nuevamente tu contraseña"
            className="input input-bordered w-full max-w-xs mb-2 text-sm"
          />
        </div>
        <div className="form-control mb-4">
          <label className="cursor-pointer label mb-4">
            <input type="checkbox" className="checkbox checkbox-accent" />
            <span className="label-text">
              He leído y acepto los{" "}
              <span className="text-accent">términos y condiciones</span>
            </span>
          </label>
          <button className="btn btn-accent">Registrarse</button>
        </div>
        <span className="label-text text-left">
          ¿Ya tienes una cuenta?{" "}
          <a href="/iniciarsesion" className="text-accent">
            Inicia sesión
          </a>
        </span>
      </div>
      <img className="h-screen w-screen" src="\src\assets\portada2.png" alt="Portada" />
    </div>
  );
}

export default signup;
