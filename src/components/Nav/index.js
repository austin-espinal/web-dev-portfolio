import React from 'react';

function Nav({ currentPage, pageChange }) {
    return (
        <nav>
            <ul className="flex-row">
                <li>
                    <a
                        href="#about"
                        onClick={() => pageChange('About')}

                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a
                        href="#portfolio"
                        onClick={() => pageChange('Portfolio')}

                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"

                        onClick={() => pageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        href="#resume"
                        onClick={() => pageChange('Resume')}

                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;