import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Box } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../assets/logo.png';



const Navbar = () => {
  return (
    <nav style={navbarStyles}>
      <Link to="/" style={{ ...linkStyles, flex: '1' }}>
        <img height="50px" src={Logo} alt="" style={logoStyles} />
      </Link>

      <ul style={{ listStyleType: 'none', marginRight: 200,marginTop: 20, padding: 0, display: 'flex' }}>
        <li>
          <Link to="/" style={linkStyles}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutUs" style={linkStyles}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" style={linkStyles}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/ushealthcare" style={linkStyles}>
            US Healthcare
          </Link>
        </li>
        <li>
          <Link to="/career" style={linkStyles}>
            Career
          </Link>
        </li>
        <li>
          <Link to="/clients" style={linkStyles}>
            Clients
          </Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyles}>
            Contact Us
          </Link>
        </li>
        
      </ul>

      <Box>
        <IconButton aria-label="Twitter" sx={{ color: 'white', marginRight: '10px' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="Facebook" sx={{ color: 'white', marginRight: '10px' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="Mail" sx={{ color: 'white',marginRight: '40px' }}>
          <MailIcon />
        </IconButton>
      </Box>
    </nav>
  );
};

const navbarStyles = {
  backgroundColor: '#0066FF',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap', 
};

const logoStyles = {
  height: '50px',
  width: '200px', 
  marginRight: '20px',
  marginLeft:'20px'
};

const linkStyles = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
  marginRight: '40px',
  marginBottom: '10px',
  fontFamily: 'sans-serif',
  fontSize:"22px",
  
  
  ':hover': {
    backgroundColor: 'blue', 
    borderRadius: '5px', 
  },
 
  
};
export default Navbar;
