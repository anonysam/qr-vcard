import express from "express";
import { contactController } from "../controllers";

const router = express.Router();
const { getAll, getOne, add, update, del, vcard } = contactController;

router.route("/").get(getAll).post(add);
router.route("/:id").get(getOne).put(update).delete(del);
router.route("/vcard/:id").get(vcard);

export default router;
