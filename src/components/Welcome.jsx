import React from "react";
import img from "../assets/header-background.jpg";
import { BsLinkedin, BsGithub, BsFillEnvelopeAtFill } from "react-icons/bs";

const Welcome = () => {
    return (
    <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="header-with-image-text">
          <img
            className="main-img"
            src={img}
            alt="spaceX"
            style={{
              width: 1600,
              height: 740,
            }}
          />
          <div className="banner-text">
            <h1>Süleyman Mehmet Güneş</h1>
            <h3>
              <span>Computer Engineering Student</span> |{" "}
              <span>Frontend Development</span>
            </h3>
            <h3>
              <span>background pc: SpaceX</span>
            </h3>
            <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/suleymanmehmetgunes/">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/suleymanmehmetgunes">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="mailto:smgunestr@gmail.com">
              <BsFillEnvelopeAtFill />
            </a>
          </li>
        </ul>
          </div>
        </div>
      </div>
    );
}

export default Welcome;