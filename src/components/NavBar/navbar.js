import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu">
            <Link to="intro" smooth={true} duration={500} offset={-100} className="desktopMenuListItem">Home</Link>
            <Link to="skills" smooth={true} duration={500} offset={-100} className="desktopMenuListItem">About</Link>
            <Link to="talent" smooth={true} duration={500} offset={-100} className="desktopMenuListItem">Skills</Link>
            <Link to="qualifications" smooth={true} duration={500} offset={-150} className="desktopMenuListItem">Qualifications</Link>
            <Link to="projects" smooth={true} duration={500} offset={-100} className="desktopMenuListItem">Projects</Link>
            <Link to="contactPage" smooth={true} duration={500} offset={-100} className="desktopMenuListItem">Contact Me</Link>

            </div>
            <button className="desktopMenuBtn" onClick={() => {
                const contactSection = document.getElementById('contactPage');
                const offset = 100; // Adjust this value based on your navbar height
                const topPos = contactSection.getBoundingClientRect().top + window.scrollY - offset;
                
                window.scrollTo({ top: topPos, behavior: 'smooth' });
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me </button>

                <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link to="intro" smooth={true} duration={500} offset={-100} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link to="skills" smooth={true} duration={500} offset={-100} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link to="talent" smooth={true} duration={500} offset={-100} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link to="qualifications" smooth={true} duration={500} offset={-150} className="listItem" onClick={()=>setShowMenu(false)}>Qualifications</Link>
            <Link to="projects" smooth={true} duration={500} offset={-100} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link to="contactPage" smooth={true} duration={500} offset={-100} className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>

            </div>
      

            
        </nav>
    )
}

export default Navbar;