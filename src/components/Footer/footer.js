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

                <a href="https://www.facebook.com/TheBestBrotherEver/"><Fiico.FiFacebook className='ml-2 mt-2' /></a>
                <a href="https://www.instagram.com/t_a_r_u_n_s_k_/"><Fiico.FiInstagram className='ml-2 mt-2' /></a>
                <a href="https://twitter.com/home"><Fiico.FiTwitter className='ml-2 mt-2'/></a>
                <a href="https://github.com/Toxic-Whitelgnd"><Fiico.FiGithub className='ml-2 mt-2'/></a>
                
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="mailto:tarunskt5678@gmail.com">Services</a></li>
                <li className="list-inline-item"><a href="#/about">About</a></li>
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
