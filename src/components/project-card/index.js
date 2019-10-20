import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

function Project(props) {

    return (
        <Card body id={props.id}>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.description}</CardText>
            <Button href={props.link} target="_blank">go to website</Button>
        </Card>
    );
};

export default Project;