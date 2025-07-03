import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiDocker,
  DiDjango,
} from "react-icons/di";
import {
  SiPostgresql,
  SiKotlin,
  SiFlask,
  SiCsharp,
  SiR,
  SiC
} from "react-icons/si";

const Techstack = () => {
  const iconStyle = { color: "#4A4A4A" };
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={iconStyle} />
      </Col>
    </Row>
  );
};

export default Techstack;