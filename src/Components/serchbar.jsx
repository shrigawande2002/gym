import React, { useEffect } from 'react'


import { Button, Typography, Stack, TextField, Box } from '@mui/material'
import { useState } from 'react';
import { FetchData, ExercieseOptions } from '../utility/FetchData'
import Category from './Category';
function serchbar({setBodyPart , bodyPart , setExercise , exercise}) {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState([]);

    useEffect(() => {
        
        const FetchCategory = async () => {
            try {
                const bodyPartsData = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', ExercieseOptions);
        
                if (Array.isArray(bodyPartsData)) {
                    setBodyPart(['all', ...bodyPartsData]);
                    setCategory(['all', ...bodyPartsData]);
                } else {
                    console.error("Response data is not an array:", bodyPartsData);
                }
                console.log(bodyPartsData);
            } catch (error) {
                console.error("Error fetching or processing data:", error);
            }
        }

        FetchCategory();
    }, [])




    const handelserch = async (e) => {
        if (search) {

            const exercisesData  = await FetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100', ExercieseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                       || item.target.toLowerCase().includes(search)
                       || item.equipment.toLowerCase().includes(search)
                       || item.bodyPart.toLowerCase().includes(search),
              );

              window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
              setSearch('');
            setExercise(searchedExercises);
           
           
        }
    }


    return (
        <Stack justifyContent="center" alignItems="center" mt="37px" p="20px">
            <Typography fontWeight="700" sx={{ fontSize: { lg: '44psx', xs: '30px', } }} textAlign="center" mb="50px" >
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box position="relative" mb="72px">

                <TextField
                    sx={{
                        input: {
                            fontWeight: "700",
                            width: "90vw",

                            border: "none",
                            borderRadius: "4px"
                        },
                        width: {
                            lg: "1170x", xs: "350px"
                        }
                    }}
                    height="76px"
                    placeholder='Search Exercises'
                    onChange={(e) => { setSearch(e.target.value) }}
                    value={search}
                    type='text'

                />
                <Button sx={{ background: "#ff2625", color: "white", p: "0.9rem", m: " 0rem 0.5rem", ":hover": { background: "#ff2625", width: { lg: "175px", xs: "80px" } } }} onClick={handelserch}> Search </Button>
            </Box>
            <Box sx={{ position:"relative" , width:"100%" ,p:"20px"}}>
                <Category data={category} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                
            </Box>
        </Stack>
    )
}

export default serchbar
