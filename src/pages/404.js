import React from 'react';
import {
    withRouter
  } from "react-router-dom";
//Framer plugin
import {
    motion
} from "framer-motion";
//constants animation variant import
import {
    pageTransition
} from '../utilities/constants.js';
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        >
            <Helmet>
                <title>404 Page not found | anginno</title>
                <meta name="description" content="Angelo T. Innocente is a UX/UI designer + Front-end web developer based in Melbourne, Australia. He has worked as a freelancer and
                has experience working in a start-up as both a UX/UI designer and Front-end web developer." />
            </Helmet>
            <section id="heading">
                    <div className="hero-section">
                        <div className="header-wrapper">
                            <div className="header-element mask-container">
                                <h1 className="header-title">404</h1>
                            </div>
                            <h2 className="header-sub-title grey-text">Sorry, couldn't find what you're lookin' for :\</h2>
                        </div>
                    </div>
                </section>
        </motion.div>
    )
};

export default withRouter(About);