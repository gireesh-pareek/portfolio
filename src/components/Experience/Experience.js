import Container from "react-bootstrap/Container";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import {Row} from "react-bootstrap";

const experiences = [
    {
        company: "JP Morgan Chase & Co.",
        role: "Software Engineer - 2",
        period: "Feb 2025 – Present",
        points: [
            "Designed and developed secure, cloud-native microservices using Java and Spring Boot.",
            "Led migration of a monolithic Global Payments Interface UI to EKS-based distributed microservices.",
            "Built backend batch workflows using AWS MWAA, reducing operational overhead by 40%.",
            "Modernized legacy systems by refactoring SQL-heavy architectures into cache-driven services.",
            "Integrated AI-powered automation (ChatGPT, Claude, Gemini, RAG pipelines) to improve reliability."
        ]
    },
    {
        company: "Zen & Art (Morgan Stanley)",
        role: "Software Engineer",
        period: "Apr 2023 – Feb 2025",
        points: [
            "Developed high-volume financial transaction processing systems with 99.9% uptime.",
            "Owned complete SDLC from system design to UAT in mission-critical environments.",
            "Improved throughput and operational stability using distributed processing patterns.",
            "Integrated multiple external systems ensuring secure and consistent data flow."
        ]
    },
    {
        company: "Accenture (Amazon Prime Air)",
        role: "Full Stack Developer",
        period: "Jul 2021 – Apr 2023",
        points: [
            "Improved 3D Experience platform performance by 25%.",
            "Built React.js components and REST APIs, improving user interaction by 15%.",
            "Worked across design, development, testing, and deployment phases."
        ]
    }
];

function Experience() {
    return (
        <Container fluid className="experience-section">
            <Particle/>
            <Container>
                <h1 className="experience-heading">Professional <b className="purple">Experience</b></h1>
                <br></br>
                {experiences.map((exp, index) => (
                    <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                        <ExperienceCard
                            key={index}
                            title={exp.company}
                            role={exp.role}
                            period={exp.period}
                            points={exp.points}
                        />
                    </Row>
                ))}
            </Container>
        </Container>
    );
}

export default Experience;
