import React from 'react'
import "../App.css"
import Card from 'react-bootstrap/Card';


const services = () => {
  return (

    <main>
       <h3 style={{margin:"40px 0 -50px 200px",color:"#4a4e54"}}>OUR SERVICES</h3>
    
    <div className="service">

    <div className="image">
      <img src="https://quickmanagementservices.com/images/blockchain.jpg" height={300} width={500}></img>
    </div>

    <div className="text">
      <h2>BLOCKCHAIN SERVICES</h2>
      <p className="summary">
      QMS Deals with a blockchain is a growing list of records, called blocks, that are linked together using cryptography.Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree).
      This QMS guarantees the security, transparency, and quality of data, with a focus on cryptographic principles, adherence to standards, and regular audits to maintain reliability and trust within the blockchain ecosystem.This integration of QMS with blockchain technology not only enhances the reliability of the recorded information but also instills trust in the users and stakeholders interacting with the blockchain ecosystem.
      </p>
    </div>

    </div>
    <div className="service">

    <div className="image">
      <img src="https://quickmanagementservices.com/images/Big-Data1.jpg" height={300} width={500}></img>
    </div>

    <div className="text">
      <h2>BIG DATA ANALYSIS</h2>
      <p className="summary">     
      With big data analytics, we make sure you are able to answer important questions using analytical reports and dashboards that build from your own data, no matter how extensive it is. Presenting your data in a way that people can easily understand it is half the battle. We have the ability to give you all the tools you need to impress your bosses or clients. Let us help you with your data visualization needs!Leveraging big data analytics empowers you to address critical questions through analytical reports and dashboards, crafted from your extensive datasets.  This process constitutes half the challenge, and our expertise ensures that your data is not just analyzed but communicated effectively.
      </p>
    </div>

    </div>
    <div className="service">

    <div className="image">
      <img src="https://quickmanagementservices.com/images/cloud_comp1.jpg" height={300} width={500}></img>
    </div>

    <div className="text">
      <h2>CLOUD COMPUTING SERVICES</h2>
      <p className="summary">
      Harnessing the capabilities of cloud computing services opens the door for addressing pivotal questions through seamless access to scalable computing resources. Our approach involves crafting analytical reports and intuitive dashboards tailored to your unique datasets, regardless of their scale or complexity. Effectively presenting intricate cloud-related information is a significant aspect of the solution.      
      Navigating the landscape of cloud computing services can be intricate, but our expertise ensures that we not only analyze the data but also communicate insights in a way that is clear and comprehensible. 
      </p>
    </div>

    </div>
    <div className="service">

    <div className="image">
      <img src="https://quickmanagementservices.com/images/digitalization.jpg" height={300} width={500}></img>
    </div>

    <div className="text">
      <h2>DIGITILIZATION AND DEVELOPMENT SERVICES</h2>
      <p className="summary">
      In the realm of digitalization and development services, we ensure that you can tackle key challenges by leveraging cutting-edge solutions. Crafting digitalization strategies and development plans tailored to your specific needs, we address the nuances of your digital transformation journey. Much like in analytics and cloud computing, presenting the outcomes of digital initiatives in a clear and understandable manner is a crucial aspect of our services
      Our expertise lies not only in analyzing data but also in effectively communicating the progress and impact of digitalization efforts. 
      </p>
    </div>

    </div>
    <div className="service">

    <div className="image">
      <img src="https://quickmanagementservices.com/images/IOT.jpg" height={300} width={500}></img>
    </div>

    <div className="text">
      <h2>IOT SERVICES</h2>
      <p className="summary">
      In the domain of IoT (Internet of Things) services, we specialize in helping you navigate the complexities of connected devices and data. Our approach involves developing customized IoT solutions to address specific challenges and goals within your organization. Crafting strategies that seamlessly integrate IoT devices and harness their data is a core aspect of our service.
      Whether you are optimizing processes, enhancing monitoring and control, or exploring new avenues for innovation through IoT, our data visualization solutions are tailored to meet your specific needs in the IoT services landscape.
      </p>
    </div>

    </div>
    
   <section style={{marginTop:"100px"}}>
    <div className='cardd'>
    <Card style={{ width:'50rem',  border: 'none' }}>
      <Card.Body>
        <Card.Title style={{fontSize:"20px" ,fontWeight:"bold" , marginBottom:"20px", marginLeft:"-210px",color:"#3067b0"}}>EDUCATIONAL SERVICES</Card.Title>
        <Card.Text>
          
            <a href='#'>Job Consultancy </a>
            <a href='#'>Project Development </a>
            <a href='#'>Software Course </a>
            <a href='#'>Engineering Coaching</a>
            <a href='#'>Networking and Hardware Course</a>
          
        </Card.Text>
      </Card.Body>
    </Card>

      <Card style={{ width:'50rem',  border: 'none' }}>
      <Card.Body>
        <Card.Title style={{fontSize:"20px" , fontWeight:"bold" ,marginBottom:"20px",marginLeft:"-150px",color:"#3067b0"}}> S/W DEVELOPEMENT SERVICES</Card.Title>
        <Card.Text>
          
            <a href='#'>Product Development</a>
            <a href='#'>Services & Maintenece</a>
            <a href='#'>ERP Development</a>
            <a href='#'>Comercial Software Development</a>
            <a href='#'>Website Devlopment</a>
          
        </Card.Text>
      </Card.Body>
    </Card>

     <Card style={{ width:'50rem',  border: 'none' }}>
      <Card.Body>
        <Card.Title style={{fontSize:"20px",fontWeight:"bold" ,marginBottom:"20px",marginLeft:"-290px", color:"#3067b0" }}> OTHER SERVICES</Card.Title>
        <Card.Text>
          
            <a href='#'>Home/Building Color Painting</a>
            <a href='#'>Office Furniture Interior</a>
            <a href='#'>CA/Auditor/Manager Service Provider</a>

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </section> 

    </main>
  )
}

export default services