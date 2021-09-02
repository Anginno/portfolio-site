import React from 'react';
//React-router-dom import
import {
    withRouter,
    Link
  } from "react-router-dom";
//Framer plugin
import {
    motion
} from "framer-motion";
//constants animation variant import
import {
    pageTransition,
    headerVariants
} from '../utilities/constants.js';
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        >
            <Helmet>
                <title>anginno</title>
                <meta name="description" content="Angelo T. Innocente is a UX/UI design and front-end web developer based in Melbourne, Australia. He is able to design applications that
                not only look good but, also feel good in the user's hands. Designing applications/websites is not his only skill but, he is also able to develop sites front-end with some back-end knowledge." />
            </Helmet>
            <main>
                <section id="heading">
                    <div className="hero-section">
                        <div className="header-wrapper">
                            <div className="header-element mask-container">
                                <motion.h1
                                initial="before"
                                animate="after"
                                variants={headerVariants}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                                className="header-title">UX/UI Designer</motion.h1>
                            </div>
                            <div className="header-element mask-container">
                                <motion.h1
                                initial="before"
                                animate="after"
                                variants={headerVariants}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                    ease: "easeOut"
                                }}
                                className="header-title">+ Front-end web</motion.h1>
                            </div>
                            <div className="header-element mask-container">
                                <motion.h1
                                initial="before"
                                animate="after"
                                variants={headerVariants}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4,
                                    ease: "easeOut"
                                }}
                                className="header-title">developer</motion.h1>
                            </div>
                            <motion.h2
                            initial="out"
                            animate="in"
                            exit="out"
                            variants={pageTransition}
                            transition={{
                                delay: 0.7
                            }} 
                            className="header-sub-title grey-text">Angelo T. Innocente</motion.h2>
                            <motion.h3
                            initial="out"
                            animate="in"
                            exit="out"
                            variants={pageTransition}
                            transition={{
                                delay: 0.8
                            }}
                            className="minor-title grey-text">Melb, Aus</motion.h3>
                        </div>
                    </div>
                </section>
                <section id="selected_works">
                    {/* Big display */}
                    <div className="mb-5">
                        <div className="work-wrapper">
                            <div className="work-image-wrapper">
                                <img className="work-image" src="/images/gradx/gradx.jpg" alt="GradX cover" />
                            </div>
                            <Link to="/gradx">
                                <div className="work-link white-text">
                                    <span className="item1">Swinburne GradX</span>
                                    <span className="item2">UX Design for Swinburne's virtual space↗</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Smaller displays (each row takes up 2) */}
                    <div className="work-content-grid">
                        <div className="mb-5 work-wrapper">
                            <div className="work-image-wrapper">
                                <img className="work-image" src="/images/architectour/1.jpg" alt="Architectour cover" />
                            </div>
                            <Link to="/architectour">
                                <div className="work-link white-text">
                                    <span className="item1">Architectour</span>
                                    <span className="item2">A touring app for Melbourne's landmarks↗</span>
                                </div> 
                            </Link>
                        </div>
                        <div className="mb-5 work-wrapper">
                            <div className="work-image-wrapper">
                                <img className="work-image" src="/images/coursewise/1.jpg" alt="Coursewise cover" />
                            </div>
                            <Link to="/coursewise">
                                <div className="work-link white-text">
                                    <span className="item1">CourseWise</span>
                                    <span className="item2">Learn and share skills online↗</span>
                                </div>
                            </Link>    
                        </div>
                    </div>
                    {/* Big display */}
                    <div className="mb-5">
                        <div className="work-wrapper">
                            <div className="work-image-wrapper">
                                <img className="work-image" src="/images/scriibi/1.jpg" alt="scriibi cover" />
                            </div>
                            <Link to="/scriibi">
                                <div className="work-link white-text">
                                    <span className="item1">Scriibi</span>
                                    <span className="item2">Redesigning the dashboard for a teaching tool↗</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Smaller displays (each row takes up 2) */}
                    <div className="work-content-grid">
                        <div className="mb-5 work-wrapper">
                            <div className="work-image-wrapper">
                                <img className="work-image" src="/images/riskykids/1.jpg" alt="Riskykids cover" />
                            </div>
                            <Link to="/riskykids">
                                <div className="work-link white-text">
                                <span className="item1">RiskyKids</span>
                                    <span className="item2">Designing a kids parkour course website↗</span>
                                </div>
                            </Link>    
                        </div>
                        <div className="mb-5 work-wrapper">
                            <div className="work-image-wrapper">
                                <img className="work-image" src="/images/traveldialysisreview/1.jpg" alt="Traveldialysisreview cover" />
                            </div>
                            <Link to="/traveldialysisreview">
                                <div className="work-link white-text">
                                    <span className="item1">TravelDialysisReview</span>
                                    <span className="item2">A review site for users on Dialysis↗</span>
                                </div>  
                            </Link>   
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    );  
};

export default withRouter(Home);