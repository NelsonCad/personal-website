import React from "react";
import Jumbo from "../components/Jumbotron";
import Project from "../components/project-card";
import projects from "../components/projectList";
import Space from "../components/Emptyspace";
import "./portfolio.css";

function Portfolio() {

    return (
        <div>
            <Space />
            <Jumbo>

                <div className="text">
                    <h2>Projects that I am most proud of</h2>
                </div>

                <hr />

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