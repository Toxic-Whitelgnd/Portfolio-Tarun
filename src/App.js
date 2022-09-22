import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes, } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ParallaxPages from './components/ParralaxPages/PPages';
import AboutMe from './components/AboutMe/aboutme';
import Skills from './components/Skills/skills';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <div>
      <NavBar />
      <Routes>
            
            <Route path="/" index element={<ParallaxPages />}/>
            <Route path="/about" index element={<AboutMe />}/>
            <Route path="/skills" index element={<Skills />}/>
            <Route path="/portfolio" index element={<Portfolio />}/>


        </Routes>
      </div>
    </div>
  );
}

export default App;
