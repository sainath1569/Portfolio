import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Numpy from "../../Assets/TechIcons/Numpy.svg";
import Pandas from "../../Assets/TechIcons/Pandas.svg";
import OpenCV from "../../Assets/TechIcons/OpenCV.svg";
import Sklearn from "../../Assets/TechIcons/scikit-learn.svg";
import Matplotlib from "../../Assets/TechIcons/Matplotlib.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="python" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Numpy} alt="numpy" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">NumPy</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Pandas} alt="pandas" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={OpenCV} alt="opencv" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">OpenCV</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Sklearn} alt="scikit-learn" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Matplotlib} alt="matplotlib" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Matplotlib</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="mui" style={{ width: "20px", height: "20px" }} />
        <div className="tech-icons-text">Material UI</div>
      </Col>
    </Row>
  );
}

export default Techstack;