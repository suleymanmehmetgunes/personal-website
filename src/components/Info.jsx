import React from "react";
import Profile from "../assets/profile-picture.png";
import { skills } from "../utils/constants";
import { Link } from "react-router-dom";

const Info = () => { 
    return (
        <div className="container-fluid bg-black text-center p-3">
        <h3>About</h3>
        <h2>Let Me Introduce Myself.</h2>
        <div className="container pt-4">
          <div className="row align-items-center text-start">
            <div className="col-4 d-flex justify-content-end">
              <img className="bordered-img" src={Profile} alt="Profile Picture" />
            </div>
            <div className="col-6">
              <p>
                I'm a senior student majoring in Computer Engineering at Istanbul
                Bilgi University, and I have a passionate ambition to be part of
                the technology sector. My primary focus is especially on front-end
                development, and my goal is to become a full-stack developer. I
                have a strong interest in web and mobile development, and I aim to
                make a mark in the industry using my skills and knowledge.
              </p>
            </div>
          </div>
        </div>
  
        <div className="container text-start py-5">
          <div className="row align-items-center d-flex justify-content-center">
            <div className="col-4">
              <h4>PROFILE</h4>
              <p>
                I am presently part of the IT team at Yves Rocher. {" "}
                <a href="mailto:smgunestr@gmail.com">smgunestr@gmail.com</a>
              </p>
              <ul>
                <li>
                  <strong>FULLNAME:</strong>
                  <p>Süleyman Mehmet Güneş</p>
                </li>
                <li>
                  <strong>BIRTH DATE:</strong>
                  <p>December 20, 2000</p>
                </li>
                <li>
                  <strong>EMAIL:</strong>
                  <p>smgunestr@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h4>SKILLS</h4>
              <p>
                I'm a team player, strong in research and coding. Below are
                highlights of my technical skills:
              </p>
              <ul>
                {skills.map((skill) => {
                  return (
                    <li key={skill.id}>
                      <strong>{skill.text}</strong>
                      <span> - {skill.level}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <Link to="/contact">
            <button
              className="btn btn-warning bg-gradient disabled"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              <strong>Hire Me</strong>
            </button>
          </Link>
          <a href="files/Resume.pdf">
            <button className="btn btn-warning bg-gradient">
              <strong>Download CV</strong>
            </button>
          </a>
        </div>
      </div>
    )
}

export default Info;