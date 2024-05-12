import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import varenv from './dotenv.js';
import productsRouter from './routes/products.routes.js';

const app = express();
const PORT = 4000;

dotenv.config();

/* Permitir todas las rutas de ejecucion
app.use(cors());
*/

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST', 'UPDATE', 'DELETE'],
};

app.use(cors(corsOptions));

mongoose
  .connect(varenv.mongo_url)
  .then(() => console.log('DB is connect'))
  .catch((e) => console.log(e));

app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`);
});
