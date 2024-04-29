import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./DB/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware para parsear el body de las peticiones desde req.body
app.use(cookieParser()); // Middleware para parsear las cookies
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});
