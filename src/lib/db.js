// lib/db.js
import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://sahilkalkal:mangal911@cluster0.d7ocjdw.mongodb.net/hirezy";

if (!MONGO_URI) {
  throw new Error("❌ Please add MONGO_URI in .env");
}

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
