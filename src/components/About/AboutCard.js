import React from "react";
import Card from "react-bootstrap/Card";
import { IoGameController } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";
import { Beer } from "lucide-react"; 

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ color: "#4A4A4A" }}>
          <p style={{ textAlign: "justify" }}>
            Hi! I am <span className="purple">Victoria Ovedie Chruickshank Langø </span>
            from <span className="purple"> Sandnessjøen, Norway.</span>
            <br />
            I have just graduated after seven years from the <span className="purple">University of Oslo</span>, 
            where I completed my M.Sc. in Computer Science: Programming and System Architecture 
            with a specialization in <span className="purple">Natural Language Processing</span>.
            <br />
            I also hold a B.Sc. in Computer Science and a B.Sc. in <span className="purple">Political Science</span>, 
            giving me a unique interdisciplinary perspective on technology and society.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <IoGameController /> Playing Video Games
            </li>
            <li className="about-activity">
              <MdTravelExplore /> Travelling
            </li>
            <li className="about-activity">
              <Beer /> Try out new beers
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;