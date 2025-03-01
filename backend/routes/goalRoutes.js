//desc: goal routes
import express from 'express';
import { getGoals, setGoal, updateGoal, deleteGoal } from '../controllers/goalController.js';
import {protect} from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/',protect,getGoals);

router.post('/',protect,setGoal);

router.put('/:id',protect,updateGoal);

router.delete('/:id',protect,deleteGoal);

export default router;