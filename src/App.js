//importing react
import React from 'react';
//stylesheets
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Importing Layout structure
import Layout from './components/layout.js';
//Plugins
import {
    useHistory,
    Route,
    Switch,
    useLocation
  } from "react-router-dom";
import ScrollToTop from './utilities/scrolltotop.js';
import {
    AnimatePresence as Animate
} from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
//importing pages
import Home from './pages/home.js';
import About from './pages/about.js';
import GradX from './pages/gradx.js';
import Architectour from './pages/architectour.js';
import Scriibi from './pages/scriibi.js';
import Coursewise from './pages/coursewise.js';
import Riskykids from './pages/riskykids.js';
import Traveldialysisreview from './pages/traveldialysisreview.js';
import FourOhFour from './pages/404.js';
//footer component (so it can animate every page transition and prevent that wierd bump)
import Footer from './components/footer.js';

//Google Analytics
import ReactGA from 'react-ga';

//Applying google analytics key
const trackingId = "G-BCG34EJDZE"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

//MAIN WEBSITE CLASS
const App = () => {
    //Placing Router functions into variables
    const location = useLocation();
    let history = useHistory();
    //tracking page views with React Google Analytics
    history.listen((location) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname)
    });
    return(
        <React.StrictMode>
                <Layout>
                    <Animate exitBeforeEnter>
                    <ScrollToTop />
                        <Switch location={location} key={location.pathname}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/architectour" component={Architectour}/>
                            <Route exact path="/gradx" component={GradX}/>
                            <Route exact path="/scriibi" component={Scriibi}/>
                            <Route exact path="/coursewise" component={Coursewise}/>
                            <Route exact path="/riskykids" component={Riskykids}/>
                            <Route exact path="/traveldialysisreview" component={Traveldialysisreview}/>
                            <Route component={FourOhFour} />
                        </Switch>
                        <Footer />
                    </Animate>    
                </Layout>
        </React.StrictMode>
    )
}

export default App;


