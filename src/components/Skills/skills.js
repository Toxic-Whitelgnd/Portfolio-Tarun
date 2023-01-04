import React,{useState} from 'react'
import learnedskills from "../API's/skillsApi"

import Skillcube from '../CubeAnimations/Skillcube';
import SkillCircleBar from '../SkillBar/skillcirclebar';
import SkillsSVG from '../SVGanimations/skillssvg';
import {BiFilterAlt} from "react-icons/bi"

export default function Skills() {
  const [skillslearn,setskills] = useState(learnedskills);

  // filter fuc
  const filteritems = (side) => {
    if(side === 'all'){
      setskills(learnedskills);
      return;
    }
    const newData = learnedskills.filter((item)=> item.side === side);
    setskills(newData);
    console.log(newData);
    
  }

  // now mapping
  const allcategories = [
    'all',
    ...new Set(learnedskills.map((item)=>{
      return item.side
    }))
  ]

  const [category , setcategory] = useState(allcategories);
  console.log(category);
  return (
    <div className='mt-14 bg-[#DDACF5] p-3 overflow-hidden'>
      <div>
        <h1 className='flex justify-center text-center mb-10'>
          <SkillsSVG />
        </h1>
      </div>
      <div>
        <h3 className="flex flex-wrap justify-center text-center"><BiFilterAlt className='mt-1 mr-1' />Filter by Skills</h3>
        <div className="flex flex-wrap justify-center text-center  mr-4">
        {
          category.map((item,idx)=>{
            return (
              <>
              <div key={idx} >
              <button type="button" onClick={() =>{filteritems(item)}}  className="btn btn-dark mr-4 mb-3 capitalize hover:btn btn-outline-light">{item}</button>
              </div>
              </>
            )
          })
        }
        </div>
          
      </div>
        <div className="flex flex-wrap m-3 justify-center">
            {
              skillslearn.map((value,index)=>{
                
                return(
                  <>
                  <div key={index}>
                    
                  <SkillCircleBar 
                    percentagelang={value.percentage}
                    lang={value.lang}
                    pathcolor={value.pathcolor}
                    trailColor={value.trailcolor}
                    textcolor={value.textcolor}
                    />
                  </div>
                  
                  </>
                );
              })
            }
        </div>
        <div>
          <Skillcube />
    
        </div>
    </div>
  )
}
