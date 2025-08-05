import express from "express";

import authSeller from "../middlewares/authSeller.js";
import {
  isSellerAuth,
  sellerLogin,
  sellerLogout,
} from "../controllers/sellerController.js";
import { productList } from "../controllers/productController.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/is-auth", authSeller, isSellerAuth);
sellerRouter.post("/logout", sellerLogout);
sellerRouter.get("/list", productList);

export default sellerRouter;
