import { Router as expressRouter } from "express";
import PingController from "../controllers/ping";
// import UserController from "../controllers/user.js";

const router = expressRouter();

router.get("/ping", PingController.index);

// router.get("/user", UserController.index);

router.use("*", (req, res) => res.status(404).json());

export default router;
