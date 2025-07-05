import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageMe from "../../Assets/me.jpg";
import { Home2 } from "./Home2";
import { Type } from "./Type";
import { Particle } from "../Particle";

export const Home: React.FC = () => {
  const headingStyle: React.CSSProperties = {
    paddingBottom: 15,
  };

  const typeContainerStyle: React.CSSProperties = {
    padding: 50,
    textAlign: "left",
  };

  const colStyle: React.CSSProperties = {
    paddingBottom: 20,
  };

  const imageStyle: React.CSSProperties = {
    maxHeight: "450px",
    borderRadius: "45%",
    zIndex: 9999,
    position: "relative",
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={headingStyle} className="heading">
                Hi!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Victoria Langø</strong>
              </h1>

              <div style={typeContainerStyle}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={colStyle}>
              <img
                src={imageMe}
                alt="Image of Victoria Langø"
                className="img-fluid"
                style={imageStyle}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
};
