import express from "express";
import { contactController } from "../controllers";

const router = express.Router();
const { getAll, getOne, add, update, del } = contactController;

router.route("/").get(getAll).post(add);
router.route("/:id").get(getOne).put(update).delete(del);

export default router;
