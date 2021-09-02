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
        key={"courseWise"}
        >
            <Helmet>
                <title>CourseWise | anginno</title>
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
                        className="header-sub-title grey-text">CourseWise</motion.h1>
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
                            className="header-title">Learn and</motion.h2>
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
                            className="header-title">share skills</motion.h2>
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
                            className="header-title">online</motion.h2>
                        </div>
                    </div>
                </div>
                <div className="row work-blurb-container">
                    <div className="col-12 col-lg-5">
                        <p className="work-detail grey-text">November 2019<br /> University Project<br /> UI Design <br /> UX design</p>
                    </div>
                    <div className="col-12 col-lg-7">
                        <p className="work-description">CourseWise is a concept site made for users to learn new skills or for teachers to share their skills in the form of online lessons. I wanted the overall visual design of the site to be fun and colourful so users feel invited to get out of their comfort zone and learn something new rather than intimidated. This website was made for a university unit that lasted for 12 weeks and included paper prototyping, user testing and prototyping.  <br/><br/>

                        View the prototype on Figma <a href="https://www.figma.com/proto/uFcDsSJwxRLBj7XU5YIY8y/Skill-Sharing-Web-App?node-id=1%3A16&viewport=42%2C376%2C0.08522167801856995&scaling=min-zoom">here</a>.
                        </p>
                    </div>
                </div>
            </section>
            <section id="work">
                {/* image container */}
                <div className="row mb-5">
                    <div className="col-12 col-md-10 overflow-hidden">
                        <img className="w-100 h-100" src="/images/coursewise/cover.jpg" alt="overview of the work" />
                    </div>
                    <div className="col-12 col-md-2"></div>
                </div>
                {/* description text goes here */}
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p>The development of this concept included a lot of users to test the website each step of the way. From making users test a paper prototype all the way to the prototype of the site. This helped me see problems with the planned features and the user journey of the site before the development of the prototype which saved a lot of time.</p>          
                    </div>
                    <div className="col-12 col-lg-5"></div> 
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-1">
                    </div>
                    <div className="col-12 col-md-11 overflow-hidden">
                        <img className="w-100 h-100" src="/images/coursewise/2.jpg" alt="sketches of the website design" />
                    </div>
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-8 overflow-hidden">
                        <img className="w-100 h-100" src="/images/coursewise/3.jpg" alt="the home page of the site" />
                    </div>
                    <div className="col-12 col-md-4">
                    </div>
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-3">
                    </div>
                    <div className="col-12 col-md-8">
                        <img className="w-100 h-100" src="/images/coursewise/4.jpg" alt="categories and advertisement banner" />
                    </div>
                    <div className="col-12 col-md-1">
                    </div>
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12">
                        <img className="w-100 h-100" src="/images/coursewise/6.jpg" alt="mobile menu modal screens" />
                    </div>
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-8">
                        <img className="w-100 h-100" src="/images/coursewise/5.jpg" alt="individual lessons page" />
                    </div>
                </div>
            </section>
        </motion.div>
    )
};

export default withRouter(Scriibi);