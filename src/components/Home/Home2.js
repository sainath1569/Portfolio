import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I'm <span className="purple">Sainath</span>, a passionate Computer Science student who loves building innovative tech solutions to solve real-world complex problems. Over time, I've explored several technologies and found my passion in creating great user experiences through websites and building intelligent machine learning models.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple"> React, Flask, Python, Node.js, </b>
              </i>
              and have strong foundations in <b className="purple">Machine Learning and Deep Learning</b>.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple"> Web Applications, Android Applications using React Native, </b>
              </i>
              and exploring the intersection of AI and web technologies.
              <br />
              <br />
              I love working across the entire stack — from crafting beautiful frontend interfaces with <b className="purple">React</b> to building robust backend systems with <b className="purple">Node.js and Flask</b>, and currently expanding my skills in <i><b className="purple">Deep Learning</b></i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
