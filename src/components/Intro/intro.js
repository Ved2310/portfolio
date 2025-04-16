import React from 'react';
import './intro.css';
import bg from '../../assets/unn.jpg'
import btnImg from '../../assets/hireme.jpg';
import { Link } from 'react-scroll';

const Intro = () => {
    return (


        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                I'm<span className="introName"> Vedashree</span><br />
                <span className="introHighlight">a</span> Software Developer </span>
                <p className="introPara">I'm a Computer Science graduate student with 2.5+ years of experience in scalable app development, mobile SDKs, and cloud solutions. Passionate about building high-performance, user-centric applications, I'm eager to bring my expertise in Java, Flutter, and Google Cloud to innovative teams. I'm eager to contribute my expertise to dynamic engineering teams in Web, Mobile, and Cloud development. Let's innovate together! experience in creating</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
            </div>
            <div className="introImage">
                <img src={bg} alt="Profile" className="bg"/>
            </div>
        </section>
    )
}

export default Intro;