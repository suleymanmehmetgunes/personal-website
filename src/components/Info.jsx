import React from "react";
import Profile from "../assets/profile-picture.jpg";
import Resume from "../assets/resume.pdf";
import { skills } from "../utils/constants";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="container-fluid bg-black text-center p-3">
      <h3>About</h3>
      <h2>Let Me Introduce Myself.</h2>
      <div className="container pt-4">
        <div className="row align-items-center text-start">
          <div className="col-5 d-flex justify-content-end">
            <img className="bordered-img" src={Profile} alt="Profile Picture" />
          </div>
          <div className="col-4">
            <p>
              Hi! I'm Süleyman Mehmet Güneş, a senior Computer Engineering
              student at Istanbul Bilgi University. I'm interested in software
              development and I'm currently working on web and mobile
              development. I am a competitive, enthusiastic, open-minded
              individual who thrives on continuous learning and
              self-improvement.
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center py-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 d-flex flex-column justify-content-between h-100">
            <h4>PROFILE</h4>
            <div className="text-start">
            <p>
              I am presently part of the Digital IT team at 
              <br/>  Yves Rocher. <br />
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
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-between h-100">
            <h4>SKILLS</h4>
            <div className="text-end">
            <p>I'm a team player, strong in research and coding.
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
      </div>

      <div className="d-flex justify-content-evenly">
        <Link to="/contact">
          <button className="btn btn-warning bg-gradient" role="button">
            <strong>Hire Me</strong>
          </button>
        </Link>
        <a href={Resume}>
          <button className="btn btn-warning bg-gradient">
            <strong>Download CV</strong>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
