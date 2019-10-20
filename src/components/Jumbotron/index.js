import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

function Jumbo({children}) {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    {children}
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;