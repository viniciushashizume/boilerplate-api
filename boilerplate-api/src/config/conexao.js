import mongoose from "mongoose";
import dotenv from "dotenv";

// Lê o arquivo .env
dotenv.config();

// await: espera conectar antes de seguir
// dbName: troque pelo nome do banco do seu projeto
await mongoose.connect(process.env.MONGO_URI, { dbName: "boilerplate" });
console.log("Conectado ao MongoDB!");

export default mongoose;
