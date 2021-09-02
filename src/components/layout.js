import React from 'react';
//Importing components
import Navigation from './header.js';
//framer-motion import

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navigation />
            <div className="row">
                <div className="d-none d-lg-block col-lg-1"></div>
                <div className="col-12 col-lg-10">
                    {/* Content for the site goes here */}
                    {props.children}
                </div>
                <div className="d-none d-lg-block col-lg-1"></div>
            </div>
        </React.Fragment>
    );  
};

export default Layout;

