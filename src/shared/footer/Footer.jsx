import React from 'react';
import './footer.css'
import img from '../../assets/shipon/shipon.png'
const Footer = () => {
    return (
        <div className='gpt-3__footer section__padding bg-blue-gradient-footer'>
            <div className='gpt3__footer-heading'>
             <h1 className='text-gradient'>Do you want to step in to future before others</h1>
            </div>
            <div className='gpt3__footer-btn'>
               <p>Request Early Access</p>
            </div>
    <hr className='footer_underline' />
            <div className='gpt3__footer-links'>
              <div className='gpt3__footer-links_logo'>
               <img  src={img} alt="images" /> 
               
              </div>
              <div className='gpt3__footer-links_div'>
                   <h4>Links</h4>
                   <p>Overons</p>
                   <p>Social Media</p>
                   <p>Counters</p>
                   <p>Contact</p>

              </div>
              <div className='gpt3__footer-links_div'>
                   <h4>Links</h4>
                   <p>Company</p>
                   <p>Tems & Conditions </p>
                   <p>Privacy Policy</p>
                   <p>Contact</p>

              </div>
              <div className='gpt3__footer-links_div'>
                   <h4>Get in touch</h4>
                   <p>Mirpur 1784 Dhaka Bangladesh</p>
                   <p>0855448255</p>
                   <p>Counters</p>
                   <p>nxshipon@gmail.com</p>

              </div>
             
            </div>

            <div className='gpt3__footer-copyright'>
               <p>2023 nxshipon All rights reserved .</p>
            </div>
        </div>
    );
};

export default Footer;