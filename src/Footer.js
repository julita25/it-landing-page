import React from 'react'
import "./footer.css"
import {AiFillInstagram} from "react-icons/ai"
import {FaInstagram,  FaLinkedinIn, FaTwitter, FaFacebook} from "react-icons/fa"
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='foot-container'>
            <section className="footer-subs">{/*contents inside a section are related to each other */}
                <p className="footer-heading">
                    Any query?
               </p>

                <p className="footer-txt">
                    Enter your email and our team will contact you
                </p>
                <div className="form-input">
                    <form>
                        <input type="email"
                         name="email"
                         placeholder= "Email"
                         className="input"
                         />
                         
                    </form>
                    <button className="sub-btn">Subscribe</button>
                </div>
            </section>
            <div className= "links">
                <div className="footer-wrapper">
                    <div className="link-items">
                        <h2>About ITSOL</h2>
                        <Link to='./'>Why ITSOL</Link>
                        <Link to='./'>Our team</Link>
                        <Link to='./'>Testimonials</Link>
                        <Link to='./'>Careers</Link>
                        <Link to='./'>Locations</Link>
                    </div>
                    <div className="link-items">
                        <h2>Solutions in demand</h2>
                        <Link to='./'>Augmented reality</Link>
                        <Link to='./'>Cloud Computing Solutions</Link>
                        <Link to='./'>Branding Solutions</Link>
                        <Link to='./'>Mobile Applications development</Link>
                        <Link to='./'>Cybersecurity</Link>
                      
                    </div>
                </div>
                <div className='footer-wrapper'>

                    <div className="link-items">
                        <h2>Support</h2>
                        <Link to='./'>Contact us</Link>
                       <Link to='./'>Privacy policy</Link>
                        <Link to='./'>Tecnology partnership</Link>
    
                    </div>

                    <div className="link-items">
                        <small className='website-rights'>ITSOL @ 2020</small>
                        <div className="social-icons">
                            <Link 
                                class="social-icon-link instagram"
                                to='/'
                                target='_blank'
                                aria-label='Instagram'>
                                <AiFillInstagram/>

                            </Link>
                            <Link 
                                class="social-icon-link facebook"
                                to='/'
                                target='_blank'
                                aria-label='Facebook'>
                                <FaFacebook/>

                            </Link>

                            <Link 
                                class="social-icon-link twitter"
                                to='/'
                                target='_blank'
                                aria-label='Twitter'>
                                <FaTwitter/>

                            </Link>
                            <Link 
                                class="social-icon-link linkedIn"
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'>
                                <FaLinkedinIn/>

                            </Link>
                        </div>
    
                    </div>

           
                </div>
                    
                   

                <section className='social-media'>
                    <div className='media-wrapper'>
                        
                    </div>
                </section>
            </div>


            
        </div>
    )
}

export default Footer;