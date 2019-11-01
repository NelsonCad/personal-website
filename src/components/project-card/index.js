import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import "./project-card.css";

function Project(props) {

    return (
            <Card body id={props.id} className="item-display-wrap"
            onClick={props.onClick}>
                <CardTitle className="title">{props.title}</CardTitle>
                <CardText className="desc">{props.description}</CardText>
                <Button href={props.link} target="_blank" color="primary" size="sm">go to website</Button>
                <Button href={props.repo} target="_blank" color="secondary" size="sm">go to repository</Button>
            </Card>
    );
};

export default Project;