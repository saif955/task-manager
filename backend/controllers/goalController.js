import asyncHandler from 'express-async-handler';
import Goal from '../models/goalModel.js';
import User from '../models/userModel.js';
//@desc get all goals
//@route GET /api/goals
//@access Public
const getGoals = asyncHandler(async(req, res) => {

  const goals = await Goal.find({ user: req.user._id });
    res.status(200).json(goals);

  })

//@desc create a goal
//@route POST /api/goals
//@access Public
const setGoal = asyncHandler( async(req, res) => {
    if(!req.body.text){
        res.status(400)
       throw new Error('Please enter a goal');
    }
    const goal = await Goal.create({
      text: req.body.text,
      user: req.user._id
    });
     res.status(201).json(goal);
  })

//@desc update a goal
//@route PUT /api/goals/:id
//@access Public
const updateGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }
    
    // check for valid user
    if(!req.user){
        res.status(400)
        throw new Error('User not found');
    }
    // check if goal belongs to user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not authorized');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedGoal);
  })

//@desc delete a goal
//@route DELETE /api/goals/:id
//@access Public
const deleteGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }
    
    // check for valid user
    if(!req.user){
        res.status(400)
        throw new Error('User not found');
    }
    // check if goal belongs to user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not authorized');
    }
      await  goal.deleteOne();  
    res.status(200).json({id: req.params.id});
  })



export {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};