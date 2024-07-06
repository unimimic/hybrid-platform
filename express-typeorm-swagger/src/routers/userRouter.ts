import express from "express";
import { UserController } from "../controllers/userController";

const router = express.Router();
const userController = new UserController();

router.get("/users", async (req, res) => {
  try {
    const users = await userController.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "error.message" });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await userController.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "error.message" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const newUser = await userController.createUser(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "error.message" });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const updatedUser = await userController.updateUser(userId, req.body);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "error.message" });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const deleteResult = await userController.deleteUser(userId);
    res.json(deleteResult);
  } catch (error) {
    res.status(500).json({ error: "error.message" });
  }
});

export default router;