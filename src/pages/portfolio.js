import React from "react";
import Jumbo from "../components/Jumbotron";
import Project from "../components/project-card";
import projects from "../components/projectList";
import "./portfolio.css"

function Portfolio() {

    return (
        <div>
            <div className="emptySpace">
                <p>you shouldn't be seeing this</p>
            </div>
            <Jumbo>
                <div className="item-display-container cardBuild">
                    {projects.map(project => (
                        <Project
                            id={project.id}
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </div>
            </Jumbo>
        </div>
    )
};

export default Portfolio