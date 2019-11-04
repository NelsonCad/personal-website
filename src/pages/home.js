import React from "react";
import Space from "../components/navspace";
import "./placeholder.css";
import {
    Container,
    Row,
    Col
} from "reactstrap";

function Home() {

    return (
        <div>
            <Space />
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
                            On the 30th of September, 2019, I completed an intensive Bootcamp and have received my certificate for Full Stack Web Development using Javascript as the core coding language, and have learned to use HTML, CSS, JQuery, Reactjs (which is being used to create this website), MySQL, MongoDB, Node.js, and various NPM  packages such as Sequalize, Mongoose, Express, and many more. Of course, there is far more to know about in JavaScript and of what others have done in it, and I am more than happy to learn as much as possible about it.
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