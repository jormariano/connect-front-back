import { Router } from 'express';
import { getProducts, getProduct } from '../controllers/products.controller.js';

const productsRouter = Router();

productsRouter.get('/', async (req, res) => {
  try {
    // Llamo al controlador
    const prods = await getProducts();
    res.status(200).send(prods);
  } catch (error) {
    res.status(500).send(error);
  }
});

productsRouter.get('/:id', async (req, res) => {
  try {
    const prodId = req.params.id;
    console.log(prodId);

    // Llamo al controlador
    const prod = await getProduct(prodId);

    if (prod) res.status(200).send(prod);
    else res.status(404).send('Producto no existe');
  } catch (error) {
    res
      .status(500)
      .send(`Error interno del servidor al consultar producto: ${error}`);
  }
});

export default productsRouter;
