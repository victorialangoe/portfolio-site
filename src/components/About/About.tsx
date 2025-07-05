import { Container, Row, Col } from "react-bootstrap";
import { Github } from "./Github";
import { Techstack } from "./Techstack";
import { AboutCard } from "./AboutCard";
import { Toolstack } from "./Toolstack";
import { UntappdCard } from "./Untappd";
import { Particle } from "../Particle";

export const About = () => {
  const headingStyle: React.CSSProperties = {
    fontSize: "2.1em",
    paddingBottom: "20px",
    color: "#4A4A4A",
  };

  const colStyle: React.CSSProperties = {
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "50px",
  };

  const rowStyle: React.CSSProperties = {
    justifyContent: "center",
    padding: "10px",
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={rowStyle}>
          <Col md={7} style={colStyle}>
            <h1 style={headingStyle}>
              Get To Know <strong className="purple">Me</strong>
            </h1>
            <AboutCard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Currently</strong> learning
        </h1>
        <Toolstack />

        <Github />
        <UntappdCard />
      </Container>
    </Container>
  );
};
