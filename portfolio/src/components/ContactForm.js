import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
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

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          showResult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form onSubmit={sendEmail}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="sender_name" id="name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="sender_email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" id="message" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          {result && (
            <p className="mt-3">Your message has been sent successfully!</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
