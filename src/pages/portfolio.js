import React from "react";
import Jumbo from "../components/Jumbotron";
import Project from "../components/project-card";
import projects from "../components/projectList";
import otherProjects from "../components/otherProjList"
import Space from "../components/Emptyspace";
import "./portfolio.css";

function Portfolio() {

    return (
        <div>
            <Space />
            <Jumbo className="jumbo">

                <div className="text">
                    <h2>Featured Projects</h2>
                </div>

                <div className="item-display-container cardBuild">
                    {projects.map(project => (
                        <Project
                            id={project.id}
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            repo={project.repo}
                        />
                    ))}
                </div>

                <div className="text">
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
                </div>


            </Jumbo>
        </div>
    )
};

export default Portfolio