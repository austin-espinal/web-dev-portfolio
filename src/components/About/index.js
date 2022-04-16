import React from "react";
import profileImage from "../../assets/images/me2.jpg"

function About() {
    return (
        <main className="bg-image page">
            <div className="flex-row">
                <h2 className="m-1">About Me</h2>
                <div className="container">
                    <img className="profile-thumbnail col-12 m-2" src={profileImage} alt="Austin Espinal" />
                    <p className="bg m-2 p-2 round-25">Welcome to my portfolio! My name is Austin Espinal and I am full-stack web developer. I have experience with HTML, CSS, Javascript, Node, React, MySQL, and Mongo.<br />
                    Please look forward to checking out the rest of my portfolio and watch it grow over time.<br />
                        When I am not coding, you can find me playing videogames, watching basketball, browsing Netflix, or making cocktails on the weekends.
                        Email is the best way to reach me. Feel free to leave me a message in the contact section. I hope you enjoy the rest of your day and I hope to hear back from you.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default About;