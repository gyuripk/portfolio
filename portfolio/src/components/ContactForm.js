import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

function ContactForm() {
  const [result, showResult] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_EMAILJS_API_KEY
      );

      console.log(result.text);
      showResult(true);
    } catch (error) {
      console.log(error.text);
    }

    event.target.reset();
  };

  const handleClick = () => {
    showResult(false);
  };

  //when user clicks outside the form, the result message will disappear
  useEffect(() => {
    if (result) {
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [result]);

  return (
    <Container className="contact-container">
      <h1>Contact Me</h1>
      <p>Please fill this form in a decent manner</p>
      {result && (
        <div>
          <i
            className="bi bi-check-circle-fill"
            style={{ fontSize: "3rem", color: "green" }}
          ></i>
          <p className="mt-3">Your message has been sent successfully!</p>
        </div>
      )}
      <Row>
        <Col sm="12" md={{ size: 10, offset: 1 }}>
          <Form onSubmit={sendEmail}>
            <FormGroup className="form-group">
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="from_name"
                id="name"
                placeholder="Enter your name"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="sender_email"
                id="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Enter your message"
              />
            </FormGroup>
            <Button className="contact-button">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
