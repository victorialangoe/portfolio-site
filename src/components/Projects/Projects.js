import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import motoCast from "../../Assets/Projects/MotoCast.svg";
import in1020Universet from "../../Assets/Projects/IN1020-universet.svg";
import article from "../../Assets/Projects/Article.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={in1020Universet}
              isBlog={false}
              title="IN1020 Universe"
              description="IN1020 Game is a gamified learning experience developed for the University of Oslo's mandatory course IN1020. Players explore five themed planets representing key course topics, completing collaborative missions and group-based challenges guided by instructors. Designed to make learning interactive, social, and engaging."
              ghLink="https://in1020-universet.ifi.uio.no/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motoCast}
              isBlog={false}
              title="MotoCast"
              description="motmotmotmot."
              ghLink="https://github.com/victorialangoe/MotoCast"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={article}
              isBlog={false}
              title="Published Research Article"
              description="fdsfdsf"
              article={true}
              ghLink="https://dspace.ut.ee/server/api/core/bitstreams/30bb24c1-59e9-495d-a281-61ad04db9a4c/content"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={article}
              isBlog={false}
              title="Published Research Article"
              description="TEST"
              article={true}
              ghLink="https://dspace.ut.ee/items/e248e103-f2d2-4e9c-93f3-963e81bc1d09"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={article}
              isBlog={false}
              title="Published Research Article"
              description="fdsfdf"
              article={true}
              ghLink="https://www.uio.no/studier/emner/matnat/ifi/IN5550/v24/final-exam/wnnlp2024_proceedings.pdf#page=9"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
