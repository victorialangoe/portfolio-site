import { Col, Row } from "react-bootstrap";
import { SiGo } from "react-icons/si";

export const Toolstack: React.FC = () => {
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
        <SiGo style={iconStyle} />
      </Col>
    </Row>
  );
};
