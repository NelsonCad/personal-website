import React from "react";
import "./placeholder.css";
import {
    Container,
    Row,
    Col
} from "reactstrap";

function Home() {

    return (
        <div>
            <Container className="container">
                <h1>About Me</h1>
                <hr></hr>

                <Row className="row">

                    <Col sm="2">
                        <h3>Who am I?</h3>
                    </Col>

                    <Col sm="10">
                        <p>
                            I am a creative Web Developer who wishes to combine artful functionality with user-friendly experiences. I work to make every thing that I create to feel unique and meaningful, from the websites that I am currently making to the videogames that I will bring to life.
                        </p>

                        <p>
                            I am a Full Stack Web Developer who uses Javascript as my core coding language, and am currently using HTML, CSS, JQuery, Reactjs (which is being used to create this website), MySQL, MongoDB, Node.js, and various NPM  packages such as Sequalize, Mongoose, Express, and many more. With JavaScript being such an expansive language to begin with and continously growing, there is always something else for me to discover, learn, and develop.
                        </p>

                        <p>
                            But why should I limit myself to just JavaScript?
                            </p>

                    </Col>

                </Row>

            </Container>

        </div>
    );
};

export default Home;