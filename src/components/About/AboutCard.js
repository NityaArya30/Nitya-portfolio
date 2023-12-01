import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitya Arya </span>
            from <span className="purple"> Sonipat, India.</span>
            <br />
            I am currently pursuing  B-Tech in Computer Science from Kurukshetra University.
            <br />
            I have completed Class 12th from Little Angels Senior Secondary School, Sonipat. 
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Debuuging for hours is the only task I love to do."{" "}
          </p>
          <footer className="blockquote-footer">Nitya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
