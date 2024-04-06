import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    user_name: '',
    user_email: '',
    message: ''
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    let response;
    try {
      response = await emailjs.sendForm('service_59u46b5', 'template_kanv6nr', form.current, {
        publicKey: 'fbiB2Cc6kWReUkZ1n',
      });
    } catch (error) {
      console.error("Error sending email:", error);
      response = { status: "ERROR", text: "Error sending email" };
    }

    console.log(response);
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    
    if (response && (response.status === 200 || response.text === "OK")) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#000';
    e.target.style.color = '#fff';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#fff';
    e.target.style.color = '#000';
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <h4>Please fill out the form to discuss any work opportunities.</h4>
              <form ref={form} onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} sm={12} className="px-1">
                    <input type="text" name="user_name" value={formDetails.user_name} placeholder="Name" onChange={(e) => onFormUpdate('user_name', e.target.value)} />
                  </Col>
                  <Col xs={12} sm={12} className="px-1">
                    <input type="email" name="user_email" value={formDetails.user_email} placeholder="Email Address" onChange={(e) => onFormUpdate('user_email', e.target.value)} />
                  </Col>
                  <Col xs={12} className="px-1">
                    <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                    <button type="submit">{buttonText}</button>
                  </Col>
                  {/* Status Message */}
                  {status.message && (
                    <Col xs={12} className="px-1">
                      <p className={`status-message ${status.success ? "success" : "error"}`}>{status.message}</p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};