import Express from "express";
import { createProductController } from "./product.controller";
export const productRouter = Express.Router();
productRouter.post("/", createProductController);
