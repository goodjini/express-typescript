import express from 'express';
import dotenv from 'dotenv';
import { router } from './router';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ミドルウェア設定
app.use(express.json());

// 
app.use('/users',router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
