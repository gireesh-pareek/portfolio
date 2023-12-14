import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";

import analystChat from "../../Assets/Projects/analystChat.png"
import primeAir from "../../Assets/Projects/primeAir.png"
import shopmeImage from "../../Assets/Projects/shopme.png"
import shareLoc from "../../Assets/Projects/shareLoc.png"
import redbusImage from "../../Assets/Projects/redBus.png"
import expenseListImage from "../../Assets/Projects/expenseList.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked in the past.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analystChat}
              isBlog={true}
              title="Analyst Chat"
              description="I have worked with Morgan Stanley research division to develop a communication system which enables clients to securely interact with Analysts (MS Employees) and chatbot."
              ghLink="https://www.cnbc.com/2023/09/18/morgan-stanley-chatgpt-financial-advisors.html"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={primeAir}
              isBlog={true}
              title="Amazon Prime Air"
              description="I have worked with the Amazon Delivery Drone team to enhance and manage the PLM tool used by core engineers to keep track of various components used in the drone."
              ghLink="https://en.wikipedia.org/wiki/Amazon_Prime_Air"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopmeImage}
              isBlog={false}
              title="Shopme"
              description="This is an under-development shopping website built using Java, Spring boot, MySql, and Thymeleaf. This has two major components, front-end for shoppers and back-end for staff responsible for managing inventory."
              ghLink="https://github.com/gireesh-pareek/Shopme"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shareLoc}
              isBlog={false}
              title="ShareLoc"
              description="This is an instagram-like application where user can share their current locations along with their pictures."
              ghLink="https://github.com/gireesh-pareek/ShareLoc/tree/main/frontend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redbusImage}
              isBlog={false}
              title="Redbus Clone"
              description="This is a Redbus clone with basic functionality built using React to understand basic functionalitiues of React."
              ghLink="https://github.com/gireesh-pareek/redbus"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseListImage}
              isBlog={false}
              title="Expense List"
              description="This is a basic expense list app using React. User can add and track all the expenses he has done in a given year."
              ghLink="https://github.com/gireesh-pareek/expense-list/tree/master/Expense-list"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
