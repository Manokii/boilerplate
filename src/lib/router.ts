import express from "express";

export const router = express.Router();

router.get("/hello", async (_req, res) => {
  res.status(200).json({ message: "Hello World!" });
});
