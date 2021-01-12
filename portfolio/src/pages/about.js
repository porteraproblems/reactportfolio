import React, { Component } from "react";
import Navi from "../Components/Nav/nav";
import { Container, Row, Col, Media } from "reactstrap";

import Headshot from "../Components/Images/Headshot.jpg";
import Rutgers from "../Components/Images/Rutgerslogo.png";
import Kean from "../Components/Images/Keanlogo.png"

function About() {
    <Container fluid className="container">
        <Navi />
        <Row>
            {/*<!--Headshot-->*/}
            <Col md="3">
                <img src={Headshot} alt="Alexander Portera" className="img-fluid mx-auto d-block" id="headshot" />
            </Col>
            {/*<--About me--> */}
            <Col md="9">
                <header>
                    <h2>About Me</h2>
                    <hr />
                </header>

                <p>This is the part where I explain myself</p>

                <header>
                    <h2>Experience and Skills</h2>
                </header>

                <p>This is the part where I put down my XP and skills</p>

                <header>
                    <h2>Education</h2>
                </header>

                {/* <!-- Education Row 1 --> */}
                <Row>
                    <Col md="1">
                        <img src={Rutgers} className="img-fluid mx-auto d-block icon" alt="Rutgers Icon" />
                    </Col>
                    <Col md="11">
                        <p>Rutgers University - Coding Bootcamp</p>
                    </Col>
                </Row>
                {/* <!-- Education Row 2 --> */}
                <Row>
                    <Col md="1">
                        <img src={Kean} className="img-fluid mx-auto d-block icon" alt="Kean Icon" />
                    </Col>
                    <Col md="11">
                        <p>Kean University - BA Theatre</p>
                    </Col>
                </Row>
                <h2>Technologies and Languages</h2>
                <p>HTML, CSS, JavaScript, JQuery, React</p>
            </Col>
        </Row>
    </Container>
}




export default About;