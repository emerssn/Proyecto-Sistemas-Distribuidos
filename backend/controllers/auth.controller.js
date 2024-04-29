import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { username, password, confirmPass } = req.body;
    if (password !== confirmPass)
      return res.status(400).json({ message: "Las contraseñas no coinciden" });
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const profilePicture = "https://avatar.iran.liara.run/public";

    const newUser = new User({
      username,
      password: hashedPassword,
      profilePicture,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.status(400).json({ message: "No se pudo crear el usuario" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user?.password || "");
    if (!user || !validPassword) {
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    }
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Sesión cerrada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
