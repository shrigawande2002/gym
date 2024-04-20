import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import {Typography} from '@mui/material';
import { useContext } from 'react';
import '../../src/index.css'


function Category({ data , bodyPart , setBodyPart}) {
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {Array.isArray(data) && data.map((item) => (
        <Box 
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          mpx="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default Category
