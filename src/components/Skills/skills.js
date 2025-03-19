import React, { useState } from 'react';
import './skills.css';
import { FaCode, FaFileAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import CertificateModal from '../Modal/CertificateModal'; // Import the Modal component

const Skills = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState(""); // Tracks whether to show certificates or papers

    // Sample certificates & papers data (Replace with actual data)
    const certificates = [
        { name: "AWS Services for Solution Architect Associate", link: "https://github.com/Ved2310/portfolio/blob/main/src/AWS%20Certificate.pdf" },
        { name: "Android Oreo Developer Course", link: "https://github.com/Ved2310/portfolio/blob/main/src/Android%20App%20Developer%20Cert.pdf" },
        { name: "Python for Everybody", link: "#" },
        { name: "Associate Google Cloud Engineer (Ongoing)", link: "#" },
        { name: "Astronomer DAG Flow (Ongoing)", link: "#" },
        
    ];

    const papers = [
        { name: "Stock Price Prediction Using Linear Regression", link: "https://github.com/Ved2310/portfolio/blob/main/src/IJPREMS31000001269.pdf" },
        { name: "Yolov4: Social-Distancing & face-mask detection I", link: "https://github.com/Ved2310/portfolio/blob/main/src/Social%20Distance%20(IJARESM).pdf" },
        { name: "Yolov4: Social-Distancing & face-mask detection II", link: "https://github.com/Ved2310/portfolio/blob/main/src/Social%20Distance%20(Samridhi%20IJ).pdf" },
        { name: "Animal Rescue Team Application (ART)", link: "https://github.com/Ved2310/portfolio/blob/main/src/ART%20Research%20Paper%20(IJARSCT).pdf" },
    ];

    // Function to open the modal
    const openModal = (type) => {
        setModalType(type);
        setModalOpen(true);
    };

    return (
        <section id="skills">
            <h2 className="skillTitle">About Me</h2>
            <br />

            <div className="aboutContainer">
                <div className="aboutCards">
                    <div className="aboutCard">
                        <FaCode className="aboutIcon" />
                        <h3>Coding Experience</h3>
                        <p>6 Years</p>
                    </div>

                    <div className="aboutCard">
                        <MdVerified className="aboutIcon" />
                        <h3>Certifications</h3>
                        <button onClick={() => openModal("certifications")} className="aboutLink">
                        View Certificates
                        </button>
                    </div>

                    <div className="aboutCard">
                        <FaFileAlt className="aboutIcon" />
                        <h3>Paper Published</h3>
                        <button onClick={() => openModal("papers")} className="aboutLink">
                        View Papers
                        </button>
                    </div>
                </div>
            </div>

            <p className="skillDesc">
                As a child, I was captivated by movies featuring coding wizards, finding their ability to interact with computers utterly mesmerizing—a unique connection between myself and the machine. Dreaming of becoming a software developer, I yearned to bring my visions to life through lines of code. As I begin to share my journey, I invite you to get to know me better. <strong>Welcome to my portfolio!</strong>
            </p>

            <a href="portfolio/src/media/Vedashree_Bhat_Intern_Garmin.pdf" download className="resumeButton">
                Download Resume
            </a>

            {/* Render Modal */}
            <CertificateModal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)}
                items={modalType === "certifications" ? certificates : papers}
                title={modalType === "certifications" ? "My Certifications" : "My Published Papers"}
            />
        </section>
    );
}

export default Skills;
