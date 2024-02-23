import React from 'react';

import BlockchainImg from '../assets/images/Blockchain.png'
import BigDataImg from '../assets/images/Big-Data(2).jpg'
import CloudImg from '../assets/images/cloud.png'
import DigitalizationImg from '../assets/images/digitilization.png'
import WebImg from '../assets/images/webdev(2).jpg'
import IotImg from '../assets/images/iot-and-big-data.png'
import IndustriesImg from '../assets/images/Industry-Serve.jpg'

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Info from "../components/info"


const Home = () => {
  const slideHeight = '600px'; 
  const slideInterval = 2000; 

  return (
    <main>
    <Carousel interval={slideInterval} >
      <Carousel.Item>
        <img className="d-block w-100" src={BlockchainImg} alt="First slide" style={{ height: slideHeight }} />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={BigDataImg} alt="Second slide"  style={{ height: slideHeight }}/>        
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={CloudImg} alt="Third slide" style={{ height: slideHeight }} />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={DigitalizationImg} alt="Fourth slide" style={{ height: slideHeight }} />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={WebImg} alt="Fifth slide" style={{ height: slideHeight }} />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={IotImg} alt="Sixth slide" style={{ height: slideHeight }} />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={IndustriesImg} alt="Seventh slide" style={{ height: slideHeight }} />
      </Carousel.Item>

      

    </Carousel>
{/* 
    <Info/> */}

    <div>
         <h2 style={{height:"60px",width:"900px",color:"white", backgroundColor:" #146df4", margin:"auto",marginTop:"120px", paddingTop:"5px",textAlign:"center", borderRadius:"10px"}}>Get Selected ... Stay Connected ...</h2>

        <h2 style={{display: "flex",margin: "50px 30px 30px 100px",justifyContent: "center" , textDecoration:"underline"}}>Welcome to Quick Management Services</h2>
         <div className='textcol'>
           <div>
            <p>
            With More than 1 decades of experience in the Software Appliction development & Management services(SDLC/STLC), we follow a thorough quality assurance methodology to ensure results. Our highly trained management team oversees each operation with a proprietary Quality Improvement System that monitors through well define operational process model with best practices to keep control on delivery and result to get 100% CSAT and assesses quality control provides historical data and evaluates the progress of quality improvements and inspection schedules.
            Corporate always looks for a service provider who can provide value for their money. We specialize in creating an effective workplace that adds value to our client’s business. We help reduce occupancy costs and improve service by implementing and managing processes that yield wonderful results. Through a full range of services from operations to maintenance, we provide our clients with facilities management solutions.
            QMS would like to introduce ourselves as an established, top quality company-QMS providing S
            </p>
            
           </div>
           <div>
            <p style={{marginLeft:"250px"}}>
            QMS are in one of the best in end to end service provider with high standards of quality awareness are our hallmark. QMS employ well trained field staffs who are updated regularly by thorough in-house and on field training.
            QMS strictly follow the below well set process in our services.
             • Consciously endeavor to offer the highest quality of service through our management system that is in place.
             • Ensure 100 % attendance with efficient effort from actual employee.
             • Our entire staff will be in proper uniform and supervisor will be equipped with ID card of company and As agreed JOB Scheduled we meet 100 % CSI
             • Inspection of site and feedback collection will be executed by our operation controller as per requirement and suggestion of society representative; we take daily/weekly/monthly feedback from the end   user and keep control on our quality.
            </p>

           </div>

         </div>

    </div>

  </main>  
  );
};

export default Home;
