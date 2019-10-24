import React from "react";
import Space from "../components/Emptyspace";
import "./placeholder.css";
import {
    Container,
    Row,
    Col
} from "reactstrap";

function Contact () {


    return (
        <div>
            <Space />
            <Container className="container">
                <h1>How to contact me</h1>
                <hr></hr>

                <Row className="row">

                    <Col sm="6">
                        <p>Email: NelonCad97@gmail.com</p>
                        <p>Phone: (602) 448-6900</p>
                    </Col>

                    <Col sm="6">
                        <p>Address: 549 E Benrich Dr.</p>
                        <p>Gilbert, AZ 85295</p>
                        
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Contact;