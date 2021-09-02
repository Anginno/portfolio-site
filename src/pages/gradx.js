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

const GradX = () => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        key={"gradX"}
        >
            <Helmet>
                <title>GradX | anginno</title>
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
                        className="header-sub-title grey-text">Swinburne's GradX</motion.h1>
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
                            className="header-title">UX Design</motion.h2>
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
                            className="header-title">for Swinburne's</motion.h2>
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
                            className="header-title">virtual space</motion.h2>
                        </div>
                    </div>
                </div>
                <div className="row work-blurb-container">
                    <div className="col-12 col-lg-5">
                        <p className="work-detail grey-text">November 2020 <br /> University Project <br /> Client work <br /> UX design<br/> Virtual Exhibition</p>
                    </div>
                    <div className="col-12 col-lg-7">
                        <p className="work-description">GradX is a graduate exhibition where design students can showcase their work to employers, family, teacher and other students.With the restrictions in place due to COVID-19, a lot of events and places that were a crowd magnet had to be cancelled including Swinburne's GradX. For my UX major's capstone project, me and three other students were given the oppertunity to work on creating the user experience for the GradX virtual exhibition with lecturer Ali De Kruiff as the client.<br/><br/>

                        View the prototype of the exhibition yourself <a href="https://hubs.mozilla.com/xUCSQG9/simplistic-slim-meetup">here</a>.
                        </p>
                    </div>
                </div>
            </section>
            <section id="work">
                {/* image container */}
                <div className="row mb-5">
                    <div className="col-12 col-md-8 overflow-hidden">
                        <img className="w-100 h-100" src="/images/gradx/1.jpg" alt="planning phase image" />
                    </div>
                    <div className="col-12 col-md-4"></div>
                </div>
                {/* image container */}
                <div className="row mb-5">                    
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-8 overflow-hidden">
                        <img className="w-100 h-100" src="/images/gradx/5.jpg" alt="personas" />
                    </div>
                </div>
                {/* description text goes here */}
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p>Before creating prototype spaces for the virtual exhibiiton, we first researched on the user's needs, the stakeholders and had meetings with the client to find out the requirements for the virtual exhibition. With the found information, we chose to create the exhibition in space in Mozilla Hubs and I was then assigned to design the virtual space's layout and overall theme. </p>          
                    </div>
                    <div className="col-12 col-lg-5"></div> 
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 overflow-hidden">
                        <img className="w-100 h-100" src="/images/gradx/2.jpg" alt="sketches of the room layout" />
                    </div>
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 overflow-hidden">
                        <img className="w-100 h-100" src="/images/gradx/3.jpg" alt="rooms created" />
                    </div>
                </div>
                {/* description text goes here */}
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p>I designed three rooms to do group focus tests on to see which room was easiest to navigate, had the better looking scene and in look for any general issues with Mozilla Hubs. We tested it on people that played video games regularly and people that didn't to see the difference in how the interacted with the application and space. After the tests were complete, we compiled the results then fixed any issues and polished the space.</p>              
                    </div>
                    <div className="col-12 col-lg-5"></div> 
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12">
                        <img className="w-100 h-100" src="/images/gradx/4.jpg" alt="the final prototype room" />
                    </div>
                </div>
            </section>
        </motion.div>
    )
};

export default withRouter(GradX);