import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Particle } from "../Particle";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const ResumeNew: React.FC = () => {
  const [width, setWidth] = useState<number>(1200);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rowStyle: React.CSSProperties = {
    justifyContent: "center",
    position: "relative",
  };

  const buttonStyle: React.CSSProperties = {
    maxWidth: "250px",
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={rowStyle}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={buttonStyle}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={rowStyle}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={buttonStyle}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
};
