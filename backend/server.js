import express from 'express';
import dotenv from 'dotenv';
import goalRouter from './routes/goalRoutes.js';
dotenv.config();
const port= process.env.PORT||5000;

const app = express();

app.use('/api/goals', goalRouter);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});