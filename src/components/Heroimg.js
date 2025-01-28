import "./HeroimgStyles.css";
import React from "react";
import { ReactTyped } from "react-typed"; // Correct import
import IntroImg from "../assets/profile3.jpg";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="Intro" />
      </div>
      <div className="content">
        <p>Hello, I'm Nikitha Musham.</p>
        <h3>
        An Aspiring &nbsp;
          <ReactTyped
            strings={["Front-End Developer", "Full Stack Developer"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h3>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
