import express from "express";
import {db} from "../server.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "hello" });
});

export default router;
