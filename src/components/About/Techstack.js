import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiJava,
} from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { BiLogoFlutter,BsFiletypeSql } from "react-icons/bi";
import {

  SiSpringboot,
 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFillBootstrapFill/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <BiLogoFlutter/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot/>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
      <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
