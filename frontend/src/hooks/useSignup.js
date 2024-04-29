import { set } from "mongoose";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({username, password, confirmPass}) => {
    const success = handleInputErrors({ username, password, confirmPass });
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, confirmPass }),
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};
export default useSignup;

function handleInputErrors({ username, password, confirmPass }) {
  if (!username || !password || !confirmPass) {
    alert("Por favor, llena todos los campos.");
    return false;
  }
  if (password !== confirmPass) {
    alert("Las contraseñas no coinciden.");
    return false;
  }
  if (password.length < 6) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return false;
  }
  return true;
}
