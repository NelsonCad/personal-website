import React from "react";
import "./placeholder.css";
import {
    Container,
    Row,
    Col
} from "reactstrap";

function Contact() {


    return (
        <div>
            <Container className="container">
                <h1>How to contact me</h1>
                <hr></hr>

                <Row className="row">

                    <Col sm="6">

                        <h4>
                            <p>Email: NelsonCad97@gmail.com</p>

                            <p>Phone: (602) 448-6900</p>


                        </h4>

                    </Col>

                    <Col sm="6">

                        <h4>

                            <p>LinkedIn: <a href="https://www.linkedin.com/in/nelsoncad/" target="blank">NelsonCad</a> </p>

                            <p>Github: <a href="https://github.com/NelsonCad" target="blank">Repository</a></p>

                        </h4>

                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Contact;