import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="flex-row bg">
            <FontAwesomeIcon icon={faGithub}><a href="https://github.com/austin-espinal" target="_blank"></a></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin}><a href="" target="_blank"></a></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStackOverflow}><a href="" target="_blank"></a></FontAwesomeIcon>
        </footer>
    );
}

export default Footer;