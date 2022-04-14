import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    return (
        <header>
            <div>
                <h1 className="ml-1">Austin's Portfolio</h1>
                <nav className="col-sm-12">
                    <ul className="flex-row align-right">
                        <li className="m-2">
                            <Link
                                onClick={() => setCurrentPage('About')}

                                className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
                                to="/"
                            >
                                About Me
                            </Link>
                        </li>
                        <li className="m-2">
                            <Link
                                onClick={() => setCurrentPage('Portfolio')}

                                className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                                to="/portfolio"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="m-2">
                            <Link
                                onClick={() => setCurrentPage('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="m-2">
                            <Link
                                onClick={() => setCurrentPage('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}
                                to="/resume"
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}

export default Header;