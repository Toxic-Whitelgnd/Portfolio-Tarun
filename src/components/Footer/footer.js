import React from 'react'
import "../Footer/footer.css"
import  * as Fiico from "react-icons/fi" 
import Topbtn from '../API\'s/Topbtn';

export default function Footer() {
  return (
    <div>
        <div className="footer-basic">
        <footer>
            <div className="socialico">

                <a href="#"><Fiico.FiFacebook className='ml-2 mt-2' /></a>
                <a href="#"><Fiico.FiInstagram className='ml-2 mt-2' /></a>
                <a href="#"><Fiico.FiTwitter className='ml-2 mt-2'/></a>
                <a href="#"><Fiico.FiYoutube className='ml-2 mt-2'/></a>
                
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <div className="float-right mr-10  lg:-mt-20 ">
                <Topbtn />
            </div>
            
            <p className="copyright">Made by Tarun 💖 © 2022</p>
        </footer>
    </div>
    </div>
  )
}
