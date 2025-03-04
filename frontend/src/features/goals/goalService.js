import axios from "axios";

const API_URL = "/api/goals/";


//Create Goal
const createGoal = async (goalData, token )=>{
    const config ={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }


    const response = await axios.post(API_URL, goalData, config)    

    return response.data
}
//get goal
const getGoals = async ( token )=>{
    const config ={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }


    const response = await axios.get(API_URL, config)    

    return response.data
}
//DELETE goal
const deleteGoal = async ( goalID, token )=>{
    const config ={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }


    const response = await axios.delete(API_URL+goalID, config)    

    return response.data
}
//update goal
const updateGoal = async ( goalID, goalData, token )=>{
    const config ={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }


    const response = await axios.put(API_URL+goalID, goalData, config)    

    return response.data
}


const goalService ={
    createGoal,
    getGoals,
    deleteGoal,
    updateGoal
}

export default goalService