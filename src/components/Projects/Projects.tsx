import { Container, Row, Col } from "react-bootstrap";
import motoCast from "../../Assets/Projects/MotoCast.svg";
import in1020Universet from "../../Assets/Projects/IN1020-universet.svg";
import article from "../../Assets/Projects/Article.svg";
import freeCodeCamp from "../../Assets/Certificates/freeCodeCamp.svg";
import deepLearning from "../../Assets/Certificates/DeepLearning.svg";
import goGPT from "../../Assets/Projects/GoGPT_project.svg";
import udemy from "../../Assets/Certificates/udemy.svg";
import { Particle } from "../Particle";
import { ProjectCards } from "./ProjectCards";
import { CertificateCards } from "./CertificateCard";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#4a4a4a" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={goGPT}
              isBlog={false}
              title="GoGPT"
              description=""
              ghLink="https://github.com/victorialangoe/GoGPT"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={in1020Universet}
              isBlog={false}
              article={true}
              title="IN1020 Universe"
              description="IN1020 Game is a gamified learning experience developed for the University of Oslo's mandatory course IN1020. Players explore five themed planets representing key course topics, completing collaborative missions and group-based challenges guided by instructors. Designed to make learning interactive, social, and engaging."
              ghLink="https://in1020-universet.ifi.uio.no/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={motoCast}
              isBlog={false}
              title="MotoCast"
              description="MotoCast is an app specially developed for motorcyclists who wish to plan their trips around the weather. The app allows users to check the weather for their current location, create routes, and get weather information for the entire route."
              ghLink="https://github.com/victorialangoe/MotoCast"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={article}
              isBlog={false}
              title="Article: A Collection of Question Answering Datasets for Norwegian"
              description="This paper presents four new Norwegian QA datasets—NorOpenBookQA, NorCommonSenseQA, NorTruthfulQA, and NRK-Quiz-QA—covering world knowledge, commonsense reasoning, truthfulness, and Norway-specific knowledge."
              article={true}
              ghLink="https://dspace.ut.ee/server/api/core/bitstreams/30bb24c1-59e9-495d-a281-61ad04db9a4c/content"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={article}
              isBlog={false}
              title="Article: Multi-label Scandinavian Language Identification (SLIDE)"
              description="This paper introduces SLIDE, a manually curated dataset for multi-label sentence-level language identification of Danish, Bokmål, Nynorsk, and Swedish, along with LID models balancing speed and accuracy."
              article={true}
              ghLink="https://dspace.ut.ee/items/e248e103-f2d2-4e9c-93f3-963e81bc1d09"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={article}
              isBlog={false}
              title="Article: Enhancing Language Identification Models"
              description="Presented at WNNLP'24, this study explores language identification for short sentences using a multilabel dataset of Bokmål, Nynorsk, Swedish, and Danish, evaluating OpenLID, FastText, and NLLB."
              article={true}
              ghLink="https://www.uio.no/studier/emner/matnat/ifi/IN5550/v24/final-exam/wnnlp2024_proceedings.pdf#page=9"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <h1 className="project-heading">
          <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "#4a4a4a" }}>
          Here are a few certifications I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={udemy}
              title="Go: The Complete Developer's Guide (Golang)"
              description="Fundamentals and advanced features of the Go Programming Language (Golang)"
              ghLink="https://www.udemy.com/certificate/UC-a06e4f39-8264-4855-85c5-d74a4d23b79c/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={deepLearning}
              title="Deep Learning AI"
              description="NLP with Classification and Vector Spaces"
              ghLink="https://www.coursera.org/account/accomplishments/verify/EXMZX3R43G4Z"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={deepLearning}
              title="Deep Learning AI"
              description="Attention in Transformers: Concepts and Code in PyTorch"
              ghLink="https://learn.deeplearning.ai/accomplishments/3c6ba343-2835-4fe8-a70c-24bbdb1e8581?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={deepLearning}
              title="Deep Learning AI"
              description="ChatGPT Prompt Engineering for Developers"
              ghLink="https://learn.deeplearning.ai/accomplishments/eed7bb12-1770-4360-84cf-e1d9034cd876?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={freeCodeCamp}
              title="freeCodeCamp"
              description="Machine Learning with Python"
              ghLink="https://www.freecodecamp.org/certification/victorialangoe/machine-learning-with-python-v7"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
