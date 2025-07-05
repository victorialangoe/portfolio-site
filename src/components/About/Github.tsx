import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export const Github: React.FC = () => {
  const rowStyle: React.CSSProperties = {
    justifyContent: "center",
    paddingBottom: "10px",
  };

  const headingStyle: React.CSSProperties = {
    paddingBottom: "20px",
  };

  const calendarContainerStyle: React.CSSProperties = {
    color: "#4A4A4A",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <Row style={rowStyle}>
      <h1 className="project-heading" style={headingStyle}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={calendarContainerStyle}>
        <GitHubCalendar
          username="victorialangoe"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </Row>
  );
};
