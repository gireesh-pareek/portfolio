import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gireesh </span>
            from <span className="purple"> India.</span>
            <br /> I am a software engineer at <a className="purple" href="https://zenart.com/">Zen & Art Inc.</a>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Soprts
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Nature
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥'
          </p>
          <footer className="blockquote-footer">Bhagvat Geeta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
