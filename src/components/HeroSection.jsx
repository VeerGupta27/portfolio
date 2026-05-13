import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import "../styles/HeroSection.css"
import "../styles/About.css";

export default function HeroSection(){

    return (

        <div className="Hero-section">
        
        <div className="Hero-right">

        <h1 className="Hero-title">Hi, I'm Veer.</h1>
  <h2 className="Hero-subtitle">
  <span className="changing-text">
    <TypeAnimation
      sequence={[
        "Building AI Solutions.",
        2000,

        "Developing Full-Stack Apps.",
        2000,

        "Crafting Code & Verses.",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</h2>
        <p className="Hero-description">
           Passionate about building intelligent applications,
            scalable architectures, and seamless digital experiences.
        </p>




        <div className="hero-buttons">
  <button className="cta-button primary">
    Get In Touch
  </button>

  <button className="cta-button secondary">
    View Projects
  </button>
</div>

  <div className="social-icons">

  <a href="https://www.linkedin.com/in/veer27gupta" target="_blank">
    <FaLinkedinIn />
  </a>

  <a href="https://github.com/VeerGupta27" target="_blank">
    <FaGithub />
  </a>

  <a href="mailto:veer27012005@gmail.com">
    <MdEmail />
  </a>

  <a href="tel:+91 9630300426">
    <IoCall />
  </a>

</div>






        </div>

         <div className="Hero-left">

            <img src="/Me4.png" alt="Veer" className="Hero-image" />
        </div>

        </div>
    )

}


export function About() {
  return (
    <section className="About-section">

      <img
        src="/About.png"
        alt="Veer"
        className="About-image"
      />

      <div className="About-text">

        <h1 className="About-title">
          About Me
        </h1>

        <p className="content">
          I'm <span className="highlight">Veer</span>, a passionate
          Undergraduate <span className="highlight">
          Software Developer
          </span> with a love for building innovative solutions.

          With expertise in <span className="highlight">
          Full-Stack Development
          </span> & building <span className="highlight">
          AI Powered Applications
          </span>, I enjoy creating seamless digital experiences
          and crafting code that brings ideas to life.

          My journey in tech is driven by a desire to learn,
          grow, and make an impact through technology.
        </p>

      </div>

    </section>
  );
}