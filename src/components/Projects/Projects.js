import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useState } from "react";

// Web Development Project Images
import restaurantManagement from "../../Assets/Projects/restaurant-management.png";
import iplAuction from "../../Assets/Projects/ipl-auction.png";

// AI/ML Project Images
import aiTripPlanner from "../../Assets/Projects/ai-trip-planner.png";
import gloveDefectDetection from "../../Assets/Projects/glove-defect.png";

// Android Project Images
import attendanceApp from "../../Assets/Projects/attendance-app.png";

function Projects() {
  const [activeTab, setActiveTab] = useState("web"); // Default to Web Development

  // Custom styles for tabs
  const tabStyles = {
    navLink: {
      color: 'white',
      background: 'transparent',
      border: '1px solid #c770f0',
      margin: '0 10px',
      borderRadius: '20px',
      padding: '10px 30px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    navLinkActive: {
      background: 'linear-gradient(45deg, #c770f0, #7c19fc)',
      borderColor: '#c770f0',
      color: 'white'
    },
    navLinkHover: {
      background: 'rgba(199, 112, 240, 0.2)',
      borderColor: '#c770f0'
    }
  };

  const webProjects = [
    {
      imgPath: restaurantManagement,
      title: "Restaurant Management ",
      description: "A comprehensive full-stack web application for restaurant operations management. Features include table booking, online ordering, inventory management, billing system, and admin dashboard with real-time analytics.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT Auth"],
      ghLink: "https://github.com/sainath1569/Restaurant-Management-System",
      demoLink: "https://sainath1569.github.io/Restaurant-management-system/",
      category: "web"
    },
    {
      imgPath: iplAuction,
      title: "IPL Mock Auction System",
      description: "A real-time mock auction platform simulating IPL player auctions. Includes player bidding, team management, budget tracking, and live auction room with real-time updates using WebSockets.",
      techStack: ["React.js", "Socket.io", "Node.js", "MongoDB", "Real-time Bidding"],
      ghLink: "https://github.com/sainath1569/IPL-Auction-System",
      demoLink: "https://sainath1569.github.io/IPL_FRONTEND/#",
      category: "web"
    }
  ];

  const aiProjects = [
    {
      imgPath: aiTripPlanner,
      title: "AI Trip Planner",
      description: "An intelligent travel planning system that uses machine learning to suggest personalized itineraries. Features include destination recommendations, budget optimization, weather considerations, and real-time travel alerts.",
      techStack: ["Fastapi", "React.js", "Google Maps API", "Weather API","LangGraph"],
      ghLink: "https://github.com/sainath1569/AI-Trip-Planner-Client",
      demoLink: "https://sainath1569.github.io/AI-Trip-Planner-Client/#",
      category: "ai"
    },
    {
      imgPath: gloveDefectDetection,
      title: "Hand Glove Defect Detection",
      description: "Computer vision system for automated quality control in manufacturing. Uses deep learning models to detect defects in hand gloves with high accuracy, reducing manual inspection time by 80%.",
      techStack: ["Python", "OpenCV", "YOLO", "TensorFlow", "Flask", "Computer Vision"],
      ghLink: "https://github.com/sainath1569/Hand_glove_project.git",
      demoLink: "https://glove-defect-detector-latest.onrender.com/",
      category: "ai"
    }
  ];

  const androidProjects = [
    {
      imgPath: attendanceApp,
      title: "Attendance Management System",
      description: "Android application for automated attendance tracking using facial recognition and GPS. Features include biometric authentication, real-time reporting, and admin dashboard for attendance analytics.",
      techStack: ["React-Native", "Firebase","Flask", "PostGresQL","SupaBase"],
      ghLink: "https://github.com/sainath1569/Attendance-Management-App",
      demoLink: "https://www.linkedin.com/posts/sainath-reddy-558434286_everestengineering-hackathon-teampeekuthaam-activity-7394767270251520000-EVeo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEV5oRQB04iiggz_AdO5PmaA8s7mAstxv_M",
      category: "android"
    }
  ];

  // Get current projects based on active tab
  const getCurrentProjects = () => {
    switch (activeTab) {
      case "web":
        return webProjects;
      case "ai":
        return aiProjects;
      case "android":
        return androidProjects;
      default:
        return webProjects;
    }
  };

  const currentProjects = getCurrentProjects();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "2rem" }}>
          Here are the projects I've worked on, categorized by domain expertise.
        </p>

        {/* Category Navigation */}
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                style={{
                  ...tabStyles.navLink,
                  ...(activeTab === "web" ? tabStyles.navLinkActive : {})
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== "web") {
                    e.target.style.background = tabStyles.navLinkHover.background;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== "web") {
                    e.target.style.background = tabStyles.navLink.background;
                  }
                }}
                onClick={() => setActiveTab("web")}
              >
                Web Development
              </button>
              
              <button
                style={{
                  ...tabStyles.navLink,
                  ...(activeTab === "ai" ? tabStyles.navLinkActive : {})
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== "ai") {
                    e.target.style.background = tabStyles.navLinkHover.background;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== "ai") {
                    e.target.style.background = tabStyles.navLink.background;
                  }
                }}
                onClick={() => setActiveTab("ai")}
              >
                AI/ML Projects
              </button>
              
              <button
                style={{
                  ...tabStyles.navLink,
                  ...(activeTab === "android" ? tabStyles.navLinkActive : {})
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== "android") {
                    e.target.style.background = tabStyles.navLinkHover.background;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== "android") {
                    e.target.style.background = tabStyles.navLink.background;
                  }
                }}
                onClick={() => setActiveTab("android")}
              >
                Android Applications
              </button>
            </div>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {currentProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index} style={{ marginBottom: '20px' }}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                category={project.category}
              />
            </Col>
          ))}
        </Row>

        {/* Category Description */}
        <Row className="mt-5">
          <Col md={12} className="text-center">
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid rgba(199, 112, 240, 0.3)'
            }}>
              {activeTab === "web" ? (
                <>
                  <h4 style={{ color: '#c770f0' }}>Web Development Projects</h4>
                  <p style={{ color: "white" }}>
                    Full-stack applications built with modern technologies including React, Node.js, 
                    and various databases. Focus on responsive design, user experience, and scalable architecture.
                  </p>
                </>
              ) : activeTab === "ai" ? (
                <>
                  <h4 style={{ color: '#c770f0' }}>AI/ML Projects</h4>
                  <p style={{ color: "white" }}>
                    Machine Learning and Artificial Intelligence projects involving computer vision, 
                    natural language processing, and deep learning. Built with Python, TensorFlow, 
                    and deployed as practical applications.
                  </p>
                </>
              ) : (
                <>
                  <h4 style={{ color: '#c770f0' }}>Android Applications</h4>
                  <p style={{ color: "white" }}>
                    Native Android applications built with Java and Android Studio. Featuring modern 
                    mobile development practices, API integration, and innovative features like 
                    facial recognition and real-time tracking.
                  </p>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;