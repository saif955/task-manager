import asyncHandler from 'express-async-handler';
//@desc get all goals
//@route GET /api/goals
//@access Public
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Data fetched'});

  })

//@desc create a goal
//@route POST /api/goals
//@access Public
const setGoal = asyncHandler( async(req, res) => {
    if(!req.body.text){
        res.status(400)
       throw new Error('Please enter a goal');
    }
     res.status(201).json({message: 'Data created'});
  })

//@desc update a goal
//@route PUT /api/goals/:id
//@access Public
const updateGoal = asyncHandler(async(req, res) => {
    const id = req.params.id;
    res.status(200).json({message: `Data ${id} updated`});
  })

//@desc delete a goal
//@route DELETE /api/goals/:id
//@access Public
const deleteGoal = asyncHandler(async(req, res) => {
    const id = req.params.id;
    res.status(200).json({message: `Data ${id} deleted`});
  })



export {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};