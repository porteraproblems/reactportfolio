import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import SU2 from "../Images/SU2.png";
import L42I from "../Images/L42I.png";
import "./cards.css";

const ProjectCards = () => {
    return (
        <div>
            <CardDeck>
                <Card className="bg-dark text-light">
                    <Card.Img src={L42I} alt="Card Image" />
                        <Card.Body>
                            <Card.Title tag="h5">Look4Ward2It</Card.Title>
                            <Card.Subtitle tag="h6" className="mb-2 text-muted">First Group Project</Card.Subtitle>
                            <Card.Text>This is the first project my group and I created for Bootcamp. It's a prototype calendar that shows upcoming events you may not have known based on your interests.</Card.Text>
                            <Card.Link href="https://rzelazny.github.io/Look4wardToIt/">Take a look</Card.Link>
                        </Card.Body>
                </Card>
                <br></br>
                <Card className="bg-dark text-light">
                    <Card.Body>
                        <Card.Img src={SU2} alt="Card Image" />
                        <Card.Title tag="h5">Social Underground</Card.Title>
                        <Card.Subtitle tag="h6" className="mb-2 text-muted">Second Group Project</Card.Subtitle>
                        <Card.Text>This is a social hangout, a place where friends and family can go to play blackjack and RPS. There's a prototype of our version of the social deduction game "Werewolf".</Card.Text>
                        <Card.Link href="https://social-underground-2.herokuapp.com/signup">Take a look</Card.Link>
                    </Card.Body>
                </Card>
                <br></br>
                <Card className="bg-dark text-light">
                    <Card.Body>
                        <Card.Title tag="h5">3</Card.Title>
                        <Card.Subtitle tag="h6" className="mb-2 text-muted">3</Card.Subtitle>
                        <Card.Text></Card.Text>
                        <Card.Link href="#">Take a look</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>

    );
};

export default ProjectCards;