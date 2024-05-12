import productModel from '../models/productsModel.js';

export const getProducts = async () => {
  const prods = await productModel.find();

  return prods;
};

export const getProduct = async (id) => {
  const prod = await productModel.findById(id);

  if (prod) return prod;
  else return null;
};
