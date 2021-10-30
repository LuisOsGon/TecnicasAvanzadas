import { Router as expressRouter } from "express";

import guest from "../middlewares/guest";
import PingController from "../controllers/ping";
import AuthController from "../controllers/auth";
import RoomController from "../controllers/room";
import authenticated from "../middlewares/authenticated";

const router = expressRouter();

router.get("/ping", PingController.index);

router.post("/login", guest, AuthController.login);
router.post("/register", guest, AuthController.register);

router.get("/rooms", authenticated, RoomController.list);
router.post("/rooms", authenticated, RoomController.create);
router.get("/rooms/:roomId", authenticated, RoomController.show);
router.post("/rooms/:roomId/join", authenticated, RoomController.joinRoom);
router.post("/rooms/:roomId/leave", authenticated, RoomController.leaveRoom);

router.use("*", (req, res) => res.status(404).json());

export default router;
