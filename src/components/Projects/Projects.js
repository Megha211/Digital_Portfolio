import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stock from "../../Assets/Projects/stock_market.jpg"
import recommendation from "../../Assets/Projects/recommendation.png"
import met from "../../Assets/Projects/met.jpg"
import localizer from "../../Assets/Projects/localizer.jpg"

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
              imgPath={stock}
              isBlog={false}
              title="Stock Market Prediction"
              description=" Performed stock price prediction for AAPL dataset using historical data and models like ANN, RNN, and LSTM. Implemented in Jupyter Notebook with Python, TensorFlow/Keras, Scikit-Learn, and data visualization tools to provide accurate price forecasts."
              ghLink="https://github.com/Megha211/stock_market_prediction.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recommendation}
              isBlog={false}
              title="Recommendation System"
              description="Designed and implemented a robust hybrid recommendation model combining Singular Value Decomposition and Neural Collaborative Filtering. Achieved significant accuracy improvements, enhancing user engagement."
              ghLink="https://github.com/1Tanmay6/hybrid-recommendation-system.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={met}
              isBlog={false}
              title="Video Conferencing Web App "
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Megha211/Met.git"
              demoLink="met-snowy.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={localizer}
              isBlog={false}
              title="Localizer"
              description="Led the creation of an innovative system for tracking students both indoors and outdoors using RFID and GPS technologies, significantly improving student safety and monitoring efficiency."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
