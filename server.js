import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import routes from "./routes/index.js";

dotenv.config();
const app = express();

try {
  connectDB();
} catch {
  res.status(500).json({ success: false, error: "Server Error" });
}

//JSON and URL Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to Digital Business Card API");
});

app.use(routes);

//Error Handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Digital Business Card API running on port ${process.env.PORT}`);
});
