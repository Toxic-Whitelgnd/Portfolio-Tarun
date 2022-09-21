import React from 'react'
import "../AboutMe/aboutme.css"

import img1 from "../../images/AboutmeParallax/CodeP.png"
import img2 from "../../images/AboutmeParallax/EducationP.png"
import img3 from "../../images/AboutmeParallax/GamesP.png"
import img4 from "../../images/AboutmeParallax/LaptonP.png"
import img5 from "../../images/AboutmeParallax/LifeP.png"
import img6 from "../../images/AboutmeParallax/TravelP.png"


import AboutmeSVG from '../SVGanimations/aboutmeSvg'
import AboutmeCube from '../CubeAnimations/AboutmeCube'

class AboutMe extends React.Component {
    state = {x:0,y:0}
    mouse_move = (e) =>{
        this.setState({x:e.clientX,y:e.clientY})
        document.querySelectorAll(".object").forEach(object =>{
            const speed = object.getAttribute("data-value");

            const x = (window.innerWidth - e.pageX*speed)/100             
            const y = (window.innerHeight - e.pageY*speed)/100

            console.log(x,y)
            object.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
        
    }
  render() {

    const {x, y} = this.state
    return (
        <div className='aboutmeback' >
        <div className="home-container">
            <div className='mt-14 flex justify-center text-center'>
               <AboutmeSVG />
            </div>
        <div className='container-p' onMouseMove={this.mouse_move} >
            {/* start coding here */}
            {/* <h2 className='object' data-value="3">Cube<br></br><span>Design</span></h2> */}

    
            

            <img src={img1} className='object' data-value="-2" alt="image"></img>
            <img src={img2} className='object' data-value="4" alt="image"></img>
            <img src={img3} className='object' data-value="4" alt="image"></img>
            <img src={img4} className='object' data-value="-4" alt="image"></img>
            <img src={img5} className='object' data-value="5" alt="image"></img>
            <img src={img6} className='object' data-value="-4" alt="image"></img>
            
            
        </div>
        <div>
            <AboutmeCube />
            <div className='abtmecontainer bg-slate-700 p-5   shadow-lg'>
                    <p className='text-2xl'>
                I am 19 year old, CSE-AI Student studing in Jain University,Bangalore.I <br></br>
                really enjoying solving problems as well as making things pretty and easier 
                to use.I can't stop learning <br></br>
                <span className='text-blue-400'> new things; the more; the better. </span>
                </p>
                </div>
        </div>
        
        <div >
                
        </div>

        </div>
        </div>
    )
    
  }
}

export default AboutMe