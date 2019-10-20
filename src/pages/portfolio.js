import React from "react";
import Jumbo from "../components/Jumbotron";
import Project from "../components/project-card";

const projects = [{
    id: 0,
    title: "Garage Trader",
    description: "like Ebay, but without money",
    link: "https://protected-shelf-46012.herokuapp.com"
},
{
    id: 1,
    title: "Liri-Node-Search",
    description: "node application with various APIs",
    link: "https://github.com/NelsonCad/Liri-node-search"
},
{
    id: 2,
    title: "Mongoose Scraper",
    description: "iflscience.com scraper",
    link: "https://dry-anchorage-82464.herokuapp.com"
}]

function Portfolio() {

    return (
        <div>
            <Jumbo>
            <div className="item-display-container">
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