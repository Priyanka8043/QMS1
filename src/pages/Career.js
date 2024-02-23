import React from 'react'
import RocketIcon from '@mui/icons-material/Rocket';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BusinessIcon from '@mui/icons-material/Business';

const Career = () => {
  return (
    <main>
      <div>
        <h3 style={{margin:"30px 0 50px 170px", color:"#4a4e54"}}>CAREERS</h3>
        <h1 style={{margin: "0 0 20px 620px", padding:"5px", paddingLeft:"13px" ,color:"black", fontFamily:"serif",fontWeight:"600",fontSize:"70px", borderRadius:"8px"}}>Join Our Team</h1>
        <p style={{fontSize:"22px", color:"black", textAlign:"center", fontWeight:"bold"}}>"Transforming Careers, Innovating Futures, and Shaping the Way We Connect in Tech Excellence."</p>
      </div>
      <div className='career_text'>
        <div className='career_icons'>
            <AssignmentTurnedInIcon   color="primary" sx={{ fontSize: 150 ,margin:"20px 0px 5px 150px" }}/>
            <p>Reveal your talents to make the lives of the masses easier by doing meaningful work.</p>
        </div>
        <div className='career_icons'>
            <RocketIcon   color="primary" sx={{ fontSize: 150 ,margin:"20px 0px 5px 150px" }}/>
            <p>It is important to be in the right team at the right time.Improve yourself by getting involved.</p>
        </div>
        <div className='career_icons'>
            <BusinessIcon   color="primary" sx={{ fontSize: 150 ,margin:"20px 0px 5px 150px" }}/>
            <p>Empowering your work and connectivity in the ever-evolving landscape of technology.</p>
        </div>

      </div>



    <section style={{backgroundColor:"#e9f2fa"}}>
      <div className='careerPara'>
        <h1 >Our Core Values</h1>
        <p>At Quick Management Services, we believe that the key to our success lies in the talent and passion of our team. Joining us means being part of a dynamic and collaborative environment where innovation is not just encouraged, but celebrated. Our central location  provides a convenient and accessible workplace, empowering our employees to thrive in a vibrant urban setting. As part of the QMS family, you'll have free access to all services, enhancing your professional journey. Whether you're an experienced professional or a rising star in the tech industry, we invite you to explore exciting opportunities and contribute to redefining the future of technology with us.</p>
      </div>

      <div className='core_values1'>
        <div>
        <img height={100} width={100} src="https://www.here.com/sites/g/files/odxslz256/files/2021-05/BeBold_72x72px.svg" ></img>
        <h4>Be True</h4>
        <p>We treat our partners, customers and each other with trust, integrity and respect.</p>
        </div>

        <div>
        <img height={100} width={100} src="https://www.here.com/sites/g/files/odxslz256/files/2021-05/BeTrue_72x72px.svg" ></img>
        <h4>Learn Fast</h4>
        <p>We’re responsive and flexible, so we can outrun the fast pace of emerging technologies.</p>
        </div>

        <div>
        <img height={100} width={100} src="https://www.here.com/sites/g/files/odxslz256/files/2021-05/LearnFast_72x72px.svg" ></img>
        <h4>Be Bold</h4>
        <p>We’re eager and fearless in our goal to create game-changing products that make the world better.</p>
        </div>
    </div>
    {/* <div  className='core_values2'>
        <div>
        <img height={100} width={100} src="https://www.here.com/sites/g/files/odxslz256/files/2021-05/GiveBack_72x72px.svg" ></img>
        <h4>Be Bold</h4>
        <p>We’re eager and fearless in our goal to create game-changing products that make the world better.</p>
        </div>

        <div>
        <img height={100} width={100} src="https://www.here.com/sites/g/files/odxslz256/files/2021-05/WinTogether_72x72px.svg" ></img>
        <h4>Be Bold</h4>
        <p>We’re eager and fearless in our goal to create game-changing products that make the world better.</p>
        </div>
    </div> */}
     
</section>


    </main>
  )
}

export default Career