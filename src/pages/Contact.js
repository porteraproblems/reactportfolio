import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navi from "../Components/Nav/nav";
import GitHub from "../Components/Images/GitHub.png";
import LinkedIn from "../Components/Images/LinkedIn.png";

function Contact() {
    return (
        <Container fluid className="container">
            <Navi />
            <Row>
                <Col className="col-md-12">
                    <header>
                        <h2>Contact Me</h2>
                        <hr />
                    </header>
                    <p>This is the part where I tell you things</p>
                    <br></br>
                    <Row>
                        <Col md="1">
                            <img src={GitHub} className="img-fluid mx-auto d-block link-icon" height="300px" width="300px" alt="GitHub icon" />
                        </Col>
                        <Col md="11">
                            <a href="https://github.com/porteraproblems" target="_blank">My GitHub</a>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="1">
                            <img src={LinkedIn} className="img-fluid mx-auto d-block link-icon" height="300px" width="300px" alt="LinkedIn icon" />
                        </Col>
                        <Col md="11">
                            <a href="https://www.linkedin.com/in/alexander-portera-9baa6a49/" target="_blank">My LinkedIn</a>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default Contact;