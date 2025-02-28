
const getGoals = (req, res) => {
    res.status(200).json({message: 'Data fetched'});
    
  }

const createGoal = (req, res) => {
    res.status(201).json({message: 'Data created'});
  }

const updateGoal = (req, res) => {
    const id = req.params.id;
    res.status(200).json({message: `Data ${id} updated`});
  }

const deleteGoal =(req, res) => {
    const id = req.params.id;
    res.status(200).json({message: `Data ${id} deleted`});
  }



export {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};