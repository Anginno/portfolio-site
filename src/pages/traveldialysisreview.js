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

const Traveldialysisreview = () => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        key={"travelDialysisReview"}
        >
            <Helmet>
                <title>Travel Dialysis Review | anginno</title>
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
                        className="header-sub-title grey-text">TravelDialysisReview</motion.h1>
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
                            className="header-title">A review</motion.h2>
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
                            className="header-title">site for users</motion.h2>
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
                            className="header-title">on dialysis</motion.h2>
                        </div>
                    </div>
                </div>
                <div className="row work-blurb-container">
                    <div className="col-12 col-lg-5">
                        <p className="work-detail grey-text">July 2018 <br /> Client work <br /> Web development <br /> Full stack <br/> UX Design</p>
                    </div>
                    <div className="col-12 col-lg-7">
                        <p className="work-description">Before my bachelors, I was enrolled in Swinburne's diploma course, "Digital Media Technologes" which was essentialy a two year web development course. The final semester of the course was a five month work experience and our teachers connected us to a client that needed a website to be built and this was to be done as a group. We were introduced to Greg Collette who wanted a website where dialysis users could look up dialysis clinics and find information, book appointments and leave a review for others to see. <br/><br/>

                        Read the article written by Swinburne, <a href="https://www.swinburne.edu.au/news/2018/07/swinburne-students-empower-people-on-dialysis-to-travel/">here</a>.
                        </p>
                    </div>
                </div>
            </section>
            <section id="work">
                <div className="row">
                    {/* image container */}
                    <div className="row mb-5">
                        <div className="col-12 overflow-hidden">
                            <img className="w-100 h-100" src="/images/traveldialysisreview/2.jpg" alt="overview of the work" />
                        </div>
                    </div>
                    {/* description text goes here */}
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <p>We worked closely with our client, Collette, and held occasional meetings to understand what sort of information the site would be retaining, the features it would have and to understand how these clinics operate. For this project, we also had to work as full stack developers since we had to create the database for the site, administration features and general front-end.</p>          
                        </div>
                        <div className="col-12 col-lg-5"></div> 
                    </div>
                    {/* image container */}
                    <div className="row mt-5 mb-5">
                        <div className="col-12 col-md-1">
                        </div>
                        <div className="col-12 col-md-11 overflow-hidden">
                            <img className="w-100 h-100" src="/images/traveldialysisreview/3.jpg" alt="task list for the project" />
                        </div>
                    </div>
                    {/* image container */}
                    <div className="row mt-5 mb-5">
                        <div className="col-12 col-md-8 overflow-hidden">
                            <img className="w-100 h-100" src="/images/traveldialysisreview/4.jpg" alt="home page of the site" />
                        </div>
                        <div className="col-12 col-md-4">
                        </div>
                    </div>
                    {/* image container */}
                    <div className="row mt-5 mb-5">
                        <div className="col-12 col-md-4">
                        </div>
                        <div className="col-12 col-md-8">
                            <img className="w-100 h-100" src="/images/traveldialysisreview/5.jpg" alt="clinic search result page" />
                        </div>
                    </div>
                    {/* image container */}
                    <div className="row mt-5 mb-5">
                        <div className="col-12">
                            <img className="w-100 h-100" src="/images/traveldialysisreview/6.jpg" alt="the individual clinic page" />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
};

export default withRouter(Traveldialysisreview);