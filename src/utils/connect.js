import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO, {
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