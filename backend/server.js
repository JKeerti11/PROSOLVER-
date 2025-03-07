require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;
console.log("MongoDB URI:", mongoURI); // Debugging

if (!mongoURI) {
  console.error("❌ MongoDB URI is missing in .env file!");
  process.exit(1);
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
