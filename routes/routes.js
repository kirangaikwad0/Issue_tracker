import express from "express";
const route = express.Router();
import {
  createController,
  deleteController,
  editController,
  homeController,
  readController,
  updateController,
} from "../controllers/controller.js";

route.get("/", homeController);
route.post("/", createController);
route.get("/read", readController);
route.get("/edit/:id", editController);
route.post("/update/:id", updateController);
route.get("/delete/:id", deleteController);
export default route;
