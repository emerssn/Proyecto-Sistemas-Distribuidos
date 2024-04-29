import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

function signup() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPass: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
  };

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
        <form onSubmit={handleSubmit}>
          <div>
            <div className="label">
              <span className="label-text">Nombre</span>
            </div>
            <input
              required
              type="text"
              placeholder="Ingresa tu nombre"
              className="input input-bordered w-full max-w-xs mb-2 text-sm"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
            <div className="label">
              <span className="label-text">Contraseña</span>
            </div>
            <input
              required
              type="password"
              placeholder="Crea tu contraseña"
              className="input input-bordered w-full max-w-xs mb-2 text-sm"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <div className="label">
              <span className="label-text">Confirmar contraseña</span>
            </div>
            <input
              required
              type="password"
              placeholder="Ingresa nuevamente tu contraseña"
              className="input input-bordered w-full max-w-xs mb-2 text-sm"
              value={input.confirmPass}
              onChange={(e) =>
                setInput({ ...input, confirmPass: e.target.value })
              }
            />
          </div>
          <div className="form-control mb-4">
            <label className="cursor-pointer label mb-4">
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                required
              />
              <span className="label-text">
                He leído y acepto los{" "}
                <span className="text-accent">términos y condiciones</span>
              </span>
            </label>
            <button className="btn btn-accent" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Registrarse"
              )}
            </button>
          </div>
          <span className="label-text text-left">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/iniciarsesion" className="text-accent">
              Inicia sesión
            </Link>
          </span>
        </form>
      </div>

      <img
        className="h-screen w-screen"
        src="\src\assets\portada2.png"
        alt="Portada"
      />
    </div>
  );
}

export default signup;
