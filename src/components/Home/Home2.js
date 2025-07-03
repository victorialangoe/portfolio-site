import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/lol.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate researcher and data scientist specializing in
              <i>
                <b className="purple"> Natural Language Processing </b>
              </i>
              and machine learning, with a particular focus on Norwegian language technology.
              <br />
              <br />
              I recently completed my M.Sc. in Computer Science at the 
              <i>
                <b className="purple"> University of Oslo </b>
              </i>
              , building upon my B.Sc. in Computer Science and B.Sc. in 
              <i>
                <b className="purple"> Political Science</b>
              </i>
              . Currently looking for work as a Data Scientist/NLP Researcher or Fullstack Developer!
              <br />
              <br />
              My research focuses on building &nbsp;
              <i>
                <b className="purple">Norwegian language models and datasets</b>
              </i>
              , including question-answering systems and language identification tools
              for Scandinavian languages.
              <br />
              <br />
              I'm particularly excited about developing 
              <b className="purple">  NLP solutions </b>
              using
              <i>
                <b className="purple">
                  {" "}
                  Python, machine learning frameworks, and modern web technologies
                </b>
              </i>
              &nbsp; to make language technology more accessible for Norwegian speakers.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/victorialangoe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/victoria-ovedie-langoe/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/victorialangoe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;