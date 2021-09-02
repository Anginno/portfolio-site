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
    pageTransition,
    headerVariants
} from '../utilities/constants.js';
import { Helmet } from "react-helmet";

const Scriibi = () => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        >
            <Helmet>
                <title>Scriibi | anginno</title>
                <meta name="description" content="Angelo T. Innocente is a UX/UI designer + Front-end web developer based in Melbourne, Australia. He has worked as a freelancer and
                has experience working in a start-up as both a UX/UI designer and Front-end web developer." />
            </Helmet>
            <section id="heading">
                <div className="hero-section">
                    <div className="header-wrapper">
                        <motion.h1
                        initial="out"
                        animate="in"
                        exit="out"
                        variants={pageTransition}
                        transition={{
                            delay: 0.9
                        }}
                        className="header-sub-title grey-text">Scriibi</motion.h1>
                        <div className="header-element mask-container">
                            <motion.h2
                            initial="before"
                            animate="after"
                            variants={headerVariants}
                            transition={{
                                duration: 0.5,
                                delay: 0.4,
                                ease: "easeOut"
                            }} 
                            className="header-title">Redesigning the</motion.h2>
                        </div>
                        <div className="header-element mask-container">
                            <motion.h2
                            initial="before"
                            animate="after"
                            variants={headerVariants}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                                ease: "easeOut"
                            }} 
                            className="header-title">dashboard for</motion.h2>
                        </div>
                        <div className="header-element mask-container">
                            <motion.h2 
                            initial="before"
                            animate="after"
                            variants={headerVariants}
                            transition={{
                                duration: 0.5,
                                delay: 0.8,
                                ease: "easeOut"
                            }}
                            className="header-title">a teaching tool</motion.h2>
                        </div>
                    </div>
                </div>
                <div className="row work-blurb-container">
                    <div className="col-12 col-lg-5">
                        <p className="work-detail grey-text">December 2019 - February 2020<br /> Internship <br /> Web Development <br /> UX design</p>
                    </div>
                    <div className="col-12 col-lg-7">
                        <p className="work-description">During my time at Scriibi, my role was to create a new dashboard for the product but, also develop the front-end of the design and many other key components of the application. At the time, the existing web application was still in its early version that needed to be optimised for speed and scalability. I was part of the team that put forward an alternative technical stack proposal for the web application. This proposal was accepted and provided the developers with a much improved framework to build and allowed new features and designs to be easily implemented.
                        </p>
                    </div>
                </div>
            </section>
            <section id="work">
                {/* image container */}
                <div className="row mb-5">
                    <div className="col-12 col-md-10 overflow-hidden">
                        <img className="w-100 h-100" src="/images/scriibi/2.jpg" alt="overview of the work" />
                    </div>
                    <div className="col-12 col-md-2"></div>
                </div>
                {/* description text goes here */}
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p>When creating the new dashboard, I incorporated UX design principles to ensure it was easy for users to navigate around the application. I also conducted user testing sessions to see any issues with my design and would use the test results to cater the design towards the user's needs. For the visual design of the dashboard, I designed it to fit with the brand's theme and was visually appealing to the target audience.</p>          
                    </div>
                    <div className="col-12 col-lg-5"></div> 
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-1">
                    </div>
                    <div className="col-12 col-md-11 overflow-hidden">
                        <img className="w-100 h-100" src="/images/scriibi/5.jpg" alt="home page of the site" />
                    </div>
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-8 overflow-hidden">
                        <img className="w-100 h-100" src="/images/scriibi/4.jpg" alt="the assessment and individual assesment page" />
                    </div>
                    <div className="col-12 col-md-4">
                    </div>
                </div>
                {/* description text goes here */}
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p>During the development phase, I worked closely with the back-end team to understand how the database is structured, the types of information that will be displayed on each page and stored especially when creating forms for the site.</p>              
                    </div>
                    <div className="col-12 col-lg-5"></div> 
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12">
                        <img className="w-100 h-100" src="/images/scriibi/3.jpg" alt="student list and rubric list with nothing inside" />
                    </div>
                </div>
            </section>
        </motion.div>
    )
};

export default withRouter(Scriibi);