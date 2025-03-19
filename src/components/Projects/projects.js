import React, { useState } from "react";
import "./projects.css";
import market from "../../assets/reseach.png";
import face from "../../assets/face.png";
import thrift from "../../assets/thrift.png"
import movie from "../../assets/movie.png"
import animal from "../../assets/animal.png"
import social from "../../assets/social.png"
import help from "../../assets/help.png"


const projectsData = [
  {
    title: "Market Research Website",
    category: "Web Development",
    description: "A responsive website for a market research company where businesses sell research papers on various topics, enabling customers to purchase valuable insights for informed decision-making.",
    image: market, 
    codeLink: "https://github.com/Ved2310/Market-research-website",
    demoLink: null,
  },
  {
    title: "Face-Insights",
    category: "Web Development",
    description: "A website using Google Vision & Pinterest APIs to analyze user feed images, detect facial expressions, and recommend movies based on mood. It also auto-sorts images into mood-based albums like happy, party, etc",
    image: face,
    codeLink: "https://github.com/Ved2310/FaceInsights",
    demoLink: "https://face-insights-672i-three.vercel.app/",
  },
  {
    title: "Social Distance and Face Mask Detection using Yolov4",
    category: "Data Science",
    description: "A deep-learning system using YOLOv4 and CNN to detect social distancing violations and mask compliance via surveillance footage, ensuring real-time monitoring and safety.",
    image: social,
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "Animal Rescue Team(ART)",
    category: "Mobile App",
    description: "An android app in which any homeless animal or any animal who is harassed can be saved through our app using Java language,firebase and Android Studio.",
    image: animal,
    codeLink: "https://github.com/Ved2310/A.R.T-animal-rescue-team-",
    
  },
  {
    title: "Smart Thrift",
    category: "Mobile App",
    description: "A Flutter app connecting senior students selling pre-owned books with juniors seeking affordable options, benefiting both financially and academically.",
    image: thrift,
    codeLink: "https://github.com/Ved2310/smart_thrifts",
   
  },
  {
    title: "Help-It",
    category: "Mobile App",
    description: "A student-friendly website that curates the best learning resources through peer recommendations, upvotes, and personalized rankings using YouTube and Google APIs.",
    image: help, 
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "Movie Recommendation System",
    category: "Data Structure",
    description: "A poject in java language where the movies can be uploaded and the user can search the movies according to name , genre language, rating and category. Used linkedlist, stack and searching in AVL tree.",
    image: movie,
    codeLink: "https://github.com/Ved2310/Movie-Recommendation",
    demoLink: "#",
  }
];

const categories = ["All"]; //"Web Development", "Data Science/Analytics", "Data Structure",  "Mobile App", "AI"

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="projects">
        <section id="projects"></section>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Recent Projects</p>

      {/* Category Filters */}
      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">Demo →</a>}
              {project.codeLink && <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">Code →</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
