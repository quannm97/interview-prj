import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setExcercises } from "../../../features/redux/actions/exerciseActions";

const ExerciseList = () => {
  const exercises = useSelector(state=>state.allExercises.exercises);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises", {
        headers: {
          "x-rapidapi-key":
            "193ef0c959mshde92975bc37d984p17b3abjsnb368029dd5fe",
          "x-rapidapi-host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      })
      .catch((error) => {
        console.log("Err", error);
      });
    dispatch(setExcercises(response.data));
  };

  useEffect(() => {
    
      fetchProducts();
    
  }, [useNavigate("/user")]);

  console.log("exercises",exercises)
  return <div>ExerciseList</div>;
};

export default ExerciseList;
