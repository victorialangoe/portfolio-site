import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiDocker,
  DiDjango,
} from "react-icons/di";
import { SiPostgresql, SiKotlin, SiFlask, SiCsharp, SiC, SiSqlite } from "react-icons/si";

export const Techstack: React.FC = () => {
  const iconStyle: React.CSSProperties = {
    color: "#4A4A4A",
  };

  const rowStyle: React.CSSProperties = {
    justifyContent: "center",
    paddingBottom: "50px",
  };

  return (
    <Row style={rowStyle}>
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
        <DiDjango style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask style={iconStyle} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql style={iconStyle} />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiSqlite style={iconStyle} />
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

