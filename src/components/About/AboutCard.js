import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Venkata Sainath Reddy Bhoomi</span>{" "}
            from <span className="purple">Rajiv Gandhi University of Knowledge and Technologies, RK Valley</span>.
            <br />
            I'm a passionate <span className="purple">Full Stack Developer</span> with expertise in{" "}
            <span className="purple">MERN stack</span> and <span className="purple">Machine Learning</span>.
            <br />
            I'm currently pursuing my education while building innovative projects that solve real-world problems.
            <br />
            <br />
            When I'm not coding, I love exploring new technologies and engaging in activities that keep me motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Full Stack Applications 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on Machine Learning Projects 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies and Frameworks 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Complex Problems 💡
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into reality through code and innovation!"{" "}
          </p>
          <footer className="blockquote-footer">Venkata Sainath Reddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;