import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiPostman,
    SiIntellijidea,
    SiEclipseide,
    SiMacos,
    SiGithub, SiOpenai
} from "react-icons/si";
import {DiLinux, DiVisualstudio} from "react-icons/di";
import { FaWindows } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiLinux />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiOpenai />
        </Col>
    </Row>
  );
}

export default Toolstack;
