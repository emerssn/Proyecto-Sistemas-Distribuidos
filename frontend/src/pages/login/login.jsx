import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="label">
              <span className="label-text">Nombre</span>
            </div>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              className="input input-bordered w-full max-w-xs mb-2 text-sm"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="label">
              <span className="label-text">Contraseña</span>
            </div>
            <input
              type="password"
              placeholder="Introduce tu contraseña"
              className="input input-bordered w-full max-w-xs mb-2 text-sm"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-accent mb-4 w-full" disabled={loading}>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Iniciar sesión"
            )}
          </button>
          <span className="label-text text-left">
            ¿No tienes una cuenta?{" "}
            <Link to="/registrarse" className="text-accent">
              Regístrate
            </Link>
          </span>
        </form>
      </div>
      <div className="">
        <img
          className="h-screen w-screen"
          src="\src\assets\portada2.png"
          alt="Portada"
        />
      </div>
    </div>
  );
}

export default login;
