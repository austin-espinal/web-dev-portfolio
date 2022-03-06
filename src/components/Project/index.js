import React, {useState} from "react";

function Project() {
    const [projects] = useState([
        {
            name: '',
            url: '',
            image: '',
            git: ''
        },
        {
            name: '',
            url: '',
            image: '',
            git: ''
        },
        {
            name: '',
            url: '',
            image: '',
            git: ''
        },
        {
            name: '',
            url: '',
            image: '',
            git: ''
        },
        {
            name: '',
            url: '',
            image: '',
            git: ''
        },
        {
            name: '',
            url: '',
            image: '',
            git: ''
        }

    ]);

    return (
        <div>
            {projects.map((project) => (
                    <img
                        src={require(`../../assets/images/${project.image}`).default}
                        alt={project.name}
                        className="project-thumbnail"
                        key={project.name}
                    />
            ))}
        </div>
    );
}

export default Project;