import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navi from "../Components/Nav/nav";
import ProjectCards from "../Components/Cards/cards"

function Portfolio() {
    return (
        <Container fluid className="container">
            <Navi />
            <Col lg="12">
                <ProjectCards />
                <p className="text-center" target="_blank">Other projects can be found on my GitHub</p>
            </Col>
        </Container>
    )
}



export default Portfolio;