import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home1 from "../../Assets/avatar.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import {
  AiFillGithub, AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Home2 from "./Home2.js";
import Type from "./Type";
import "./home.css";
import About from "../About/About";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
          <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={home1}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: 40 }}
              />

                

            </Col>

            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 ,paddingTop: 30}} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'm
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Milanka Tharangana</strong>
              </h1>
              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>

              <div style={{ paddingLeft: 45 }} className="type">
              
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/Milanka00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="mailto:tharanganam@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/milanka-tharangana-aa6045220"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
               
              </div>

             
              
            </Col>

           
          </Row>
        </Container>
      </Container>
      <Projects id="project" />
      <About/>
       <Home2/>
      
      <ScrollToTop />
    </section>
  );
}

export default Home;
