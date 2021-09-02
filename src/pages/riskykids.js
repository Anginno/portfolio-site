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

const Riskykids = () => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        key={"riskyKids"}
        >
            <Helmet>
                <title>Risky Kids | anginno</title>
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
                        className="header-sub-title grey-text">RiskyKids</motion.h1>
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
                            className="header-title">Designing a</motion.h2>
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
                            className="header-title">kids parkour</motion.h2>
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
                            className="header-title">course website</motion.h2>
                        </div>
                    </div>
                </div>
                <div className="row work-blurb-container">
                    <div className="col-12 col-lg-5">
                        <p className="work-detail grey-text">July 2019 <br /> Client work <br /> Web development <br /> UX design</p>
                    </div>
                    <div className="col-12 col-lg-7">
                        <p className="work-description">When I was freelancing as a web developer, a friend of mine gave me Richard's contact detail who wanted a website done for a parkour program he was running for kids. I was given a style guide of the brand and had meetings with Richard to discuss on the information and images he would be putting onto the site. Since the brand's target audience is parents and children, I wanted the site to look energetic to emphasise on the "Risk" part of the brand but also vibrant and fun to show the program was made for children.
                        </p>
                    </div>
                </div>
            </section>
            <section id="work">
                {/* image container */}
                <div className="row mb-5">
                    <div className="col-12 overflow-hidden">
                        <img className="w-100 h-100" src="/images/riskykids/overview.jpg" alt="overview of the work" />
                    </div>
                </div>
                {/* description text goes here */}
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p>Along the design process I would always keep in close contact with the client to ensure the website would be up to the his standards.</p>          
                    </div>
                    <div className="col-12 col-lg-5"></div> 
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-3">
                    </div>
                    <div className="col-12 col-md-9 overflow-hidden">
                        <img className="w-100 h-100" src="/images/riskykids/2.jpg" alt="Home page of website design" />
                    </div>
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-9 overflow-hidden">
                        <img className="w-100 h-100" src="/images/riskykids/3.jpg" alt="the become an affiliate page" />
                    </div>
                    <div className="col-12 col-md-3">
                    </div>
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-2">
                    </div>
                    <div className="col-12 col-md-9">
                        <img className="w-100 h-100" src="/images/riskykids/4.jpg" alt="event page for the website" />
                    </div>
                    <div className="col-12 col-md-1">
                    </div>
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                <div className="col-12 col-md-9 overflow-hidden">
                        <img className="w-100 h-100" src="/images/riskykids/5.jpg" alt="the affiliates page of the website" />
                    </div>
                    <div className="col-12 col-md-3">
                    </div>
                </div>
            </section>
        </motion.div>
    )
};

export default withRouter(Riskykids);