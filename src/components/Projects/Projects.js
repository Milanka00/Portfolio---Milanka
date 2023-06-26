import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import foodW from "../../Assets/Projects/foodW.png";
import pipeC from "../../Assets/Projects/pipeC.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="primary-header">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={foodW}
              title="Food Bank Web"
              description="A donation application to donate money and food items to identified victims of food crisis in Sri Lanka
              Technologies: React, Bootstrap, Java Spring boot and mySql"
              ghLink="https://github.com/ingenious-it/food-bank.git"
              demoLink=""
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Food Bank Admin"
              description="With regard to Food Bank donation application, this provides the environment to the donation collecting organization to manage the donations until they are reached to victims.
              Technologies: React, Bootstrap, Flutter, Java Spring boot and mySql"
              ghLink="https://github.com/ingenious-it/FoodBank-Admin.git"
              demoLink=""
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Food Bank Mobile"
              description="In addition to donation web application, a mobile application was implemented to increase easiness to donate.
              Technologies: Flutter, Java Spring boot and mySql"
              ghLink="https://github.com/ingenious-it/FoodBank_Mobile.git"
              demoLink=""
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={pipeC}
              title="Automatic Pipe cutting Machine"
              description="Designed a device for automate the pipe cutting process which is
              applicable to different pipe materials. Atmega32 was used as the
              microcontroller and stepper motors, ultrasonic and IR sensors were
              used. "
              ghLink="https://github.com/Milanka00/ICT-Project.git"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
