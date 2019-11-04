import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import "./project-card.css";

function Project(props) {

    return (
            <Card body id={props.id} className="item-display-wrap"
            onClick={props.onClick}>

                <CardTitle className="title">{props.title}</CardTitle>

                <CardText className="desc">{props.description}</CardText>
                
            </Card>
    );
};

export default Project;