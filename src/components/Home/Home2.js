import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.jpeg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
            
          </Col>
          <Col md={4} className="myAvtar">
            
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
        
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
