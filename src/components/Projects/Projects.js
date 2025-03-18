import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">PROJECTS </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="MasterHR"
              description="Designed and developedacomprehensive HRautomationmobileapptostreamline operations, including employee
 management, attendance tracking, project and payroll management, task coordination, and real-time chat function
ality. Built a cross-platform application using React Native and Expo, incorporating advanced features such as real-time
 communication powered by Socket.io."
              ghLink="https://github.com/UshaniSanjana/MasterHR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Casper"
              description="Developed an all-in-one desktop application designed to streamline daily life and enhance productivity by managing tasks, schedules, and finances efficiently. Integrated tools for task management, time tracking, and financial planning in a single interface. Built using Java Swing for a responsive and interactive user interface and MySQL for robust data storage and man
agement."
              ghLink="https://github.com/Sahasvinandith/Casper--Task-manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="SuperMarket Chatbot"
              description="Developed a Natural Language Processing (NLP) chatbot using Flask and NLTK to help users locate supermarket
 items by providing shelf locations based on user queries. Implemented NLP techniques like tokenization and POS tagging to process user queries effectively. Integrated PDF generation with pdfkit to provide downloadable reports of requested items and their locations."
              ghLink="https://github.com/UshaniSanjana/Supermarket-Chatbot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Book Review Application"
              description="Developed a book review application using React for the frontend, with MongoDB and Express for the backend. The application allows users to add, update, and delete books, assign ratings, and sort them based on their ratings. Additionally, users can search for books by author, enhancing the discoverability of reviews."
              ghLink="https://github.com/UshaniSanjana/Book-Review-Application"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
