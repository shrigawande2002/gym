import React, { useState } from 'react'
import { FetchData , ExercieseOptions , YoutubeOptions} from '../utility/FetchData'
import Details from '../Components/Details'
import Videos from '../Components/Videos'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Exercise() {

const [exerciseDetails , setExerciseDetails]= useState({});
const [exerciseVideos, setExerciseVideos] = useState([]);
const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
const [equipmentExercises, setEquipmentExercises] = useState([]);

const {id} = useParams();

  useEffect( ()=>{

    const fetchExercisesData = async()=>{

      const exerciseDBurl= 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await FetchData(`${exerciseDBurl}/exercises/exercise/${id}`, ExercieseOptions) ;
      setExerciseDetails(exerciseDetailData)

      const exerciseVideosData = await FetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, YoutubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await FetchData(`${exerciseDBurl}/exercises/target/${exerciseDetailData.target}`, ExercieseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
      
      
    }

    fetchExercisesData()
  },[id])





  return (
    <div>
      
      <Details exerciseDetails={exerciseDetails}/>
    <Videos exerciseVideos={exerciseVideos} name={exerciseDetails.name}/>
    </div>
  )
}

export default Exercise
