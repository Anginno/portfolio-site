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
                <title>About | anginno</title>
                <meta name="description" content="Angelo T. Innocente is a UX/UI designer + Front-end web developer based in Melbourne, Australia. He has worked as a freelancer and
                has experience working in a start-up as both a UX/UI designer and Front-end web developer." />
            </Helmet>
            <main>
                <div className="about-section">
                    <h1 className="sub-title grey-text">About me</h1>
                    <p className="mb-5">My name is Angelo (Teja Kusuma) Innocente and currently living in Melbourne, Australia. I like to create designs that not only look good but, it has to feel good too because to me a product will not be well-received if it is not easy to use in the hands of users. I am a design graduate from Swinburne University majoring in User Experience design and co-majoring in Computer Science with some experience in the web development industry. My technical background helps me understand the design better and bridge the gap between developers and designers. Other than that, in my spare time, you can find me either playing games (big on Racing and RPGs) or binging whatever show makes me laugh. I am currently looking to apply myself into the industry as either a designer or front-end developer (or both).
</p>

                    <p className="">A mantra I like to follow is <strong>“Function first, fashion second.”</strong></p>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <h2 className="sub-title grey-text">Likes</h2>
                        <ul className="about-list mb-5">
                            <li><p>Video Games</p></li>
                            <li><p>Comedy shows</p></li>
                            <li><p>Playing guitar</p></li>
                            <li><p>You :)</p></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="sub-title grey-text">Experience</h2>
                        <ul className="about-list">
                            <li><p>Scriibi - 4mo</p></li>
                            <li><p>Freelance - 4mo</p></li>
                            <li><p>TravelDialysisReview - 6mo</p></li>
                        </ul>
                    </div>
                </div>
            </main>
            
        </motion.div>
    )
};

export default withRouter(About);