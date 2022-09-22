import React from 'react'
import "../CubeAnimations/Skillcube.css"

import img1 from "../../images/Skills/Adobeskills.png"
import img2 from "../../images/Skills/CssSkills.png"
import img3 from "../../images/Skills/Htmlskills.png"
import img4 from "../../images/Skills/JavaScriptSkills.png"
import img5 from "../../images/Skills/PythonSkills.png"
import img6 from "../../images/Skills/reactskills.png"
import img7 from "../../images/Skills/FigmaSkill.png"
import img8 from "../../images/Skills/FlutterSkill.png"

export default function Skillcube() {
  return (
    <div>
        <div className='boxSkill'>
            <span style={{'--i':'1'}}><img src={img1} alt="damn" /></span>
            <span style={{'--i':'2'}}><img src={img2} alt="damn"/></span>
            <span style={{'--i':'3'}}><img src={img3} alt="damn" /></span>
            <span style={{'--i':'4'}}><img src={img4} alt="damn"/></span>
            <span style={{'--i':'5'}}><img src={img5} alt="damn"/></span>
            <span style={{'--i':'6'}}><img src={img6} alt="damn"/></span>
            <span style={{'--i':'7'}}><img src={img7} alt="damn"/></span>  
            <span style={{'--i':'8'}}><img src={img8} alt="damn"/></span>
            {/* need to add two more  skills figma,dart */}
        </div>
    </div>
  )
}
