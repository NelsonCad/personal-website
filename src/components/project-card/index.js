import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import "./project-card.css";

function Project(props) {

    return (
            <Card body id={props.id} className="item-display-wrap">
                <CardTitle className="title">{props.title}</CardTitle>
                <CardText>{props.description}</CardText>
                <Button href={props.link} target="_blank" color="primary">go to website</Button>
            </Card>
    );
};

export default Project;