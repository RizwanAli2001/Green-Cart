import express from "express";

import mongoose from "mongoose";
import { addAdress, getAdress } from "../controllers/addressContoller.js";
import authUser from "../middlewares/authUser.js";

const addressRouter = express.Router();

addressRouter.post("/add", authUser, addAdress);
addressRouter.get("/get", authUser, getAdress);

export default addressRouter;
