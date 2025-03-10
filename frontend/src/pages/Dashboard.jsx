import { useSelector,useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import GoalForm from "../components/GoalForm"
import Spinner from "../components/Spinner" 
import { getGoals, reset } from "../features/goals/goalSlice"
import GoalItem from "../components/GoalItem"
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
  
    if (!user || user === null) {
      navigate("/login");
    } else {
      dispatch(getGoals());
    }
  
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);
  
if(isLoading){
  return <Spinner />
}
  return (
    <><section className="heading">
      <h1>Welcome {user&&user.name}</h1>
      <p>Tasks Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
      </>
  )
}

export default Dashboard
