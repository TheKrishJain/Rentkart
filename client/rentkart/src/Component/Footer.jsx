import React from "react";
import '../styles/index.scss';

function Footer() 
{
    const currentYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <p>Copyright ⓒ {currentYear} Saffron</p>
        <hr></hr>
        <a>About</a>
        <a>Contact</a>
        <a>Terms & Conditions</a>
      </footer>
    );
  }
  
  export default Footer;