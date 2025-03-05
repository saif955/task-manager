import express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import goalRouter from './routes/goalRoutes.js';
import userRouter from './routes/userRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';
import path from 'path';
import { fileURLToPath } from 'url'; // Add this import

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  // Update path resolution
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Please set to production');
  });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});