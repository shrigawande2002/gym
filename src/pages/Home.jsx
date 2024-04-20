import React, { useState } from 'react'
import Nav from '../Components/nav'
import Button from '@mui/material/Button';
import Serchbar from '../Components/serchbar';
import Banner from '../assets/images/banner.png'
import Exercises from '../Components/Exercises'
import Category from '../Components/Category';
function Home() {
    
    const [ bodyPart , setBodyPart]= useState('all');
    const [exercise , setExercise] = useState([ ]);
    
    return (
        <div>
            <Nav />

            <div className="main flex gap-[15rem]">
                <div className="headings mt-[10rem] ml-[20rem]">
                    <h1 className=' text-2xl my-4 text-red-600 text-myColor'> fitness Club </h1>
                    <h1 className=' text-4xl my-2 '> Sweat , Smile </h1>
                    <h1 className='text-4xl my-2'> And Repeat </h1>
                    <p className=' my-3'> Checkout The Most Effective Exercises </p>
                    <Button variant="contained" color='error'>Explore Exercises </Button>
                </div>

                <div className="img-banner">  <img src={Banner} alt="banner img " className=' w-[60%] relative z-10' /></div></div>
                 <h1 className='text-8xl text-center tracking-widest relative top-[-3.75rem] text-myColor opacity-15 z-0 font-semibold'> Exercise </h1>
                 {/* <Typography fontWeight={600} color="#ff2625" sx={ {opacity:0.1 }}> Exercise </Typography> */}
                 <Serchbar exercise={exercise} setBodyPart={setBodyPart} bodyPart={bodyPart} setExercise={setExercise} />  
                 <Exercises exercise={exercise} setExercise ={setExercise} bodyPart={bodyPart}/>
        </div>
    )
}

export default Home
