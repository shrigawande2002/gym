import { Button , Stack , Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



function ExerciseCard({exercise}) {
    console.log(exercise);
  return (
    <div>
      <Link to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction="row"> 
          <Button sx={{ ml: '21px' , color:"#fff" , background: "#ffa9a9"}}  fontSize="14px" textTransform="capitalize" borderRadius="20px"> 
              { exercise.bodyPart}
          </Button>

          <Button sx={{ ml: '21px' , color:"#fff" , background: "#fcc757"}}  fontSize="14px" textTransform="capitalize" borderRadius="20px"> 
              { exercise.target}
          </Button>
        </Stack>
        <Typography color="#000" ml="2rem" mt="2rem" fontSize="1.5rem" textAlign='center' fontWeight="bold" textTransform='capitalize'>
          {exercise.name}
        </Typography>
         </Link>

    </div>
  )
}

export default ExerciseCard
