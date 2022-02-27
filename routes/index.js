import express from "express";
import contactRouter from "./contact.js";

const router = new express.Router();

router.use("/api/contact", contactRouter);

export default router;
