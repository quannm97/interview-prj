import React from 'react'
import { useSelector } from 'react-redux'

const Exercise = () => {

  const exercises=useSelector(state=>state.allExercises.exercises)
  const renderList= exercises.map((exercise)=>{
    const {name,type,muscle,equipment,difficulty,instructions}=exercise;
    return(
    <div key={name}>
      <h2>{name}</h2>
    </div>
    );
  })
  return(
    <div>
      {renderList}
    </div>
  )
}

export default Exercise