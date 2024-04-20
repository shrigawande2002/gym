import React from 'react'
import { FetchData , ExercieseOptions } from '../utility/FetchData'
import Details from '../Components/Details'
import SimilerExercise from '../Components/SimilerExercise'
import Videos from '../Components/Videos'

function ExerciseDetails() {
  return (
    <>

    <Details/>
    <SimilerExercise/>
    <Videos/>
      
    </>
  )
}

export default ExerciseDetails
