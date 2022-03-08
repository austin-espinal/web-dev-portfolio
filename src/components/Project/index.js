import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Project() {
    const [projects] = useState([
        {
            name: 'Run Buddy',
            url: 'https://austin-espinal.github.io/run-buddy/',
            image: '../../assets/images/run-buddy.jpg',
            git: 'https://github.com/austin-espinal/run-buddy'
        },
        {
            name: 'Horiseon',
            url: 'https://austin-espinal.github.io/horiseon-refactor/',
            image: '../../assets/images/horiseon-refactor.png',
            git: 'https://github.com/austin-espinal/horiseon-refactor'
        },
        {
            name: 'Pizza Hunt',
            url: 'https://pizza-hunt-ae.herokuapp.com/',
            image: '../../assets/images/pizza-hunt.png',
            git: 'https://github.com/austin-espinal/pizza-hunt'
        },
        {
            name: 'Password Generator',
            url: 'https://austin-espinal.github.io/employee-password-gen/',
            image: '../../assets/images/password-gen.jpg',
            git: 'https://github.com/austin-espinal/employee-password-gen'
        },
        {
            name: 'Concierage',
            url: 'https://ellacodes2021.github.io/Team-Indecisive-IDK/',
            image: '../../assets/images/concierage.png',
            git: 'https://github.com/EllaCodes2021/Team-Indecisive-IDK'
        },
        {
            name: 'Not Inta Gram',
            url: 'https://not-into-gram.herokuapp.com/',
            image: '../../assets/images/not-inta-gram.png',
            git: 'https://github.com/Rodney1100/Not-Inta-Gram'
        }

    ]);

    return (
        <div>
            {projects.map((project) => (
                <div className="card">
                    {/* <img
                            src={require(`${project.image}`).default}
                            alt={project.name}
                            className="project-thumbnail"
                            key={project.name}
                        /> */}
                    <div className="card-body">
                    <a href={project.url} target="_blank"><h3>{project.name}</h3></a>
                        <FontAwesomeIcon icon={faGithub}><a href={project.git} target="_blank"></a></FontAwesomeIcon>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;