import { useDispatch } from "react-redux"
import { deleteGoal, updateGoal } from "../features/goals/goalSlice"
function GoalItem({goal}) {
    const dispatch = useDispatch()
  return (
    <div className="goal">
        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{goal.text}</h2>
        <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">X</button>
        <button onClick={() => dispatch(updateGoal(goal))} className="edit">Edit</button>
      
    </div>
  )
}

export default GoalItem
