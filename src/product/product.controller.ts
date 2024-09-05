import { Request, Response } from "express";
import { createProductService } from "./product.service";

export const createProductController = async (req: Request, res: Response) => {
  const { name, price, color } = req.body;

  const product = await createProductService(name, price, color);
  res.status(201).json({ product, message: "product created succesfully" });
};
