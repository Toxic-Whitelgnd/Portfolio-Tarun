import React,{useState} from 'react'
import ProjCard from '../Cards/ProjCard'
import "../Portfolio/Portflio.css"
import {BiFilterAlt} from "react-icons/bi"
import projects from '../API\'s/projectApi'
import PortfolioSVG from '../SVGanimations/portfoliosvg';
import { Newprojcard } from '../Cards/Newprojcard'

export default function Portfolio() {
    const [lang,setlang] = useState(projects) ;

    // filer
    const filterlang = (language) => {
        if(language === 'all'){
            setlang(projects);
            return
        }
        const newData = projects.filter((item)=> item.languages === language);
        setlang(newData);
        console.log(newData);
    }

    // maping
    const allcategories = [
        'all',
        ...new Set(projects.map((item)=>{
            return item.languages
        }))
    ]

    const [category,setcategory] = useState(allcategories) ;

  return (
    <div className= 'bg-[#64379F] lund'>
        <div>
            <h1 className='flex justify-center text-center mb-10'>
                <PortfolioSVG />
            </h1>
        </div>
        <div>
        <h3 className="flex flex-wrap justify-center text-center text-white mb-4"><BiFilterAlt className='mt-1 mr-1' />Filter by Skills</h3>
            <div className="flex flex-wrap justify-center text-center  mr-4">
        {
          category.map((item,idx)=>{
            return (
              <>
              <div key={idx} >
              <button type="button" onClick={() =>{filterlang(item)}}  className="pbtn btn-light mr-4 mb-3 capitalize hover:btn btn-outline-dark">{item}</button>
              </div>
              </>
            )
          })
        }
        </div>
        </div>
        <div  className="flex flex-wrap mt-1 gap-x-1 justify-center">
            {
                lang.map((value,idx)=>{
                    return(
                        <>
                        <div key={idx} className="m-5">
                        <Newprojcard
                        projname={value.name}
                        lang={value.languages}
                        based={value.based}
                        desc={value.description}
                        websitelink={value.website}
                        sourcecodelink={value.sourcecode}
                        Pimage={value.img}
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
