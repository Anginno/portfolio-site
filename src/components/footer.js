import React from 'react';
//Framer plugin
import {
    motion
} from "framer-motion";
//constants animation variant import
import {
    pageTransition
} from '../utilities/constants.js';

const Footer = () => {
    return (
        <motion.footer 
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        className="mt-5 top-border">
            <div className="mt-5">
                <p className="sub-title grey-text">Get in touch</p>
                <a href="mailto:hello@anginno.com" className="footer-item white-text">hello@anginno.com</a>
            </div>
            <div className="pt-5">
                <p className="sub-title grey-text">Socials</p>
                <ul className="footer-links">
                    <li>
                        <a href="https://www.instagram.com/anginno.web/" className="footer-item white-text">Instagram ↗</a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/angelo-innocente-86b411155/" className="footer-item white-text">LinkedIn ↗</a></li>
                    <li><a href="https://github.com/Anginno" className="footer-item white-text">Github ↗</a></li>
                </ul>
                <p className="grey-text mt-5">Developed with <a href="https://reactjs.org/">React.js</a>, <a href="https://getbootstrap.com/">Bootstrap</a> and <a href="https://www.framer.com/motion/">Framer-Motion</a></p>
            </div>
        </motion.footer>
    );
}

export default Footer;
