import React from 'react'

import "../CubeAnimations/aboutmecube.css"

import myimg1 from "../../images/Aboutmeimages/1.jpg"
import myimg2 from "../../images/Aboutmeimages/2.jpg"
import myimg3 from "../../images/Aboutmeimages/3.png"
import myimg4 from "../../images/Aboutmeimages/4.jpeg"

export default function AboutmeCube() {
  return (
    <div>
        <div className='wrapper'>
                <div className='box-area'>
                <div className='box box-front'>
                    <img className='aboutk' alt='aboutkomali' src={myimg1}></img>
                </div>
                <div className='box box-back'>
                <img className='aboutk' alt='aboutkomali' src={myimg2}></img>
                </div>
                <div className='box box-right'>
                <img className='aboutk' alt='aboutkomali' src={myimg3}></img>
                </div>
                <div className='box box-left'>
                <img className='aboutk' alt='aboutkomali' src={myimg4}></img>
                </div>
                <div className='box box-top'></div>
                <div className='box box-bottom'></div>

            </div>
    
            </div>
    </div>
  )
}
