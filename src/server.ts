import Express from "express";
import { productRouter } from "./product/product.router";
const port = 3000;
const app = Express();
app.use(Express.json());
app.use("/api/v1/product", productRouter);
app.listen(port, () => {
  console.log("server is running on port", port);
});
