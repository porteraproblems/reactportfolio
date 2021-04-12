import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import SU2 from "../Images/SU2.png";
import L42I from "../Images/L42I.png";
import SU1 from "../Images/SU1.png";
import "./cards.css";

const ProjectCards = () => {
    return (
        <div>
            <CardDeck>
                <Card className="bg-dark text-light">
                    <Card.Img src={L42I} alt="Card Image" />
                    <Card.Body className="body">
                        <Card.Title tag="h5">Look4Ward2It</Card.Title>
                        <Card.Subtitle tag="h6" className="mb-2 text-muted">First Group Project</Card.Subtitle>
                        <Card.Text>This is the first project my group and I created for Bootcamp. It's a prototype calendar that shows upcoming events you may not have known based on your interests.</Card.Text>
                        <Card.Link className="cardLink" target="_blank" rel="noreferrer" href="https://rzelazny.github.io/Look4wardToIt/">Take a look</Card.Link>
                        <br></br>
                        <Card.Link className="cardLink" target="_blank" rel="noreferrer" href="https://github.com/rzelazny/Look4wardToIt">Check the Code</Card.Link>
                    </Card.Body>
                </Card>
                <br></br>
                <Card className="bg-dark text-light">
                    <Card.Body className="body">
                        <Card.Img src={SU2} alt="Card Image" />
                        <Card.Title tag="h5">Social Underground 2</Card.Title>
                        <Card.Subtitle tag="h6" className="mb-2 text-muted">Third Group Project</Card.Subtitle>
                        <Card.Text>This social hangout is all built in React. It is a place where friends and family can go to play blackjack and RPS. There's a prototype of our version of the social deduction game "Werewolf".</Card.Text>
                        <Card.Link className="cardLink" target="_blank" rel="noreferrer" href="https://social-underground-2.herokuapp.com/signup">Take a look</Card.Link>
                        <br></br>
                        <Card.Link className="cardLink" target="_blank" rel="noreferrer" href="https://github.com/rzelazny/social-underground-2">Check the Code</Card.Link>
                    </Card.Body>
                </Card>
                <br></br>
                <Card className="bg-dark text-light">
                    <Card.Body className="body">
                        <Card.Img src={SU1} alt="Card Image" />
                        <Card.Title tag="h5">Social Underground</Card.Title>
                        <Card.Subtitle tag="h6" className="mb-2 text-muted">Second Group Project</Card.Subtitle>
                        <Card.Text>This is the first attempt a social hangout, a place where friends and family can go to play blackjack and RPS.</Card.Text>
                        <Card.Link className="cardLink" target="_blank" rel="noreferrer" href="https://social-underground-bc.herokuapp.com/">Take a look</Card.Link>
                        <br></br>
                        <Card.Link className="cardLink" target="_blank" rel="noreferrer" href="https://github.com/rzelazny/social-underground">Check the Code</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>

    );
};

export default ProjectCards;