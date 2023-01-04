import React from 'react'
import "../Cards/Newprojcard.css"
import img1 from "../../images/Projects/clgclub.jpg"

export const Newprojcard = ({projname,lang,based,desc,websitelink,sourcecodelink,Pimage}) => {
  return (
    <div className='proj-wrap'>
        {/* 1 */}
        <div className='proj-card'>
            <div className='proj-info'>
                <div className='proj-title capitalize'>
                {projname}
                </div>
                <div className='proj-type capitalize'>
                {lang}
                </div>
                <div className='proj-divider'></div>
                <div className='proj-desc capitalize'>
                {desc}
                </div>
                <div className='proj-btns'>
                    <button className='proj-web-btn' onClick={()=>{
                            window.open(websitelink);
                        }}>Website</button>
                    <button className='proj-src-btn' onClick={()=>{
                            window.open(sourcecodelink);
                        }}>SourceCode</button>
                </div>
                
            </div>
            <div className='proj-photo' style={{background:`url(${Pimage})`}}></div>
        </div>
    </div>
  )
}
