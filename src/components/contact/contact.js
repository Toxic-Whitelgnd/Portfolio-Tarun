import React from 'react'
import "../contact/contact.css"
import {GoLocation} from "react-icons/go"
import {MdAlternateEmail} from "react-icons/md"
import {RiPhoneLine} from "react-icons/ri"
import * as Siico from "react-icons/si"

export default function Contact() {
  return (
    <div className='entirecontact'>
        <div className="contactUs">
            <div className='titleh'>
            <h2>Get in touch</h2>
            </div>
            <div className='boxc'>
                <div className='contactc form'>
                    <h3>Send message</h3>
                    <form>
                        <div className='formbox'>
                            <div className='row50'>
                                <div className='inputbox'>
                                    <span>First Name</span>
                                    <input type="text" placeholder='Naruto' />
                                </div>
                                <div className='inputbox'>
                                    <span>Last Name</span>
                                    <input type="text" placeholder='Uzumaki' />
                                </div>
                            </div>

                            <div className='row50'>
                                <div className='inputbox'>
                                    <span>Email</span>
                                    <input type="text" placeholder='naruto@gmail.com' />
                                </div>
                                <div className='inputbox'>
                                    <span>Mobile</span>
                                    <input type="text" placeholder='+91 7834572734' />
                                </div>
                            </div>

                            <div className='row100'>
                                <div className='inputbox'>
                                    <span>Message</span>
                                    <textarea placeholder='write your message' />
                                </div>
                            </div>

                            <div className='row100'>
                                <div className='inputbox'>
                                    <button type="button" className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* info */}

                <div className='contactc info'>
                    <h3 className='capitalize'>contact info</h3>
                    <div className='infobox'>
                        <div>
                            <span><GoLocation /></span>
                            <p>Bangalore,India</p>
                        </div>

                        <div>
                            <span><MdAlternateEmail /></span>
                            <a href='mailto:akatsukiorganisation999@gmail.com'>akatsukiorganisation999@gmail.com</a>
                        </div>

                        <div>
                            <span><RiPhoneLine /></span>
                            <a href='#'>+91 56563345435</a>
                        </div>
                    </div>

                    
                    <div>
                    <ul className="sci">
                        <li><a href='https://www.facebook.com/TheBestBrotherEver/'><Siico.SiFacebook className="socials1"/></a></li>
                        <li><a href='https://www.instagram.com/t_a_r_u_n_s_k_/'><Siico.SiInstagram className="socials1"/></a></li>
                        <li><a href='https://www.linkedin.com/in/tarun-s-k-737349207/'><Siico.SiLinkedin className="socials1"/></a></li>
                        <li><a href='https://twitter.com/home'><Siico.SiTwitter className="socials1"/></a></li>
                    </ul>
                    </div>
                </div>
                {/* map */}
                <div className='contactc map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42428.291928830455!2d77.5847225788178!3d12.97017904246925!2m3!
                1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!
                4v1663924751632!5m2!1sen!2sin" width="300" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              
            </div>
        </div>
    </div>
  )
}
