import React from "react";
import { Col, Row } from "react-bootstrap";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Jupyter from "../../Assets/TechIcons/Jupyter.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Docker</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Postman</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Jupyter} alt="Jupyter" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
    </Row>
  );
}

export default Toolstack;