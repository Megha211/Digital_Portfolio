import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I developed a deep passion for data science and have managed to learn a thing or two along the way.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python and SQL. </b>
              </i>
              <br />
              <br />
              My fields of interest are building new&nbsp;
              <i>
                <b className="purple">Data-Driven Technologies </b> and
                exploring areas related to <b className="purple">Machine Learning.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for analyzing and visualizing data using
              tools like <b className="purple">Pandas and Tensorflow,</b> as well as
              <i>
                <b className="purple">
                  {" "}
                  Modern libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Scikit-learn and PyTorch</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ width: "350px",height:"350px" ,borderRadius:"100%"}}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Megha211"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mittal-megha/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
