import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log(error);
    }
};

export default connectToMongoDB;