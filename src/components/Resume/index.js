import React from "react";
import myResume from "../../assets/web-dev-resume.pdf"

function Resume() {
    return (
        <div>
            <h2 className="mb-1 ml-1">Resume</h2>
            <p className="ml-2">To download my resume, please click here: <a href={myResume} download ="Austin Espinal's Resume">My Resume</a></p>
            <h3 className="mt-2 ml-1">Front-end Proficiencies:</h3>
            <ul className="ml-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Responsive design</li>
                <li>Bootstrap</li>
                <li>Materilize</li>
            </ul>
            <h3 className="mt-2 ml-1">Back-end Proficiencies:</h3>
            <ul className="ml-2">
                <li>APIs</li>
                <li>REST</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequalize</li>
                <li>NoSQL: Mongo</li>
                <li>Mongoose</li>
                <li>React</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
}

export default Resume;