Se utiliza el stack MERN para el proyecto:
MongoDB
Express
ReactJS
NodeJS

Para el frontend se utiliza la libreria Reactjs con el framework Vitejs, ademas del framework Tailwindcss.
Para el backend se utiliza Nodejs junto a Express y la base de datos MongoDB.

Dependencias necesarias para el backend:
Express - Sirve para inicializar el servidor Express.
dotenv - Para leer variables de entorno.
cookie-parser - Middleware de Express para analizar y manejar las cookies que se envian desde el cliente al servidor.
bcryptjs - Para cuidar las contrasenas mediante el hash.
mongoose - Para conectarnos a nuestra base de dato MongoDB y poder interactuar con ella.
socket.io - Para entablar una comunicacion en tiempo real.
jsonwebtoken - Para poder manejar los token de autenticacion.
nodemon - Para monitorear los cambios en el codigo y que automaticamente reinicie el servidor.

Dependencias necesarias para el frontend:
Tailwindcss - Framework para manejar los estilos de forma rapida y mejorada.

El proyecto esta separado por las carpetas backend (MongoDB, Express y Nodejs) y frontend (Reactjs):

Carpeta backend:
server.js - archivo que crea el servidor Express.
