import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // Para que no se pueda acceder al token desde el frontend, previniendo ataques XSS
    sameSite: "strict", // Para prevenir ataques CSRF, que son ataques que se aprovechan de la sesión de un usuario
    secure: process.env.NODE_ENV === "production" ? true : false, // Para que solo se envíe el token en conexiones seguras
  });
};

export default generateTokenAndSetCookie;