import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connection.readyState === 1) return; // Evita reconectar se já estiver conectado.

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection failed!", error);
    throw new Error("Connection failed!");
  }
};

export default connect;
