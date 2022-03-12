import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="flex-row bg">
            <div className="container flex-row">
            <FontAwesomeIcon icon={faGithub}><a href="https://github.com/austin-espinal" target="_blank" rel="noreferrer" aria-label="link to Austin's Github"></a></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin}><a href="https://stackoverflow.com/users/18443433/austin-espinal" target="_blank" rel="noreferrer" aria-label="link to Austin's Linkedin"></a></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStackOverflow}><a href="https://stackoverflow.com/users/18443433/austin-espinal" target="_blank" rel="noreferrer" aria-label="link to Austin's Stack Overflow"></a></FontAwesomeIcon>
            </div>
        </footer>
    );
}

export default Footer;