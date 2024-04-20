import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { ExercieseOptions, FetchData } from '../utility/FetchData'
import Pagination from '@mui/material/Pagination'
import { useState, useEffect } from 'react'
import ExerciseCard from './ExerciseCard'

function Exercises({ exercise, setExercise, bodyPart }) {
  
  const [currentPage , setCurrentpage] = useState(1);
  const exercisesPerPage = 9 ;
  
 const indexofLastExercise = currentPage * exercisesPerPage ;
 const indexofFirstExercise = indexofLastExercise - exercisesPerPage ;
 const currentExercise = Array.isArray(exercise) ? exercise.slice(indexofFirstExercise, indexofLastExercise) : [];


useEffect( ()=>{

  const  fetchExerciseData = async()=>{
    let exercisedata = [];
    if(bodyPart === 'all'){
      
      exercisedata =  await FetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100', ExercieseOptions);
    }else{
      exercisedata =  await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, ExercieseOptions);
    }
    setExercise(exercisedata)
  }
  fetchExerciseData(); 
},[bodyPart])



  const  paginate = (e ,value)=>{
setCurrentpage(value)
window.scrollTo({ top: 1800, behavior: 'smooth' });
  }
  return (
    <Box id=" exercies "
      sx={{ mt: { lg: "110px" } }}
      mt="50px"
      p="20px"
      ml="2rem">
      <Typography variant='h3' mb="46px">  Showing Results  </Typography>

      <Stack direction='row' sx={{ gap: { lg: "110px", xs: "50px" } }} flexWrap="wrap" justifyContent="center">
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercise.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>

    </Box>

  )
}

export default Exercises
//import React from 'react'

// function Exercises() {
//   return (
//     <div>
//       <h1> hello</h1>
//     </div>
//   )
// }

// export default Exercises
