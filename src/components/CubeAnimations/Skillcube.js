import React from 'react'
import "../CubeAnimations/Skillcube.css"

import img1 from "../../images/Skills/Adobeskills.png"
import img2 from "../../images/Skills/CssSkills.png"
import img3 from "../../images/Skills/Htmlskills.png"
import img4 from "../../images/Skills/JavaScriptSkills.png"
import img5 from "../../images/Skills/PythonSkills.png"
import img6 from "../../images/Skills/reactskills.png"

export default function Skillcube() {
  return (
    <div>
        <div className='boxSkill'>
            <span style={{'--i':'1'}}><img src={img1} /></span>
            <span style={{'--i':'2'}}><img src={img2} /></span>
            <span style={{'--i':'3'}}><img src={img3} /></span>
            <span style={{'--i':'4'}}><img src={img4} /></span>
            <span style={{'--i':'5'}}><img src={img5} /></span>
            <span style={{'--i':'6'}}><img src={img6} /></span>
            <span style={{'--i':'7'}}><img src={img3} /></span>  
            <span style={{'--i':'8'}}><img src={img4} /></span>
            {/* need to add two more  skills figma,dart */}
        </div>
    </div>
  )
}
