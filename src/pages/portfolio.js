import React, { useState } from "react";
import Jumbo from "../components/Jumbotron";
import Project from "../components/project-card";
import projects from "../components/projectList";
import Modalview from "../components/Modal";
import "./portfolio.css";



function Portfolio() {

    const [modal, setModal] = useState(false);
    const [projectClicked, setProjectClicked] = useState({});

    function toggle(id) {

        setModal(!modal);

        if (!modal) {
            setProjectClicked(projects[id]);
        }
        
    }

    return (
        <div>
            <Modalview newModal={modal}
                newToggle={() => toggle()}
                id={projectClicked.id}
                title={projectClicked.title}
                details={projectClicked.details}
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
                            id={project.id}
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            repo={project.repo}
                            onClick={() => toggle(project.id)}
                        />
                    ))}
                </div>

            </Jumbo>
        </div>
    )
};

export default Portfolio