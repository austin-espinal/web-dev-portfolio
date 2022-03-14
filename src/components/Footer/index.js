import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="flex-row justify-space-around">
            <div id="link-icons" className="align-center">
            <a href="https://github.com/austin-espinal" target="_blank" rel="noreferrer" aria-label="icon link to Austin's Github"><FontAwesomeIcon icon={faGithub} className="m-2" /></a>
            <a href="https://linkedin.com/in/austin-espinal-998526234" target="_blank" rel="noreferrer" aria-label="icon link to Austin's Linkedin"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
            <a href="https://stackoverflow.com/users/18443433/austin-espinal" target="_blank" rel="noreferrer" aria-label="icon link to Austin's Stack Overflow"><FontAwesomeIcon icon={faStackOverflow} className="m-2" /></a>
            </div>
        </footer>
    );
}

export default Footer;