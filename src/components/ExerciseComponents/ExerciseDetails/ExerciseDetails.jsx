import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedExcercise } from '../../../features/redux/actions/exerciseActions';

const ExerciseDetails = () => {
  let exercise = useSelector(state=>state.selectedExercise)
  const {exerciseName} = useParams();
    console.log(exerciseName)
    const {type,muscle,equipment,difficulty,instructions}=exercise;
    const dispatch = useDispatch();
    const fetchExerciseDetails= async() => {
        const response = await axios.get(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?name=${exerciseName}`).catch(error=>{
          console.log(error);
        })
        dispatch(selectedExcercise(response.data))
      }
      
      useEffect(()=>{
        if (exerciseName && exerciseName!=="") {
          fetchExerciseDetails();
        }
      },[exerciseName])
      console.log(exercise)
  return (
  <div>
  {Object.keys(exercise).length === 0 ? (
    <div>...Loading</div>
  ):
    (<div>
        <h1>{exerciseName}</h1>
      <p>Type: {type}</p>
      <p>Muscle: {muscle}</p>
      <p>Equipment: {equipment}</p>
      <p>Difficulty: {difficulty}</p>
      <p>Instructions: {instructions}</p>

    </div>
        )}
        </div>
  )
}

export default ExerciseDetails