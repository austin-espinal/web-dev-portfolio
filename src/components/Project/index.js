import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import image1 from '../../assets/images/run-buddy.jpg'
import image2 from '../../assets/images/horiseon-refactor.png'
import image3 from '../../assets/images/atanime.png'
import image4 from '../../assets/images/password-gen.jpg'
import image5 from '../../assets/images/concierge.png'
import image6 from '../../assets/images/not-inta-gram.png'

function Project() {
    const [projects] = useState([
        {
            name: 'Run Buddy',
            url: 'https://austin-espinal.github.io/run-buddy/',
            image: `${image1}`,
            git: 'https://github.com/austin-espinal/run-buddy'
        },
        {
            name: 'Horiseon',
            url: 'https://austin-espinal.github.io/horiseon-refactor/',
            image: `${image2}`,
            git: 'https://github.com/austin-espinal/horiseon-refactor'
        },
        {
            name: 'ATAnime',
            url: 'https://atanime.herokuapp.com/',
            image: `${image3}`,
            git: 'https://github.com/Connor2h/A-T-Anime'
        },
        {
            name: 'Password Generator',
            url: 'https://austin-espinal.github.io/employee-password-gen/',
            image: `${image4}`,
            git: 'https://github.com/austin-espinal/employee-password-gen'
        },
        {
            name: 'Concierage',
            url: 'https://ellacodes2021.github.io/Team-Indecisive-IDK/',
            image: `${image5}`,
            git: 'https://github.com/EllaCodes2021/Team-Indecisive-IDK'
        },
        {
            name: 'Not Inta Gram',
            url: 'https://not-into-gram.herokuapp.com/',
            image: `${image6}`,
            git: 'https://github.com/Rodney1100/Not-Inta-Gram'
        }

    ]);

    return (
        <div>
            {projects.map((project) => (
                <div className="card flex-row text-center col-sm-12 col-md-6 col-xl-6 justify-space-around">
                    <div className="bg m-2">
                        <div className="card-header">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="project-thumbnail"
                                key={project.name}
                            />
                        </div>
                        <div className="card-body">
                            <a href={project.url} target="_blank" rel="noreferrer"><h3>{project.name}</h3></a>
                            <a href={project.git} target="_blank" rel="noreferrer" id="link-icons"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;