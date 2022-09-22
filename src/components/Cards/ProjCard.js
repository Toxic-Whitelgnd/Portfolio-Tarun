import React from 'react'
import "../Cards/ProjCard.css"

import img1 from "../../images/sectionimages/HomeStud.jpg"

export default function ProjCard() {
  return (
    <div>
        <div className='projcontainer'>
            <div className='boxproj'>
                <div className='projcontent'>
                    <img src={img1} alt="fkk" className='projimg'  />
                    <h2>ProjName</h2>
                    <h6>Languages</h6>
                    <p>description Lorem Ipsum is simply 
                        dummy text of the printing and 
                        typesetting industry. Lorem Ipsum 
                        has been the industry's standard
                         dummy text ever since the 1500s,
                    </p>
                    <div>
                        <button type="button" className="btn btn-outline-light mr-3">Website</button>
                        <button type="button" className="btn btn-outline-light">SourceCode</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <svg>
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
