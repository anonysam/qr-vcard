const express = require("express");
const res = require("express/lib/response");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

try {
  connectDB();
} catch {
  res.status(500).json({ success: false, error: "Server Error" });
}

app.get("/", (req, res) => {
  res.send("Welcome to Digital Business Card API");
});

app.listen(process.env.PORT, () => {
  console.log(`Digital Business Card API running on port ${process.env.PORT}`);
});
