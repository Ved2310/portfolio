import React from 'react';
import './intro.css';
import bg from '../../assets/un.png'
import btnImg from '../../assets/hireme.jpg';
import { Link } from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Vedashree</span><br />Software Developer</span>
                <p className="introPara">I am a skilled software developer with<br/> experience in creating</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;