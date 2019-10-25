import React from "react";
import Space from "../components/Emptyspace";
import "./placeholder.css";
import {
    Container,
    Row,
    Col
} from "reactstrap";

function Contact() {


    return (
        <div>
            <Space />
            <Container className="container">
                <h1>How to contact me</h1>
                <hr></hr>

                <Row className="row">

                    <Col sm="6">

                        <h4>
                            <p>Email: NelonCad97@gmail.com</p>

                            <p>Phone: (602) 448-6900</p>

                            <p>LinkedIn: <a href="https://www.linkedin.com/in/nelsoncad/">NelsonCad</a> </p>
                        </h4>

                    </Col>

                    <Col sm="6">

                        <h4>
                            <p>Address: 549 E Benrich Dr.</p>

                            <p>Gilbert, AZ 85295</p>

                            <p>Github: <a href="https://github.com/NelsonCad">Repo</a></p>
                        </h4>

                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Contact;