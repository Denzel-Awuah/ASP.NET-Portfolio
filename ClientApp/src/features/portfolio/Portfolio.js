import React from 'react';


export default function Portfolio() {

    
  return (
  
      /* Start of Portfolio Subpage */
      <section data-id="portfolio" className="animated-section">
          <div className="section-content">
              <div className="page-title">
                  <h2>Portfolio</h2>
              </div>

              <div className="row">
                  <div className="col-xs-12 col-sm-12">
                      {/* <!-- Portfolio Content --> */}
                      <div className="portfolio-content">

                          <ul className="portfolio-filters">
                              <li className="active">
                                  <a href="#?" className="filter btn btn-sm btn-link" data-group="category_all">All</a>
                              </li>
                              <li>
                                  <a href="#?" className="filter btn btn-sm btn-link" data-group="category_detailed">React</a>
                              </li>
                              <li>
                                  <a href="#?" className="filter btn btn-sm btn-link" data-group="category_mockups">Angular</a>
                              </li>
                              <li>
                                  <a href="#?" className="filter btn btn-sm btn-link" data-group="category_soundcloud">Full Stack</a>
                              </li>
                              <li>
                                  <a href="#?" className="filter btn btn-sm btn-link" data-group="category_vimeo-videos">Object-Oriented</a>
                              </li>
                              <li>
                                  <a href="#?" className="filter btn btn-sm btn-link" data-group="category_youtube-videos">Clients?👀</a>
                              </li>
                          </ul>

                          {/* <!-- Portfolio Grid --> */}
                          <div className="portfolio-grid three-columns">


                            {/* --------------------- React Word Processor --------------------- */}

                          <figure className="item standard" data-groups='["category_all", "category_detailed", "category_soundcloud", "category_vimeo-videos"]'>
                                  <div className="portfolio-item-img">
                                      <img src="img/wordApp.jpg"  alt="Media Project 2" title="" />
                                      <a href="#reactapp"  className="nav-anim" data-animation="22"></a>
                                  </div>

                                  <i className="far fa-file-alt"></i>
                                  <h4 className="name"><a href="#reactapp"  className="nav-anim" data-animation="22"></a>React Word Processor</h4>
                                  <span className="category">React</span>
                              </figure>


                            {/* --------------------- Angular Statistics Site --------------------- */}

                              <figure className="item standard" data-groups='["category_all", "category_mockups", "category_soundcloud", "category_vimeo-videos"]'>
                                  <div className="portfolio-item-img">
                                      <img src="img/home1.jpg"  alt="Project 2" title="" />
                                      <a href="#angularSite"  className="nav-anim" data-animation="22"></a>
                                  </div>

                                  <i className="far fa-file-alt"></i>
                                  <h4 className="name"><a href="#angularSite"  className="nav-anim" data-animation="22"></a>Angular Statistics Web App</h4>
                                  <span className="category">Angular</span>
                              </figure>

                            {/* --------------------- Denzel Awuah Node Js Website --------------------- */}        

                              <figure className="item standard" data-groups='["category_all", "category_soundcloud"]'>
                                  <div className="portfolio-item-img">
                                      <img src="img/hackdenzel3.jpg"  alt="Media Project 2" title=""  />
                                      <a href="#denzelawuah-portfolio"  className="nav-anim" data-animation="22"></a>
                                  </div>

                                  <i className="far fa-file-alt"></i>
                                  <h4 className="name"><a href="#denzelawuah-portfolio"  className="nav-anim" data-animation="22"></a>Node.js Portfolio Website</h4>
                                  <span className="category">Full Stack</span>
                              </figure>

                            {/* --------------------- CRM Website --------------------- */}

                              <figure className="item standard" data-groups='["category_all", "category_soundcloud", "category_vimeo-videos"]'>
                                  <div className="portfolio-item-img">
                                      <img src="img/crm2.jpg"  alt="Media Project 2" title="" />
                                      <a href="#crm"  className="nav-anim" data-animation="22"></a>
                                  </div>

                                  <i className="far fa-file-alt"></i>
                                  <h4 className="name"><a href="#crm" className="nav-anim" data-animation="22"></a>CRM Website for Trent Community Research Center</h4>
                                  <span className="category">Full Stack</span>
                              </figure>
                       

                            {/* --------------------- Java Chatting Application--------------------- */}
                              <figure className="item standard" data-groups='["category_all", "category_vimeo-videos"]'>
                                  <div className="portfolio-item-img">
                                      <img src="img/chat3.jpg"  alt="Media Project 2" title="" />
                                      <a href="#java"  className="nav-anim" data-animation="22"></a>
                                  </div>

                                  <i className="far fa-file-alt"></i>
                                  <h4 className="name"><a href="#java" className="nav-anim" data-animation="22"></a>Chatting Program</h4>
                                  <span className="category">Object-Oriented</span>
                              </figure>
                          </div>
                      </div>
                      {/* <!-- End of Portfolio Content --> */}
                  </div>
              </div>
          </div>
      </section>
  /* End of Portfolio Subpage */
  
  );
}
