import React from 'react'
import {Parallax} from 'react-parallax'
import Home from '../Home/home'
import "../ParralaxPages/PPages.css"
import homeimg from "../../images/sectionimages/HomeStud.jpg"
import AboutMe from '../AboutMe/aboutme'
import SkillCircleBar from '../SkillBar/skillcirclebar'
import Skills from '../Skills/skills'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../contact/contact'
import { Newprojcard } from '../Cards/Newprojcard'

export default function ParallaxPages() {
  return (
    <div>
        <div>
        <Parallax  className="home" bgImage={homeimg} strength={-400} blur={{min:5,max:6}} >
            <div className='content lg:h-screen sm:h-auto'>
                <div className='text-content'>
                    <Home />
                
                </div>
            </div>
        </Parallax>
        <Parallax className="aboutme" strength={-400}  >
            <div className='content h-auto'>
                <div className='text-content'>
                   <AboutMe />
                </div>
            </div>
        </Parallax>
        <Parallax className="skills" strength={600} >
            <div className='content h-auto'>
                <div className='text-content'>
    
                    <Skills />
                </div>
            </div>
        </Parallax>
        <Parallax className="achivements" strength={-600} >
            <div className='content'>
                <div className='text-content'>
                   <Portfolio />
                </div>
            </div>
        </Parallax>
        {/* <Parallax className="portfolio" strength={600} >
            <div className='content h-screen'>
                <div className='text-content'>
                   <p className="text-2xl text-red-500">
                     Achivements will be displayed
                   </p>
                </div>
            </div>
        </Parallax> */}
        <Parallax className="contact" strength={-600} >
            <div className='content'>
                <div className='text-content'>
                   <Contact />
                </div>
            </div>
        </Parallax>
        </div>
    </div>
  )
}
