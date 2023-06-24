import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./about.css";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }} >
            Hi Everyone, I am <span className="primary-header">Milanka Tharangana</span> from Galle, Sri Lanka. I am an IT undergraduate from university of Moratuwa and a passionate programmer.
            <br />
            <br />
            In addition to coding, here are some other things I am good at!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Problem solving
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Team work
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Fast learning
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Documentation
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
