import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../../../store';
import * as ProjectStore from '../../../store/Project';


type ProjectProps =
    ProjectStore.ProjectState &
    typeof ProjectStore.actionCreators &
    RouteComponentProps<{}>;



class Project1 extends React.PureComponent<ProjectProps> {


    public render() {

        return (
            <React.Fragment>
       
            <section data-id="reactapp" className="animated-section">
                <div id="ajax-page" className="ajax-page-content">
                    <div className="ajax-page-wrapper">
                        <div className="ajax-page-nav">
                            <div className="nav-item ajax-page-prev-next">
                                <a href={this.props.leftArrowHref} onClick={() => { this.props.java(); }} className="nav-anim" data-animation="27"><i className="lnr lnr-chevron-left"></i></a>
                                <a href={this.props.rightArrowHref} onClick={() => { this.props.angular(); }} className="nav-anim" data-animation="27"><i className="lnr lnr-chevron-right"></i></a>
                                {/* <a href={project.rightArrowHref} onClick={() => dispatch(angularSite())} className="nav-anim" data-animation="22"><i className="lnr lnr-chevron-right"></i></a> */}

                            </div>
                            <div className="nav-item ajax-page-close-button">
                                <a id="ajax-page-close-button" className="nav-anim" data-animation="21" href="#portfolio"><i className="lnr lnr-cross"></i></a>
                            </div>
                        </div>

                        <div className="ajax-page-title">
                            <h1>{this.props.title}</h1>
                        </div>

                        <div className="row">
                            <div className="col-sm col-md portfolio-block">


                                <div className="project-img">
                                    <img src={this.props.img} alt="" />
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

                                    {this.props.description}

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

                                    {/* <!-- Clients --> */}
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12">
                                            <div className="block-title">
                                                <h3>Other Projects</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12">
                                            <div className="clients owl-carousel">

                                                <div className="client-block">
                                                    <a href="#reactapp" onClick={() => { this.props.react(); }} className="nav-anim" data-animation="27">
                                                        <img src="img/wordApp.jpg" alt="Logo" />
                                                        
                                                    </a>
                                                    <p>React</p>
                                                </div>

                                                <div className="client-block">
                                                    <a href="#angularSite" onClick={() => { this.props.angular(); }} className="nav-anim" data-animation="27">
                                                        <img src="img/home1.jpg" alt="Logo" />
                                                        
                                                    </a>
                                                    <p>Angular</p>
                                                </div>

                                                <div className="client-block">
                                                    <a href="#denzelawuah-portfolio" onClick={() => { this.props.denzel(); }} className="nav-anim" data-animation="27">
                                                        <img src="img/hackdenzel3.jpg" alt="Logo" />
                                                        
                                                    </a>
                                                    <p>Node js</p>
                                                </div>

                                                <div className="client-block">
                                                    <a href="#crm" onClick={() => { this.props.crm(); }} className="nav-anim" data-animation="27">
                                                        <img src="img/crm2.jpg" alt="Logo" />
                                                        
                                                    </a>
                                                    <p>CRM</p>
                                                </div>

                                                <div className="client-block">
                                                    <a href="#java" onClick={() => { this.props.java(); }} className="nav-anim" data-animation="27">
                                                        <img src="img/chat3.jpg" alt="Logo" />
                                                        
                                                    </a>
                                                    <p>Java</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End of Clients --> */}

                            </div>
                            {/* <!-- Project Description --> */}
                        </div>
                    </div>
                </div>
            </section>
          </React.Fragment>
            /* End of Projects page */
        ); //End return
    } //End Render
} // End Class


export default connect(
    (state: ApplicationState) => state.project,
    ProjectStore.actionCreators
)(Project1);