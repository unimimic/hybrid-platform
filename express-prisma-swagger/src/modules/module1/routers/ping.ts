import express from "express";
import PingController from "../controllers/ping";

const ping = express.Router();

ping.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default ping;