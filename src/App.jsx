import React from "react";
import "./App.css";
import profile from "./assets/profile.jpeg";
import ecommerceImg from "./assets/ecommerce.png";
import gamestoreImg from "./assets/gamestore.png";
import portfolioImg from "./assets/portfolio.png";

export default function App() {
  const skills = [
    "REACT",
    "JAVASCRIPT",
    "HTML",
    "CSS",
    "NODE.JS",
    "SUPABASE",
    "GITHUB",
    "UI/UX"
  ];

const projects = [
  {
    title: "E-Commerce Store",
    image: ecommerceImg,
    description:
      "A modern e-commerce platform with product filtering, shopping cart and secure checkout.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"]
  },

  {
    title: "Gaming Store",
    image: gamestoreImg,
    description:
      "A gaming marketplace featuring modern UI, animations and product browsing.",
    tech: ["React", "Firebase", "CSS"]
  },

  {
    title: "Personal Portfolio",
    image: portfolioImg,
    description:
      "Personal branding website showcasing skills, projects and experience.",
    tech: ["React", "CSS3", "JavaScript"]
  }
];
  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            HARSHAL
            <br />
            DEVELOPER
          </h1>

          <p>
            FRONT-END DEVELOPER • REACT ENTHUSIAST • CREATIVE BUILDER
          </p>

          <button>VIEW WORK</button>
        </div>

        <div className="hero-right">
          <img src={profile} alt="Profile" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee">
        <div>
          REACT • JAVASCRIPT • FRONTEND • UI DESIGN • WEB DEVELOPMENT •
          REACT • JAVASCRIPT • FRONTEND • UI DESIGN • WEB DEVELOPMENT •
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>ABOUT</h2>

        <p>
          Passionate developer creating visually striking,
          high-performance web experiences. I enjoy blending
          technology, creativity and modern design principles.
        </p>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>SKILLS</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>PROJECTS</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>CONTACT</h2>

        <p>harshaldeorukhakar@gmail.com</p>

        <button>LET'S BUILD SOMETHING</button>
      </section>

      <footer>
        © 2026 HARSHAL • ALL RIGHTS RESERVED
      </footer>

    </div>
  );
}