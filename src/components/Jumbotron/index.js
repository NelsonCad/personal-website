import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

function Jumbo({children}) {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <p>My projects go here</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;