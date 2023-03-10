import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Exercise = () => {

  const exercises=useSelector(state=>state.allExercises.exercises)
  const renderList= exercises.map((exercise)=>{
    const {name,type,muscle,equipment,difficulty,instructions}=exercise;
    
    return(
    <div key={name}>
      <Link to = {`${name}`}>
      <p>{name}</p>
      </Link>
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