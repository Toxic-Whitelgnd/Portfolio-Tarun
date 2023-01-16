import React,{useState,useEffect} from 'react'
import learnedskills from "../API's/skillsApi"
import TagCloud from "TagCloud";
import Skillcube from '../CubeAnimations/Skillcube';
import SkillCircleBar from '../SkillBar/skillcirclebar';
import SkillsSVG from '../SVGanimations/skillssvg';
import {BiFilterAlt} from "react-icons/bi"

import "../Skills/skills.css"

export default function Skills() {
  const [skillslearn,setskills] = useState(learnedskills);
  // scrolltoupp
  const scrollUp = () => {
    window.scroll(0, 0);
    };

    useEffect(() => {
        scrollUp();
    }, []);


  // rotating 3d sphere
  useEffect(() => {
      const container = ".tagcloudanimation";
      const texts = [
        "HTML",
        "CSS",
        "C",
        "JavaScript",
        "React",
        "Java",
        "python",
        "NodeJS",
        "R",
        "SQL",
        "Data structure",
        "GIT",
        "GITHUB",
        "express",
        "MongoDB",
        "Photoshop",
        "Illustrator",
        "After Effects",
        "Figma",
        "Fire-base",
        "sanity",
        "Tailwindcss",
        "Bootstrap",
      ];

      const options = {
        radius: 360,
        maxSpeed: "fast",
        initSpeed: "normal",
        direction: 90,
        keep: true,
      };

      TagCloud(container, texts, options);
    
  }, []);

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
        <h3 className=" mm flex flex-wrap justify-center text-center"><BiFilterAlt className='mt-1 mr-1' />Filter by Skills</h3>
        <div className="flex flex-wrap justify-center text-center  mr-4">
        {
          category.map((item,idx)=>{
            return (
              <>
              <div key={idx} >
                <div className='btn-wrap'>
                <button  onClick={() =>{filteritems(item)}} key={idx}  className="cbtn btn-light mr-4 mb-3 capitalize hover:btn btn-outline-dark">{item}</button>
                </div>
             
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
        <div className='hidden md:flex justify-center capitalize text-2xl text-violet-900 container cursor-pointer'>
          <span className="tagcloudanimation"></span>
        </div>
        <div>
          <Skillcube />
    
        </div>
        
    </div>
  )
}
