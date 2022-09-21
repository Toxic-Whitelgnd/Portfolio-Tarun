import React,{useState} from 'react'
import learnedskills from "../API's/skillsApi"
import SkillCircleBar from '../SkillBar/skillcirclebar';

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
    <div>
      <div>
        <h1 className='text-center'>
          Skills
        </h1>
      </div>
      <div>
        <h3 className="flex flex-wrap justify-center text-center">Filter by Skills</h3>
        <div className="flex flex-wrap justify-center text-center  mr-4">
        {
          category.map((item,idx)=>{
            return (
              <>
              <div key={idx} >
              <button type="button" onClick={() =>{filteritems(item)}}  className="btn btn-dark mr-4 capitalize hover:btn btn-outline-info">{item}</button>
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

    </div>
  )
}
