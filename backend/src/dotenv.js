import dotenv from 'dotenv';

dotenv.config();

const varenv = {
  mongo_url: process.env.MONGO_DB_URL,
};

export default varenv;
