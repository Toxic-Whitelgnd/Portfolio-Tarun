import React,{useState} from 'react'
import ProjCard from '../Cards/ProjCard'
import "../Portfolio/Portflio.css"

import projects from '../API\'s/projectApi'
import PortfolioSVG from '../SVGanimations/portfoliosvg';

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
    <div className='mt-14 bg-black lund'>
        <div>
            <h1 className='flex justify-center text-center mb-10'>
                <PortfolioSVG />
            </h1>
        </div>
        <div>
            <h2 className='text-white text-center mb-3'>Filter by languages</h2>
            <div className="flex flex-wrap justify-center text-center  mr-4">
        {
          category.map((item,idx)=>{
            return (
              <>
              <div key={idx} >
              <button type="button" onClick={() =>{filterlang(item)}}  className="btn btn-light mr-4 capitalize hover:btn btn-outline-dark">{item}</button>
              </div>
              </>
            )
          })
        }
        </div>
        </div>
        <div  className="flex flex-wrap m-3 justify-center">
            {
                lang.map((value,idx)=>{
                    return(
                        <>
                        <div key={idx} className="m-5">
                        <ProjCard 
                        projname={value.name}
                        lang={value.languages}
                        based={value.based}
                        desc={value.description}
                        websitelink={value.website}
                        sourcecodelink={value.sourcecode}
                        image={value.img}
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
