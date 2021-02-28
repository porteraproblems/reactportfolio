import React from "react";
// import Navi from "../Components/Nav/nav";
import { Container, Row, Col } from "reactstrap";
import Headshot from "../Components/Images/Headshot.jpg";
import Rutgers from "../Components/Images/RU.jpg";
import Kean from "../Components/Images/Keanlogo.png";
import Image from 'react-bootstrap/Image'

function About() {
    return (
        <Container fluid id="container">
            <br></br>
            <Row>
                {/*<!--Headshot-->*/}
                <Col xs="7" md="3">
                    <Image src={Headshot} alt="Alexander Portera" className="img-fluid mx-auto d-block" height="300px" width="300px" id="headshot" roundedCircle />
                </Col>
                {/*<--About me--> */}
                <Col md="9">
                    <header>
                        <h2>About Me</h2>
                    </header>

                    <p>Professional full-stack developer with an interest in frontend design UX/UI. Demonstrated experience across the SDLC with an emphasis in Javascript.  
                    Passionate about making web applications come to life considering the user experience. Additional background in theater, and 6 years in customer service. </p>

                    <header>
                        <h2>Education</h2>
                    </header>

                    {/* <!-- Education Row 1 --> */}
                    <Row>
                        <Col md="1">
                            <img src={Rutgers} className="img-fluid mx-auto d-block icon" height="50px" width="50px" alt="Rutgers Icon" />
                        </Col>
                        <Col md="11">
                            <p>Rutgers University - Coding Bootcamp</p>
                        </Col>
                    </Row>
                    {/* <!-- Education Row 2 --> */}
                    <br></br>
                    <Row>
                        <Col md="1">
                            <img src={Kean} className="img-fluid mx-auto d-block icon" height="50px" width="50px" alt="Kean Icon" />
                        </Col>
                        <Col md="11">
                            <p>Kean University - BA Theatre</p>
                        </Col>
                    </Row>
                    <br></br>
                    <h2>Technologies and Languages</h2>
                    <p>Languages: HTML5, CSS, JavaScript,
                    <br></br>
                    Frameworks: React, Express, Node
                    <br></br>
                    Databases: MySQL, MongoDB
                    <br></br>
                    Additional Tools: Bootstrap, API Interactions, JQuery
</p>
                </Col>
            </Row>
        </Container>
    )
}




export default About;