import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import res from "express/lib/response.js";

dotenv.config();
const app = express();

try {
  connectDB();
} catch {
  res.status(500).json({ success: false, error: "Server Error" });
}

//JSON and URL Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Digital Business Card API");
});

app.listen(process.env.PORT, () => {
  console.log(`Digital Business Card API running on port ${process.env.PORT}`);
});
