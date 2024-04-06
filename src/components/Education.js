import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import universityLogo1 from '../assets/img/srkr.jpeg';
import universityLogo2 from '../assets/img/California_State_University,_Fullerton_seal.png';

const Education = () => {
  return (
    <section className="experience" id="education">
      <Container>
        <h2 className="experience-heading">Education</h2>
        <Row>
          <Col md={6}>
            <div className="experience-item">
              <img className="experience-logo" src={universityLogo1} alt="Company Logo" />
              <h3 className="experience-title">SRKR Engieering College</h3>
              <p className="experience-company">Bachelor of Technology, Information Technology</p>
              <p className="experience-dates">June 2016 - Sept 2020</p>
              <p className="education-details">CGPA: 8.07/10</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="experience-item">
              <img className="experience-logo" src={universityLogo2} alt="Company Logo" />
              <h3 className="experience-title">California State University, Fullerton</h3>
              <p className="experience-company">Master of Science, Computer Science</p>
              <p className="experience-dates">Jan 2023 - Dec 2024</p>
              <p className="education-details">GPA: 3.78/4</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;