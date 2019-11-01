import React, { useState } from "react";
import Jumbo from "../components/Jumbotron";
import Project from "../components/project-card";
import projects from "../components/projectList";
// import otherProjects from "../components/otherProjList";
import Modalview from "../components/Modal";
import NavSpace from "../components/navspace";
import FootSpace from "../components/footerspace"
import "./portfolio.css";

function Portfolio() {

    const [modal, setModal] = useState(false);
    const [projectClicked, setProjectClicked] = useState({});

    function toggle() {

        setModal(!modal);
    }

    return (
        <div>
            <NavSpace />
            <Modalview newModal={modal}
                id={projectClicked.id}
                title={projectClicked.title}
                description={projectClicked.description}
                link={projectClicked.link}
                repo={projectClicked.repo}
            ></Modalview>
            <Jumbo className="jumbo">

                <div className="text">
                    <h2>Featured Projects</h2>
                </div>

                <div className="item-display-container cardBuild"
                >
                    {projects.map(project => (
                        <Project
                            onClick={() => toggle()}
                            id={project.id}
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            repo={project.repo}
                        />
                    ))}
                </div>

                {/* <div className="text">
                    <h2>Other projects I have worked on</h2>
                </div>

                <div className="item-display-container cardBuild">
                    {otherProjects.map(project => (
                        <Project
                            id={project.id}
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            repo={project.repo}
                        />
                    ))}
                </div> */}

            </Jumbo>
            <FootSpace />
        </div>
    )
};

export default Portfolio