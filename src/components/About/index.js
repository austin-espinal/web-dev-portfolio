import React from "react";
import profileImage from "../../assets/images/me2.jpg"

function About() {
    return (
        <div className="flex-row">
            <h2 className="ml-1">About Me</h2>
            <div>
            <img className="profile-thumbnail col-12" src={profileImage} alt="Austin Espinal"/>
            <p className="bg m-2">Welcome to my portfolio! My name is Austin Espinal and I am full-stack web developer. I have experience with HTML, CSS, Javascript, Node, MySQL, and NoSQL.<br />
                    I am currently learning React and built this portfolio with it. Please look forward to checking out my portfolio and watch it grow over time.<br /> 
                    When I am not coding, you can find me playing videogames, watching basketball, browsing Netflix, or making cocktails on the weekends.
                    Email is the best way to reach me. I hope you enjoy the rest of your day and I hope to hear back from you.
            </p>
            </div>
        </div>
    );
}

export default About;