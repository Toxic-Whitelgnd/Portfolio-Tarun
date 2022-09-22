import React from 'react'
import "../Cards/ProjCard.css"

import img1 from "../../images/sectionimages/HomeStud.jpg"

export default function ProjCard({projname,lang,based,desc,websitelink,sourcecodelink}) {
  return (
    <div>
        <div className='projcontainer'>
            <div className='boxproj'>
                <div className='projcontent'>
                    <img src={img1} alt="fkk" className='projimg'  />
                    <h3 className='text-start text-2xl capitalize '>{projname}</h3>
                    <h4 className='text-xl capitalize text-slate-400'>{lang}</h4>
                    <h6 className='capitalize text-slate-300'>{based}</h6>
                    <p className='capitalize'>{desc}
                    </p>
                    <div>
                        <button type="button" onClick={()=>{
                            window.open(websitelink);
                        }} className="btn btn-outline-light mr-3">Website</button>
                        <button type="button" onClick={()=>{
                            window.open(sourcecodelink);
                        }} className="btn btn-outline-light">SourceCode</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <svg className='wv'>
            <filter id="wavy">
                <feTurbulence x='0' y='0' baseFrequency="0.02" 
                numOctaves="5" seed="2">
                    <animate attributeName='baseFrequency' dur="60s"
                    values='0.02;0.05;0.02' repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="30" />
            </filter>
        </svg>
    </div>
  )
}

// TODO: mAKING it as dynamic image,projectname,languages,description,websitelink,sourcecode link