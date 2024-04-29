import User from "../models/user.model.js";
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log(
      "Error en getUsersForSidebar controller: ",
      error.message || error
    );
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};
