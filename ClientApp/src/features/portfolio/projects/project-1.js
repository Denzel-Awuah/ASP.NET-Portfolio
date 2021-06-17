import React, { useState, useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    reactThesarus,
    angularSite,
    crmWebsite,
    java,
    denzelawuahWebsite,
    selectState,
    nextProjectPage,
} from './projectSlice';


export function Project1(props) {
    
    
    //Variable that holds the entire project state 
    const project = useSelector(state => state.project);
    const dispatch = useDispatch();

    useEffect(() => {
        // Update the document title using the browser API

        // const page = project.nextPage;
        // switch (page) {
            
        //     case 1:
        //         dispatch(reactThesarus());        
        //     break;
            
        //     case 2:
        //         dispatch(angularSite());        
        //     break;

        //     case 3:
        //         dispatch(denzelawuahWebsite());        
        //     break;

        //     case 4:
        //         dispatch(crmWebsite());        
        //     break;

        //     case 5:
        //         dispatch(java());        
        //     break;

        //     default:
        //         break;
        // }
        // console.log("hi");
        // dispatch(reactThesarus());
        
      });






    var toDispatch;

    return (

        /* Start of Projects page */
        <section data-id="reactapp" className="animated-section">
            <div id="ajax-page" className="ajax-page-content">
                <div className="ajax-page-wrapper">
                    <div className="ajax-page-nav">
                        <div className="nav-item ajax-page-prev-next">
                            <a href={project.leftArrowHref} onClick={() => dispatch(nextProjectPage(5))} className="nav-anim" data-animation="62"><i className="lnr lnr-chevron-left"></i></a>
                            <a href={project.rightArrowHref} onClick={() => dispatch(nextProjectPage(2))} className="nav-anim" data-animation="63"><i className="lnr lnr-chevron-right"></i></a>
                            {/* <a href={project.rightArrowHref} onClick={() => dispatch(angularSite())} className="nav-anim" data-animation="22"><i className="lnr lnr-chevron-right"></i></a> */}
                            
                        </div>
                        <div className="nav-item ajax-page-close-button">
                            <a id="ajax-page-close-button" className="nav-anim" data-animation="21" href="#portfolio"><i className="lnr lnr-cross"></i></a>
                        </div>
                    </div>

                    <div className="ajax-page-title">
                        <h1>{project.title}</h1>
                    </div>

                    <div className="row">
                        <div className="col-sm col-md portfolio-block">


                            <div className="project-img">
                                <img src={project.img} alt="" />
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-12 col-md-12 portfolio-block">
                            {/* <!-- Project Description --> */}
                            <div className="project-description">
                                <div className="block-title">
                                    <h3>Description</h3>
                                </div>


                                <ul className="project-general-info">
                                    <li><p><i className="fa fa-user"></i>Denzel Awuah</p></li>
                                    <li><p><i className="fa fa-globe"></i> <a href="#" target="_blank">www.project-site.com</a></p></li>
                                    <li><p><i className="fa fa-calendar"></i> 25 december, 2016</p></li>
                                </ul>

                                {project.description}

                                <p className="text-justify">Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                {/* <!-- /Project Description --> */}

                                {/* <!-- Technology --> */}
                                <div className="tags-block">
                                    <div className="block-title">
                                        <h3>Programming Languages</h3>
                                    </div>
                                    <ul className="tags">
                                        <li><a>HTML5</a></li>
                                        <li><a>CSS3</a></li>
                                        <li><a>jQuery</a></li>
                                        <li><a>Ajax</a></li>
                                        <li><a>PHP5</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /Technology --> */}

                                {/* <!-- Share Buttons --> */}
                                <div className="btn-group share-buttons">
                                    <div className="block-title">
                                        <h3>Share</h3>
                                    </div>
                                    <a href="#" target="_blank" className="btn"><i className="fab fa-facebook-f"></i> </a>
                                    <a href="#" target="_blank" className="btn"><i className="fab fa-twitter"></i> </a>
                                    <a href="#" target="_blank" className="btn"><i className="fab fa-dribbble"></i> </a>
                                </div>
                                {/* <!-- /Share Buttons --> */}
                            </div>
                            {/* <!-- Project Description --> */}
                        </div>
                </div>
            </div>
        </section>

        /* End of Projects page */

    );
}
