import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoNewspaperOutline } from "react-icons/io5";

type CertificateCardProps = {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
};

export const CertificateCards: React.FC<CertificateCardProps> = ({
  imgPath,
  title,
  description,
  ghLink,
}) => {
  const textStyle: React.CSSProperties = {
    textAlign: "justify",
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={textStyle}>{description}</Card.Text>

        <Button variant="primary" href={ghLink} target="_blank">
          <IoNewspaperOutline /> &nbsp; View
        </Button>
      </Card.Body>
    </Card>
  );
};
