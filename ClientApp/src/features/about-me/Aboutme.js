import React from 'react';








export default function Aboutme() {

  return (

       /* <!-- About Me Subpage --> */
       <section data-id="about-me" className="animated-section">
                <div className="section-content">
                  <div className="page-title">
                    <h2>About <span>Me</span></h2>
                  </div>

                  {/* <!-- Personal Information --> */}
                  <div className="row">
                    <div className="col-xs-12 col-sm-7">
                      <p>My name is Denzel Awuah and I am a Software Developer
                         that specializes in the design, development, implementation, and testing of web applications.
                          I graduated from Trent University in June 2020 with a Honours Bacholars of Science Degree in
                           Computer Science with a Specialization in Software Engineering.</p>
                    </div>

                    <div className="col-xs-12 col-sm-5">
                      <div className="info-list">
                        <ul>
                          <li>
                            <span className="title">Age:</span>
                            <span className="value">22</span>
                          </li>

                          <li>
                            <span className="title">Residence:</span>
                            <span className="value">Canada</span>
                          </li>

                          <li>
                            <span className="title">Current Role:</span>
                            <span className="value">Web Developer</span>
                          </li>

                          <li>
                            <span className="title">E-mail:</span>
                            <span className="value">denzelbawuah@gmail.com</span>
                          </li>

                          <li>
                            <span className="title">Phone:</span>
                            <span className="value">647-470-3896</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Personal Information --> */}

                  <div className="white-space-50"></div>

                  {/* <!-- Services --> */}
                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="block-title">
                        <h3>What <span>I Do</span></h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <div className="col-inner">
                        <div className="info-list-w-icon">
                          <div className="info-block-w-icon">
                            <div className="ci-icon">
                              <i className="lnr lnr-laptop-phone"></i>
                            </div>
                            <div className="ci-text">
                              <h4>Web Development</h4>
                              <p>I've been designing web applications for over 4 years now. My areas of expertise
                                 include React JS, Angular Js, Javascript, ASP.NET, and Object-oriented programming.</p>
                            </div>
                          </div>
                          <div className="info-block-w-icon">
                            <div className="ci-icon">
                              <i className="lnr lnr-store"></i>
                            </div><div className="ci-text">
                              <h4>Ecommerce</h4>
                              <p>I also have experience with Ecommerce platforms and CMS's like Shopify, WordPress, Joomla, SquareSpace, Wix, Weebly, Kajabi, and VistaPrint.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                      <div className="col-inner">
                        <div className="info-list-w-icon">
                          <div className="info-block-w-icon">
                            <div className="ci-icon">
                              <i className="lnr lnr-pencil"></i>
                            </div>
                            <div className="ci-text">
                              <h4>Agile</h4>
                              <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                            </div>
                          </div>
                          <div className="info-block-w-icon">
                            <div className="ci-icon">
                              <i className="lnr lnr-flag"></i>
                            </div><div className="ci-text">
                              <h4>Management</h4>
                              <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Services --> */}

                  <div className="white-space-30"></div>

                  {/* <!-- Testimonials --> */}
                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="block-title">
                        <h3>Testimonials</h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="testimonials owl-carousel">
                        {/* <!-- Testimonial 1 --> */}
                        <div className="testimonial">
                          <div className="img">
                            <img src="img/testimonials/testimonial-1.jpg" alt="Alex Smith"/>
                          </div>
                          <div className="text">
                            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                          </div>

                          <div className="author-info">
                            <h4 className="author">Julia Hickman</h4>
                            <h5 className="company">Omni Source</h5>
                            <div className="icon">
                              <i className="fas fa-quote-right"></i>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End of Testimonial 1 --> */}

                        {/* <!-- Testimonial 2 --> */}
                        <div className="testimonial">
                          <div className="img">
                            <img src="img/testimonials/testimonial-2.jpg" alt="Alex Smith"/>
                          </div>
                          <div className="text">
                            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                          </div>

                          <div className="author-info">
                            <h4 className="author">Robert Watkins</h4>
                            <h5 className="company">Endicott Shoes</h5>
                            <div className="icon">
                              <i className="fas fa-quote-right"></i>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End of Testimonial 2 --> */}

                        {/* <!-- Testimonial 3 --> */}
                        <div className="testimonial">
                          <div className="img">
                            <img src="img/testimonials/testimonial-3.jpg" alt="Alex Smith"/>
                          </div>
                          <div className="text">
                            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                          </div>

                          <div className="author-info">
                            <h4 className="author">Kristin Carroll</h4>
                            <h5 className="company">Helping Hand</h5>
                            <div className="icon">
                              <i className="fas fa-quote-right"></i>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End of Testimonial 3 --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Testimonials --> */}

                  <div className="white-space-50"></div>

                  {/* <!-- Clients --> */}
                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="block-title">
                        <h3>Cilents</h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="clients owl-carousel">
                        
                        <div className="client-block">
                          <a href="#?" target="_blank" title="Logo">
                            <img src="img/clients/client-1.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#?" target="_blank" title="Logo">
                            <img src="img/clients/client-2.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#?" target="_blank" title="Logo">
                            <img src="img/clients/client-3.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#?" target="_blank" title="Logo">
                            <img src="img/clients/client-4.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#?" target="_blank" title="Logo">
                            <img src="img/clients/client-5.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#?" target="_blank" title="Logo">
                            <img src="img/clients/client-6.png" alt="Logo"/>
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#?" target="_blank" title="Logo">
                            <img src="img/clients/client-7.png" alt="Logo"/>
                          </a>
                        </div>
  
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Clients --> */}

                  <div className="white-space-50"></div>

                  {/* <!-- Pricing --> */}
                  {/* <div className="row">
                    <div className="col-xs-12 col-sm-12">

                      <div className="block-title">
                        <h3>Pricing</h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                      <div className="fw-pricing clearfix row">
                        
                        <div className="fw-package-wrap col-md-6 ">
                          <div className="fw-package">
                            <div className="fw-heading-row">
                              <span>Silver</span>
                            </div>
                            
                            <div className="fw-pricing-row">
                              <span>$64</span>
                              <small>per month</small>
                            </div>
                            
                            <div className="fw-button-row">
                              <a href="#?" target="_self" className="btn btn-secondary">Free Trial</a>
                            </div>

                            <div className="fw-default-row">Lorem ipsum dolor</div>
                            <div className="fw-default-row">Pellentesque scelerisque</div>
                            <div className="fw-default-row">Morbi eu sagittis</div>
                          </div>
                        </div>
     
                        <div className="fw-package-wrap col-md-6 highlight-col ">
                          <div className="fw-package">
                            <div className="fw-heading-row">
                              <span>Gold</span>
                            </div>
                            
                            <div className="fw-pricing-row">
                              <span>$128</span>
                              <small>per month</small>
                            </div>

                            <div className="fw-button-row">
                              <a href="#?" target="_self" className="btn btn-primary">Free Trial</a>
                            </div>
                            
                            <div className="fw-default-row">Lorem ipsum dolor</div>
                            <div className="fw-default-row">Pellentesque scelerisque</div>
                            <div className="fw-default-row">Morbi eu sagittis</div>
                            <div className="fw-default-row">Donec non diam</div>
                            <div className="fw-default-row"></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div> */}
                  {/* <!-- End of Pricing --> */}

                  <div className="white-space-50"></div>

                  {/* <!-- Fun Facts --> */}
                  <div className="row">
                    <div className="col-xs-12 col-sm-12">

                      <div className="block-title">
                        <h3>Fun <span>Facts</span></h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">



                  <div className="col-xs-12 col-sm-4">
                      <div className="fun-fact gray-default">
                        <i className="lnr lnr-clock"></i>
                        <h4>Projects Completed</h4>
                        <span className="fun-fact-block-value">+25</span>
                        <span className="fun-fact-block-text"></span>
                      </div>
                    </div>

                    
                    <div className="col-xs-12 col-sm-4">
                      <div className="fun-fact gray-default">
                        <i className="lnr lnr-heart"></i>
                        <h4>Satisfied Clients</h4>
                        <span className="fun-fact-block-value">+20</span>
                        <span className="fun-fact-block-text"></span>
                      </div>
                    </div>


                    <div className="col-xs-12 col-sm-4 ">
                      <div className="fun-fact gray-default">
                        <i className="lnr lnr-star"></i>
                        <h4>Awards Won</h4>
                        <span className="fun-fact-block-value">3</span>
                        <span className="fun-fact-block-text"></span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Fun Facts --> */}

                </div>
              </section>
              /* <!-- End of About Me Subpage --> */


  );
}
