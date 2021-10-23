import { Router as expressRouter } from "express";
import PingController from "../controllers/ping";
import AuthController from "../controllers/auth";

const router = expressRouter();

router.get("/ping", PingController.index);

router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.post("/register", AuthController.register);

router.use("*", (req, res) => res.status(404).json());

export default router;
