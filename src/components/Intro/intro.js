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
                <span className="introText">I'm<span className="introName"> Vedashree</span><br />Software Developer</span>
                <p className="introPara">I'm a Computer Science graduate student with 2.5+ years of experience in the fintech industry, now transitioning into data engineering. Passionate about building real-time, scalable data pipelines, I’ve worked with PySpark, AWS Glue, Redshift, and S3, and recently completed a certification in Apache Airflow DAG authoring. I'm currently pursuing Associate Cloud Engineer on Google Cloud. Excited to contribute to data-driven teams building modern, cloud-native data platforms!</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
            </div>
            <div className="introImage">
                <img src={bg} alt="Profile" className="bg"/>
            </div>
        </section>
    )
}

export default Intro;