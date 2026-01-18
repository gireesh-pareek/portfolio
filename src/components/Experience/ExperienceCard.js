import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
    return (
        <Card className="project-card-view">
            <Card.Body>
                <Card.Title><b className="purple" >{props.title} </b> <small>{props.role} | {props.period}</small></Card.Title>
                <br/>
                <Card.Text as="div" style={{ textAlign: "left" }}>
                    <ul className="experience-points">
                        {props.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default ExperienceCard;
