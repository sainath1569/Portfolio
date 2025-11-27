import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaRobot, FaCode, FaMobileAlt } from "react-icons/fa";

function ProjectCards(props) {
  // Tech stack tag styles
  const techTagStyle = {
    background: 'rgba(199, 112, 240, 0.2)',
    color: '#c770f0',
    padding: '4px 12px',
    borderRadius: '15px',
    fontSize: '0.8rem',
    border: '1px solid #c770f0',
    fontWeight: '500',
    display: 'inline-block',
    margin: '2px'
  };

  // Get icon based on category
  const getCategoryIcon = () => {
    switch (props.category) {
      case "ai":
        return <FaRobot className="text-warning" />;
      case "android":
        return <FaMobileAlt className="text-success" />;
      case "web":
      default:
        return <FaCode className="text-primary" />;
    }
  };

  return (
    <Card 
      className="project-card-view" 
      style={{ 
        height: '100%', 
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        style={{ 
          height: '200px', 
          objectFit: 'cover',
          padding: '10px',
          borderRadius: '15px'
        }} 
      />
      <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <Card.Title style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
          {getCategoryIcon()}
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", color: 'white', flex: '1' }}>
          {props.description}
        </Card.Text>
        
        {/* Tech Stack Tags */}
        {props.techStack && (
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '8px', 
            marginBottom: '1rem' 
          }}>
            {props.techStack.map((tech, index) => (
              <span key={index} style={techTagStyle}>
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-start', 
          flexWrap: 'wrap', 
          gap: '10px',
          marginTop: 'auto'
        }}>
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            style={{ 
              background: 'linear-gradient(45deg, #c770f0, #7c19fc)',
              border: 'none'
            }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          
          {/* Demo Link - Only show if demoLink exists */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="success"
              href={props.demoLink}
              target="_blank"
              style={{ 
                marginLeft: "10px",
                background: 'linear-gradient(45deg, #28a745, #20c997)',
                border: 'none'
              }}
            >
              <CgWebsite /> &nbsp;
              {"Live Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;