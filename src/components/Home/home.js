import React,{useState,useEffect} from 'react'
import "../Home/home.css"
import homeimg from "../../images/newhome.png"
import AnimatedLetters from './Animatedletters'
import Typewriter from 'typewriter-effect';
import { TarunSvg } from '../SVGanimations/tarunSvg';

export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['T', 'A', 'R', 'U', 'N']
  

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
   <>
   <div>
    {/* newone */}
    <div className='home-row'>
      <div className='home-col1'>
          <h3>Hi <br></br>I am</h3>
          <div className='home-row1'><TarunSvg/></div>
          <h3>
          <Typewriter
            options={{
                strings: ['Student', 'Coder','Frontend','Software Developer',
                'Mobile Developer', 'FullStack Developer','Gamer'],
                autoStart: true,
                loop: true,
                cursor:'#',
            }}
            />
          </h3>
      </div>
      <div className='home-col2'>
        <img src={homeimg} className="home-img" />
      </div>
    </div>


        {/* <div className='block'>
          <TarunSvg />
        <div className="myimg flex flex-wrap float-right">
            <img src={homeimg} alt="tarun" className='homeimg' />
        </div>
        
            
        
        <br></br>
        <div className=' lg:mt-80 lg:ml-36 sm:ml-2'>
        <h1 className='homeh1'>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}></span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <div>
            <Typewriter
            options={{
                strings: ['Student', 'Coder','Frontend','Software Developer',
                'Mobile Developer', 'FullStack Developer','Gamer'],
                autoStart: true,
                loop: true,
                cursor:'#',
            }}
            />
            </div>
          </h1>
        </div>
        </div> */}
        
            
   </div>
   </>
  )
}
