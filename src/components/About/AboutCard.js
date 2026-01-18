import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a <b className={"purple"}>Software Engineer with over 4 years of experience </b> in the banking and
            fintech domain, working on mission-critical systems that demand high availability,
            security, and performance.
            <br/>
            <br/>
            Currently, I work at <b className="purple"> <a className={"purple"} href={"https://www.jpmorganchase.com/"}> JP Morgan Chase & Co.</a></b>, where I design and develop
            cloud-native microservices using <b className={"purple"}>Java, Spring Boot, AWS, and Kubernetes.</b>
            My work includes modernizing legacy systems, migrating monoliths to
            microservices, and building scalable batch and streaming workflows.
            <br/>
            <br/>
            Previously, I worked with <b className="purple"> <a className={"purple"} href={"https://www.morganstanley.com/"}> Morgan Stanley</a> (via Zen & Art) </b> on high-volume
            financial transaction systems with 99.9% uptime.
            <br/>
            <br/>
            I enjoy solving complex system design problems, improving operational
            stability, and building production-grade distributed systems.
          </p>

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
