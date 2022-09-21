import React from 'react'
import { render } from "react-dom";
import "../SkillBar/skillcirclebar.css"
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from './AnimatedProgressbar';
import ChangingProgressProvider from './ChangingProgreesbar';
import { easeQuadInOut } from "d3-ease";

export default function SkillCircleBar({percentagelang,lang,pathcolor,textcolor,trailColor}) {
  
    const percentage = percentagelang;

  return (
    <div>
        <div className='mt-3 mr-4'>
        <CircularProgressbar
        value={percentagelang}
        text={`${percentagelang}% ${lang}`}
        styles={buildStyles({
          textColor: textcolor,
          pathColor: pathcolor,
          trailColor: trailColor,
          textSize:12
        })}
      />
        </div>
    </div>

  )
}
// TODO: note percentage , pathcolor,textcolor,trailcolor,strokelinecap  all will be dynamic from skillsapi
 


