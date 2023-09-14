import React from "react";
import { BsGeoFill, BsLinkedin, BsFillEnvelopeAtFill } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div className="container-fluid bg-black text-center p-3">
      <h3>Contact</h3>
      <h2>I'd Love To Connect With You.</h2>
      <p className="pt-2">Let me get to know more about you.</p>
      <div
        className="container"
        style={{
          height: 510,
        }}
      >
        <div className="row pt-4">
          <div className="col-4">
            <span className="logo">
              <BsGeoFill />
            </span>
            <h4 className="text-warning">Where to Find Me</h4>
            <p>
              Gediz St. <br />
              Şişli, Istanbul
              <br /> 34377 Turkiye
            </p>
          </div>
          <div className="col-4">
            <span className="logo">
              <BsFillEnvelopeAtFill />
            </span>
            <h4 className="text-warning">Email Me At</h4>
            <p>smgunestr@gmail.com</p>
          </div>

          <div className="col-4">
            <span className="logo">
              <BsLinkedin />
            </span>
            <h4 className="text-warning">Let's Connect</h4>
            <a href="https://www.linkedin.com/in/suleymanmehmetgunes/">
              Linkedin Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
