import React from 'react';
import { Container } from 'reactstrap';
import "./Jumbotron.css";

function Jumbo({ children }) {
    return (
        <div className="jumbowrap">
            <Container fluid>
                {children}
            </Container>
        </div>
    );
};

export default Jumbo;