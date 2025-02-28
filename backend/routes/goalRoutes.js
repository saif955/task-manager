//desc: goal routes
import express from 'express';
import { getGoals, setGoal, updateGoal, deleteGoal } from '../controllers/goalController.js';
const router = express.Router();

router.get('/', getGoals);
  
router.post('/', setGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

export default router;