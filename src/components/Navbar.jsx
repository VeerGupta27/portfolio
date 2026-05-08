import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar(){

    return (
        <>
        
        <div className="navbar">
         
        <div className="logo">
        <h2>Veer</h2>
        </div>

        
        <div className="links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        </div>
        </div>
        
        
        </>
    )
}