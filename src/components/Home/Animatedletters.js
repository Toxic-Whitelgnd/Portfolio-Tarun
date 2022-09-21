import "../Home/anima.css"

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
      <span>
        {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx} relative`}>
            {char}
          </span>
        ))}
      </span>
    )
  }
  
  export default AnimatedLetters