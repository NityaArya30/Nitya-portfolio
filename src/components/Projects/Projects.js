import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WorldClock from "../../Assets/Projects/worldclock.png";
import Scorekeeper from "../../Assets/Projects/Scorekeeper.png";
import ToDoList from "../../Assets/Projects/ToDoList.jpg";
import CV from "../../Assets/Projects/CV.png";
import Calculator from "../../Assets/Projects/calc.png";
import Note from "../../Assets/Projects/Note.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CV}
              isBlog={false}
              title="Resume-Generator"
              description="Many folks face issues while forming their resume. So to ease this task for everyone, I made a resume-generator using HTML, CSS, JS and bootstrap. This will generate your resume as you fill the cv-form."
              ghLink="https://github.com/NityaArya30/Resume-Generator"
              demoLink="https://nityaaarya30.github.io/Resume-Generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Note}
              isBlog={false}
              title="NotePadia"
              description="Made this cute note storing app using React-Js which allows individuals to create, edit, and manage notes, making it convenient to store thoughts, ideas, lists, or any information for future reference."
              ghLink="https://github.com/NityaArya30/Sticky-Notes"
              demoLink="https://nityaaarya30.github.io/stickyy-notes/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDoList}
              isBlog={false}
              title="To-Do-List"
              description="A unique project that is a To-do list made using ReactJs which is a productivity tool that helps individuals organize tasks and manage their time. It typically consists of a list of tasks or activities that need to be completed."
              ghLink="https://github.com/NityaArya30/TO-DO-LIST"
              demoLink="https://nityaaarya30.github.io/to-do-list/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WorldClock}
              isBlog={false}
              title="World Clock"
              description="A world clock is a timekeeping tool that displays the current time for various locations around the world. It allows users to quickly check the time in different time zones, making it useful for coordinating activities or keeping track of global events."
              ghLink="https://github.com/NityaArya30/worldClock"
              demoLink="https://nityaaarya30.github.io/World-Clock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              title="Calculator"
              description="Made a digital calculator using JavaScript which performs functions like addition,subtraction etc. and the calculated results can be cleared with the help of AC button."
              ghLink="https://github.com/NityaArya30/Calculator-using-JS"
              demoLink="https://nityaaarya30.github.io/MathMate/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scorekeeper}
              isBlog={false}
              title="Score-Keeper"
              description="Made a ping pong Scorekeeper in which the scores of two players are displayed and at the end of the total score, results are displayed. One can reset the score and start a new game"
              ghLink="https://github.com/NityaArya30/ScoreKeeper"
              demoLink="https://nityaaarya30.github.io/ScoreKeeper/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
