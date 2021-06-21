import * as React from 'react';
import { Route } from 'react-router';
/*import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import './custom.css';*/


//Hooks
import useScript from './hooks/useScripts';
import useScriptAsyc from './hooks/useScriptsAsync';

//----- Components -----\\
import Header from './features/header/Header';
import Home from './features/home/Home';
import Aboutme from './features/about-me/Aboutme';
import Resume from './features/resume/Resume';
import Portfolio from './features/portfolio/Portfolio';


//Project Pages
import  Project1  from './features/portfolio/projects/project-1';
import  Project2  from './features/portfolio/projects/project-2';
import  Project3  from './features/portfolio/projects/project-3';
import  Project4  from './features/portfolio/projects/project-4';
import  Project5  from './features/portfolio/projects/project-5';
import { Contact } from './features/contact/contact';



export default function App() {

    

    useScript('/js/jquery.min.js');
    useScript('/js/modernizr.custom.js');
    useScript('/js/animating.js');

    useScript('/js/imagesloaded.pkgd.min.js');
    useScript('https://www.google.com/recaptcha/api.js');

    useScript('/js/perfect-scrollbar.min.js');
    useScript('/js/jquery.shuffle.min.js');
    useScript('/js/masonry.pkgd.min.js');
    useScript('/js/owl.carousel.min.js');
    useScript('/js/jquery.magnific-popup.min.js');

    useScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCrDf32aQTCVENBhFJbMBKOUTiUAABtC2o');
    useScript('/js/jquery.googlemap.js');

    useScript('/js/validator.js');
    useScript('/js/main.js');
    useScript('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
    useScript('https://cdn.rawgit.com/sirxemic/jquery.ripples/master/dist/jquery.ripples-min.js');
    useScript('/js/ripple.js');
    useScript('/js/canvas.js');




    return (
        <div className="App">



            {/* <!-- Animated Background --> */}
            <div className="lm-animated-bg" style={{ backgroundImage: 'url(img/main_bg.png)' }}></div>
            {/* <!-- End Animated Background --> */}


            {/* <!-- Loading animation --> */}
            <div className="preloader">
                <div className="preloader-animation">
                    <div className="preloader-spinner">
                    </div>
                </div>
            </div>
            {/* <!-- End Loading animation --> */}




            <div className="page">
                <div className="page-content">

                    {/* Header Section */}
                    <header id="site_header" className="header mobile-menu-hide">

                        <div className="header-content">
                            <div className="header-photo">
                                <img src="img/linkedpic.jpg" alt="Alex Smith" />
                            </div>
                            <div className="header-titles">
                                <h2>Denzel Awuah</h2>
                                <h4>Software Developer</h4>
                            </div>
                        </div>

                        <ul className="main-menu">
                            <li className="active">
                                <a href="#home" className="nav-anim" data-animation="22">
                                    <span className="menu-icon lnr lnr-home"></span>
                                    <span className="link-text">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#about-me" className="nav-anim" data-animation="22">
                                    <span className="menu-icon lnr lnr-user"></span>
                                    <span className="link-text">About Me</span>
                                </a>
                            </li>
                            <li>
                                <a href="#resume" className="nav-anim" data-animation="22" >
                                    <span className="menu-icon lnr lnr-graduation-hat"></span>
                                    <span className="link-text">Resume</span>
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="nav-anim" data-animation="22" >
                                    <span className="menu-icon lnr lnr-briefcase"></span>
                                    <span className="link-text">Portfolio</span>
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="nav-anim" data-animation="22">
                                    <span className="menu-icon lnr lnr-envelope"></span>
                                    <span className="link-text">Contact</span>
                                </a>
                            </li>
                            {/* <li className="menu-h">
                <a href="#reactapp" className="nav-anim">
                  <span className="menu-icon lnr lnr-envelope"></span>
                  <span className="link-text">react</span>
                </a>
              </li>
              <li className="menu-h">
                <a href="#angularSite" className="nav-anim">
                  <span className="menu-icon lnr lnr-envelope"></span>
                  <span className="link-text">angularSite</span>
                </a>
              </li>
              <li className="menu-h">
                <a href="#denzelawuah-portfolio" className="nav-anim">
                  <span className="menu-icon lnr lnr-envelope"></span>
                  <span className="link-text">denzelawuahWebsite</span>
                </a>
              </li>
              <li className="menu-h">
                <a href="#crm" className="nav-anim">
                  <span className="menu-icon lnr lnr-envelope"></span>
                  <span className="link-text">crm</span>
                </a>
              </li>
              <li className="menu-h">
                <a href="#java" className="nav-anim">
                  <span className="menu-icon lnr lnr-envelope"></span>
                  <span className="link-text">java</span>
                </a>
              </li> */}
                        </ul>

                        <div className="social-links">
                            <ul>
                                <li><a href="#?" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#hi" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#?" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>

                        <div className="header-buttons">
                            <a href="#?" target="_blank" className="btn btn-primary">Resume (Download sign)</a>
                        </div>

                        <div className="copyrights">© 2020 All rights reserved.</div>
                    </header>


                    {/* <!-- Mobile Navigation --> */}
                    <div className="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {/* <!-- End Mobile Navigation --> */}

                    {/* <!-- Arrows Nav --> */}
                    <div className="lmpixels-arrows-nav">
                        <div className="lmpixels-arrow-right"><i className="lnr lnr-chevron-right"></i></div>
                        <div className="lmpixels-arrow-left"><i className="lnr lnr-chevron-left"></i></div>
                    </div>
                    {/* <!-- End Arrows Nav --> */}


                    <div className="content-area">
                        <div className="animated-sections">


                            {/* <!-- Home Subpage -->  */}
                            <Home />
                            {/* <!-- End of Home Subpage -->  */}


                            {/* About Me Section  */}
                            <Aboutme />
                            {/* End of About Me Section  */}


                            {/* Resume Section */}
                            <Resume />
                            {/* End of Resume Section  */}


                            {/* <!-- Portfolio Subpage --> */}
                            <Portfolio />
                            {/* <!-- End of Portfolio Subpage --> */}


                            {/* Projects  */}
                            <Project1 />
                            <Project2 />
                            <Project3 />
                            <Project4 />
                            <Project5 />
                            {/* End of Projects */}

                            {/* Contact Sub Page */}
                            <Contact />
                            {/* End of Contact Page */}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    ); // end return

} // end App class 