import React from "react";
import "./placeholder.css";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import {
    FaGithub,
    FaLinkedin,
    FaPhone
} from "react-icons/fa";
import {
    MdEmail
} from "react-icons/md"


function Home() {

    return (
        <div>


            <Container className="container">

                <Row className="row">

                    <Col sm={{ size: 10 }}>

                        <div>
                            <h1>About Me</h1>
                        </div>

                        <div className="boox ">
                            <FaGithub />
                            <a className="contact-link" href="https://github.com/NelsonCad" target="blank">Repository</a>
                        </div>

                        <div className="boox">
                            <FaLinkedin />
                            <a className="contact-link" href="https://www.linkedin.com/in/nelsoncad/" target="blank">NelsonCad</a>
                        </div>

                        <div className="boox email">
                            <MdEmail />
                            <a className="contact-link" href="#">NelsonCad97@gmail.com</a>
                        </div>

                        <div className="boox phone">
                            <FaPhone />
                            <a className="contact-link" href="#">(602) 448-6900</a>
                        </div>

                        <hr></hr>

                    </Col>
                </Row>

                <Row>

                    <Col sm={{ size: 2 }}>
                        <h3>Who am I?</h3>



                    </Col>

                    <Col sm={{ size: 8 }}>
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