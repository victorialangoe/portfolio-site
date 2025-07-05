import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoNewspaperOutline } from "react-icons/io5";

function CertificateCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button variant="primary" href={props.ghLink} target="_blank">
          <IoNewspaperOutline /> &nbsp; View
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificateCards;
