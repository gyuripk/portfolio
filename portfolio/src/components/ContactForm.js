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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateName = (name) => {
    const re = /^[A-Za-z]+$/;
    return re.test(String(name));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!validateName(event.target.value)) {
      setNameError("Name is not valid");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!validateEmail(event.target.value)) {
      setEmailError("Email is not valid");
    } else {
      setEmailError("");
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError("");
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    if (message.trim() === "") {
      setMessageError("Message cannot be empty");
      return;
    } else {
      setMessageError("");
    }

    if (
      nameError ||
      emailError ||
      messageError ||
      !name ||
      !email ||
      !message
    ) {
      alert("Please enter valid values before submitting.");
      return;
    }

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
    setName("");
    setEmail("");
    setMessage("");
    setNameError("");
    setEmailError("");
    setMessageError("");
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
                value={name}
                onChange={handleNameChange}
              />
              {nameError && <div className="error">{nameError}</div>}
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="sender_email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <div className="error">{emailError}</div>}
            </FormGroup>
            <FormGroup className="form-group">
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={handleMessageChange}
              />
              {messageError && <div className="error">{messageError}</div>}
            </FormGroup>
            <Button className="contact-button">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
