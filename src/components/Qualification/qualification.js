import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="qualification">
      <h2 className="section-title">Qualifications</h2>
      <section id="qualifications"></section>

      {/* Tabs */}
      <div className="qualification-tabs">
        <button
          className={activeTab === "education" ? "tab active" : "tab"}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "experience" ? "tab active" : "tab"}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
      </div>

      {/* Qualification Timeline */}
      <div className="qualification-container">
        <div className="qualification-line"></div>

        {activeTab === "education" && (
          <div className="qualification-content">
            <div className="qualification-box left">
              <h3>Master's in Computer Science</h3>
              <p>California State University, East Bay</p>
              <span>2023 - 2025</span>
              <div className="qualification-dot"></div>
            </div>

            <div className="qualification-box right">
              <h3>Bachelor's in Computer Science</h3>
              <p>Savitri Bai Phule Pune University</p>
              <span>2018 - 2022</span>
              <div className="qualification-dot"></div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="qualification-content">

            <div className="qualification-box left">
              <h3>Technology Lead/Admin</h3>
              <p>Upclub (Student's org club on-campus)</p>
              <span> Jan 2025 - Present</span>
              <div className="qualification-dot"></div>
            </div>

            <div className="qualification-box right">
              <h3>Community Outreach Coordinator</h3>
              <p>Upclub (Student's org club on-campus)</p>
              <span> Aug 2024 - Dec 2024</span>
              <div className="qualification-dot"></div>
            </div>

            <div className="qualification-box left">
              <h3>Software Analyst 1</h3>
              <p>FIS Global</p>
              <span> Feb 2022 - Aug 2024</span>
              <div className="qualification-dot"></div>
            </div>

            

            <div className="qualification-box right">
              <h3>Flutter App Developer</h3>
              <p>Vilims Software</p>
              <span>May 2021 - July 2021</span>
              <div className="qualification-dot"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Qualification;
