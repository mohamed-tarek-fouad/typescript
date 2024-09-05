import prisma from "../prisma";

export const createProductService = async (name: string, price: number, color: string) => {
  const product = await prisma.product.create({
    data: {
      color,
      price,
      name,
    },
  });
};
