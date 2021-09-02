import React from 'react';
//Importing react-router
import {
    Link
  } from "react-router-dom";
//Framer plugin
import {
    motion
} from "framer-motion";
//constants import
import {
    pageTransition
} from '../utilities/constants.js';

const Header = () => {
    return (
        <motion.header
            initial="out"
            animate="in"
            exit="out"
            transition={{
                delay: 0.8,
                duration: 0.4,
                ease: "easeOut"
            }}
            variants={pageTransition}
        >
        <nav className="row">
            <div className="d-none d-lg-block col-lg-1"></div>
            <div className="col-2"><Link to="/"><img className="nav-logo" src="images/logo.svg" alt="anginno logo" /></Link></div>
            <div className="col-10 col-lg-8">
                <ul className="nav-list">
                    <li>
                        <Link to="/about">
                            <div className="nav-item grey-text">
                                <span className="item1">about</span>
                                <span className="item2">about</span>
                            </div>
                        </Link>
                    </li>
                    <li className="d-none d-md-block">
                        <a href="/pdf/angelo_innocente_resume.pdf">
                            <div className="nav-item grey-text">
                                <span className="item1">résumé</span>
                                <span className="item2">résumé</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="d-none d-lg-block col-lg-1"></div>
        </nav>
    </motion.header>
    );
}

export default Header;
