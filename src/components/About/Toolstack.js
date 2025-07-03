import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGo,
} from "react-icons/si";

const Toolstack = () => {
  const iconStyle = { color: "#4A4A4A" };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGo style={iconStyle} />
      </Col>
    </Row>
  );
}

export default Toolstack;
