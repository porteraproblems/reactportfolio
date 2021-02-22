import React from "react";
import { Container, Col } from "reactstrap";
import Navi from "../Components/Nav/nav";
import ProjectCards from "../Components/Cards/cards";
import "./Portfolio.css"

function Portfolio() {
    return (
        <Container fluid id="containerThree">
            <Navi />
            <br></br>
            <Col lg="12">
                <ProjectCards />
                <p id="gitgit" className="text-center">Other projects can be found on my
                <a href="https://github.com/porteraproblems" rel="noreferrer" target= "_blank"> GitHub</a>
                </p>
            </Col>
        </Container>
    )
}



export default Portfolio;