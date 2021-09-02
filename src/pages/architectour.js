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

const Architectour = () => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        >
            <Helmet>
                <title>Architectour | anginno</title>
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
                        className="header-sub-title grey-text">Architectour</motion.h1>
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
                            className="header-title">A touring app</motion.h2>
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
                            className="header-title">for Melbourne's</motion.h2>
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
                            className="header-title">landmarks</motion.h2>
                        </div>
                    </div>
                </div>
                <div className="row work-blurb-container">
                    <div className="col-12 col-lg-5">
                        <p className="work-detail grey-text">November 2020 <br /> University Project <br /> UX design <br/> UI Design</p>
                    </div>
                    <div className="col-12 col-lg-7">
                        <p className="work-description">Architectour is an app created for not only tourists, but also people who have an interest in Architecture specifically Melbourne's.
                        The app had to relate to the theme of a "Walking Tour" and was a 12 week project for a university unit. Before developing the prototype of the app, I researched on
                        theoretical issues regarding geo-location technology, mobile accessiblity and more. The next process was to then create the branding for the app and market research to find my target audience and to know
                        whether an architectual touring application would have a need in the market. <br/><br/>

                        Test the prototype yourself on Figma <a href="https://www.figma.com/proto/rWSgDHBsePHdK3JxmvIqbC/Interaction-Mobile-Design?page-id=10%3A0&node-id=11%3A100&viewport=649%2C12%2C0.08883588761091232&scaling=scale-down&starting-point-node-id=11%3A100">here</a>. 
                        </p>
                    </div>
                </div>
            </section>
            <section id="work">
                <div className="row mb-5">
                    <div className="col-12 col-md-8 overflow-hidden">
                        <img className="w-100 h-100" src="/images/architectour/cover.jpg" alt="overview of the app" />
                    </div>
                    <div className="col-12 col-md-4">
                        
                    </div>
                </div>
                {/* description text goes here */}
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p>The name “Architectour” was chosen because it is a play on the word Architect and Tour. It also just fits the purpose of the app which is to createa tour relating to the architecture of Melbourne. When it comes to the visaul design of the application, I wanted to make it feel sophisticated yet fun at the same time. With the illustrations however, since there was a deadline and I was unable to create high quality illustrations in time, I decided to use illustrations created by <br/> <a href="https://blush.design/collections/big-shoes">Elina Cecilia Giglio</a> to help bring the application to life and make it look fun!</p>          
                    </div>
                    <div className="col-12 col-lg-5"></div> 
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-1">
                    </div>
                    <div className="col-12 col-md-11 overflow-hidden">
                        <img className="w-100 h-100" src="/images/architectour/2.jpg" alt="introduction screen for the app" />
                    </div>
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-8 overflow-hidden">
                        <img className="w-100 h-100" src="/images/architectour/4.jpg" alt="the home page of the app" />
                    </div>
                    <div className="col-12 col-md-4">
                    </div>
                </div>
                {/* description text goes here */}
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p>The prototype also required user testing to see whether it had good user experience or not. Since this project was done during a pandemic, user testing was quite difficult to accomplish due to the restrictions that have been placed in Melbourne. A way around this issue was to get users to hug their laptop from behind which ensures their phone screen will always be displayed on the webcam. After conducting the test with four users, I compiled the results and used it to fix the issues that users have found with the design.</p>              
                    </div>
                    <div className="col-12 col-lg-5"></div> 
                </div>
                {/* image container */}
                <div className="row mt-5 mb-5">
                    <div className="col-12">
                        <img className="w-100 h-100" src="/images/architectour/3.jpg" alt="Map and landmark info view" />
                    </div>
                </div>
            </section>
        </motion.div>
    )
};

export default withRouter(Architectour);