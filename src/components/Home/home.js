import React,{useState,useEffect} from 'react'
import "../Home/home.css"
import homeimg from "../../images/sectionimages/tarun.png"
import AnimatedLetters from './Animatedletters'
import Typewriter from 'typewriter-effect';

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
        <div className='block'>
        <div className="myimg flex flex-wrap float-right">
            <img src={homeimg} alt="tarun" className='homeimg' />
        </div>
        <div className="svgimges mt-24 flex justify-center text-center">
                <svg id="logoH" width="432" height="93" viewBox="0 0 432 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.076 1.14404V0.644043H70.576H1.07202H0.572021V1.14404V18.68V19.18H1.07202H24.38V91V91.5H24.88H46.768H47.268V91V19.18H70.576H71.076V18.68V1.14404ZM98.585 
                    91.5H98.9436L99.0586 91.1604L104.32 75.628H137.138L142.399 91.1604L142.514 91.5H142.873H166.041H166.754L166.511 90.8299L133.999 0.973924L133.88 0.644043H133.529H108.185H107.834L107.715 0.973925L75.2029
                    90.8299L74.9604 91.5H75.673H98.585ZM221.322 91.2413L221.465 91.5H221.76H246.464H247.334L246.896 90.7483L226.477 
                    55.7088C232.834 53.6989 237.682 50.3767 240.982 45.7239C244.458 40.943 246.196 35.5068 246.196 29.432C246.196 
                    24.0609 244.939 19.1954 242.418 14.8476C239.888 10.3991 236.054 6.92082 230.941 4.40774C225.906 1.89076 219.81 
                    0.644043 212.672 0.644043H175.936H175.436V1.14404V91V91.5H175.936H197.824H198.324V91V57.58H202.777L221.322 
                    91.2413ZM220.006 38.287L219.998 38.2945C218.164 40.1285 215.329 41.092 211.392 41.092H198.324V19.82H211.392C215.329 
                    19.82 218.164 20.7836 219.998 22.6176L219.998 22.6177L220.006 22.625C221.936 24.4746 222.924 27.0212 222.924 30.328C222.924 
                    33.8138 221.931 36.4421 220.006 38.287ZM281.44 1.14404V0.644043H280.94H259.052H258.552V1.14404V54.776C258.552 62.8646 260.187 69.7818 263.483 75.5055L263.484 
                    75.5084C266.774 81.135 271.239 85.3849 276.874 88.246L276.882 88.25C282.59 91.0177 289.024 92.396 296.172 92.396C303.322 92.396 309.799 90.9743 315.592 88.1212C321.48 
                    85.2632 326.159 81.0165 329.622 75.3901C333.094 69.7482 334.816 62.8685 334.816 54.776V1.14404V0.644043H334.316H312.428H311.928V1.14404V54.904C311.928 60.198 310.585 64.1972 307.968 
                    66.9774C305.357 69.7516 301.58 71.172 296.556 71.172C291.531 71.172 287.801 69.7513 285.277 66.9832C282.743 64.2033 281.44 60.2019 281.44 54.904V1.14404ZM430.07 91.5H430.57V91V1.14404V0.644043H430.07H408.182H407.682V1.14404V55.1534L371.992 
                    0.869358L371.844 0.644043H371.574H349.686H349.186V1.14404V91V91.5H349.686H371.574H372.074V91V37.2402L407.765 91.2756L407.913 91.5H408.182H430.07ZM120.732 26.9035L131.168 57.732H110.416L120.732 26.9035Z" stroke="white"/>
                </svg> 
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
        </div>
        
            
   </div>
   </>
  )
}
