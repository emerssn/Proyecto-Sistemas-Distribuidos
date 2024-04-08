import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "No estás autorizado para acceder" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ message: "No estás autorizado para acceder" });
    }

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ error: "No se encontró el usuario" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error en protectRoute middleware: ", error.message || error);
    req.status(500).json({ message: error.message });
  }
};

export default protectRoute;
