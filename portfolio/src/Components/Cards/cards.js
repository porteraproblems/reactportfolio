import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
} from 'reactstrap';

const ProjectCards = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Look4Ward2It</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">First Group Project</CardSubtitle>
                    <CardText>This is the first project my group and I created for Bootcamp. It's a prototype calendar that shows upcoming events you may not have known based on your interests</CardText>
                    <CardLink href="https://rzelazny.github.io/Look4wardToIt/">Take a look</CardLink>
                </CardBody>
            </Card>

            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Social Underground</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Second Group Project</CardSubtitle>
                    <CardText></CardText>
                    <CardLink href="#">Take a look</CardLink>
                </CardBody>
            </Card>

            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">3</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">3</CardSubtitle>
                    <CardText></CardText>
                    <CardLink href="#">Take a look</CardLink>
                </CardBody>
            </Card>
        </div>
        
    );
};

export default ProjectCards;