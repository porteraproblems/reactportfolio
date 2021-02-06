import React from "react";
import { Container, Col } from "reactstrap";
import Navi from "../Components/Nav/nav";
import ProjectCards from "../Components/Cards/cards"

function Portfolio() {
    return (
        <Container fluid id="containerThree">
            <Navi />
            <Col lg="12">
                <ProjectCards />
                <p className="text-center">Other projects can be found on my
                <a href="https://github.com/porteraproblems" target= "_blank"> GitHub</a>
                </p>
            </Col>
        </Container>
    )
}



export default Portfolio;