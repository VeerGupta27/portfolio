import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import "../styles/HeroSection.css"

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




        <button className="cta-button">Get In Touch</button>
        <button className="cta-button">View Projects</button>


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