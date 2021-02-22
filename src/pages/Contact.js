import React from "react";
import { Container, Row, Col } from "reactstrap";
import ContactForm from "../Components/ContactForm/ContactForm"
import Navi from "../Components/Nav/nav";
import GitHub from "../Components/Images/GitHub.png";
import LinkedIn from "../Components/Images/LinkedIn.png";
import "./Contact.css";

function Contact() {
    return (
        <Container fluid id="containerTwo">
            <Navi />
            <br></br>
            <Row>
                <Col className="col-md-12">
                    <header>
                        <h2>Contact Me</h2>
                        <hr />
                    </header>
                    <p>Listed below is both my work history via LinkedIn, and my other projects not listed on my GitHub page.</p>
                    <p>Feel free to contact me through my email at aportera3@gmail.com or use the spaces below.</p>
                </Col>

                <Col className="col-md-6">
                    <ContactForm />
                </Col>

                <Col className="col-md-6">
                    <br></br>
                    <Row>
                        <Col md="3">
                            <img src={GitHub} className="img mx-auto d-block link-icon" height="150px" width="150px" alt="GitHub icon" />
                        </Col>
                        <Col md="6">
                            <a className="atag" href="https://github.com/porteraproblems" rel="noreferrer" target="_blank">My GitHub</a>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col md="3">
                            <img src={LinkedIn} className="img mx-auto d-block link-icon" height="150px" width="150px" alt="LinkedIn icon" />
                        </Col>
                        <Col md="6">
                            <a className="atag" href="https://www.linkedin.com/in/alexander-portera-9baa6a49/" rel="noreferrer" target="_blank">My LinkedIn</a>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default Contact;