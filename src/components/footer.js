import React from 'react'
import "../App.css"
import logo from "../assets/logo.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

const footer = () => {
  return (
  <section>
    <div className='footer'>
      
      <div className='footer_col footer_logo'> 
         <a href='/'>
          <img  width={300} height={80} src={logo}></img>
         </a>
       
        <div className='vision'>
          <h6>OUR VISION</h6>
          <p>
          To offer comprehensive service solutions efficiently and cost-effectively to fulfill client needs. Strive to be a top software development provider, ensuring a clean working environment to enhance customer assets and goodwill.
          </p>
        </div>

        <div className='mission'>
        <h6>OUR MISSION</h6>
          <p>
          Client satisfaction is our utmost mission. We prioritize client needs, address complaints promptly, and emphasize quality service. We are dedicated to preventing dissatisfaction, offering continuous support to meet customer expectations.
          </p>
        </div>
      
      </div>

      <div className='footer_col footer_services '>
        <h6>SERVICES</h6>
          <a href='#'>Software Development</a>
          <a href='#'>Blockchain Services</a>
          <a href='#'>Big Data Analysis</a>
          <a href='#'>Cloud Computing</a>
          <a href='#'>Iot Services</a>
          <a href='#'>Job Consultancy</a>
          <a href='#'>Project Devlopment</a>
          <a href='#'>Engineering Coaching</a>
          <a href='#'>Networking & Hardware Course</a>
          <a href='#'>ERP Development</a>
          <a href='#'>Website Devlopment</a>
          <a href='#'>Other</a>
  
      </div>

      <div className='footer_col footer_contact'>
        <div className='contactUs'>
            <h6>CONTACT US</h6>
             <p className='p1'>Office No. 4-B,
                Ganesham Commercial - A,
                BRTS Road, Pimple Saudagar,
                Pune- 411027</p>
             <p>Phone: +91 9112100663</p>
             <p>Email: hr@quickmanagementservices.com</p>
        </div>
        <div className='followUs'>
            <h6>FOLLOW US</h6>
           
              <a href='#'><TwitterIcon /><span>423.6k Followers</span> </a>
              <a href='#'> <FacebookIcon /> <span>6.8m Likes</span></a>
              <a href='#'><PinterestIcon /><span>423k Followers</span></a> 
        </div>
      </div>
      
    </div>
    
    <div className='footer_end'>
      <p>©2024 Quick Management services. All Rights Reserved</p>
      </div>

  </section>   

  )
}

export default footer;