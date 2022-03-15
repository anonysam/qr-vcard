import express from "express";
import contactRouter from "./contact";
import userRouter from "./user";

const router = new express.Router();

router.use("/api/contact", contactRouter);
router.use("/api/user", userRouter);

export default router;
