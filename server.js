import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ConnectMongoose } from "./config/mongoose.js";
import route from "./routes/routes.js";
import bodyParser from "body-parser";

dotenv.config();

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));

// setup for ejs
server.set("view engine", "ejs");
server.set("views", "./views");

// routes
server.use("/", route);

server.get("/", (req, res) => {
  res.send("Hello");
});

server.listen(8080, () => {
  console.log("server is listening");
  ConnectMongoose();
});
