import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Crime.jpeg";
import projImg2 from "../assets/img/nav.jpeg";
import projImg3 from "../assets/img/cloud_service.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import sort_al from "../assets/img/sort_alog.jpeg";
import ai_proj from "../assets/img/AI_proj.jpeg";
import smart_cab from "../assets/img/smart_cab.jpeg";
import seo from "../assets/img/SEO.jpg";
import flask from "../assets/img/flask.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Algorithm Efficiency Analyzer",
      description: "Python & Tkinter",
      imgUrl: sort_al,
      githubUrl: "https://github.com/rakeshpuppala2590/Algorithm-Efficiency-Analyzer-Tool",
    },
    {
      title: "RESTful API using Flask",
      description: "Python & Flask",
      imgUrl: flask,
      githubUrl: "https://github.com/rakeshpuppala2590/RESTful-API-using-Flask/tree/main",
    },
    
    {
      title: "Cloud Service Management",
      description: "FastAPI & SQLAlchemy",
      imgUrl: projImg3,
      githubUrl: "https://github.com/rakeshpuppala2590/FastAPI-Cloud-Service-Management",
    },

    
    
  ];
  const projects2 = [
    {
      title: "Crime Rate Analysis",
      description: "PySpark & Machine Learning",
      imgUrl: projImg1,
      githubUrl: "https://github.com/rakeshpuppala2590/crime_rate_analysis",
    },
    {
      title: "AI Projects",
      description: "Machine Learning & Deep Learning",
      imgUrl: ai_proj,
      githubUrl: "https://github.com/rakeshpuppala2590/MachineLearningProjects",
    },
    {
      title: "Smart Cab",
      description: "Reinforcement Learning",
      imgUrl: smart_cab,
      githubUrl: "https://github.com/rakeshpuppala2590/MachineLearningProjects/blob/master/smartcab.ipynb",
    },

  ];
  const projects3 = [

    {
      title: "SEO Keyword Analyzer",
      description: "",
      imgUrl: seo,
      githubUrl: "https://github.com/rakeshpuppala2590/SEO_Keyword_Analyzer",
    },

    {
      title: "City Navigation tool",
      description: "Openstreetmap & Leaflet",
      imgUrl: projImg2,
      githubUrl: "https://github.com/rakeshpuppala2590/City-Navigation-and-Emergency-Route-Planning-Tool",
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div>
              <h2>Projects</h2><br></br>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <p>Explore a collection of projects showcasing proficiency in SQL, Flask, Python, SQLAlchemy, Fast API, HTML, CSS, and JavaScript. From dynamic web applications to database management systems, these projects demonstrate a holistic understanding of full-stack development.</p>
                    <Row>
                      {projects1.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>Delve into innovative projects leveraging PySpark, machine learning algorithms, reinforcement learning, neural networks, and convolutional neural networks. These projects illustrate the application of advanced techniques in data analysis, classification, and prediction, including Pyspark Streaming.</p>
                    <Row>
                      {
                        projects2.map((project, index) => {
                          return (
                            <ProjectCard key={index} {...project} />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Discover projects that help understand popular search terms and navigate cities easily. Using Python and React, analyze SEO trends for better online visibility. Meanwhile, with OpenStreetMap and Leaflet, explore cities effortlessly, finding routes and points of interest. These projects use technology to make everyday tasks simpler.</p>
                    <Row>
                      {
                        projects3.map((project, index) => {
                          return (
                            <ProjectCard key={index} {...project} />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};