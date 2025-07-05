import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";

type ProjectCardsProps = {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  isBlog?: boolean;
  demoLink?: string;
  article?: boolean;
}

export const ProjectCards: React.FC<ProjectCardsProps> = ({
  imgPath,
  title,
  description,
  ghLink,
  isBlog = false,
  demoLink,
  article = false,
}) => {
  const textStyle: React.CSSProperties = {
    textAlign: "justify",
  };

  const demoButtonStyle: React.CSSProperties = {
    marginLeft: "10px",
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={textStyle}>{description}</Card.Text>

        {/* If it's an article, only show the newspaper icon */}
        {article ? (
          <Button variant="primary" href={ghLink} target="_blank">
            <IoNewspaperOutline /> &nbsp; View
          </Button>
        ) : (
          <>
            <Button variant="primary" href={ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {isBlog ? "Blog" : "GitHub"}
            </Button>
            {"\n"}
            {"\n"}

            {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
            {!isBlog && demoLink && (
              <Button
                variant="primary"
                href={demoLink}
                target="_blank"
                style={demoButtonStyle}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};
