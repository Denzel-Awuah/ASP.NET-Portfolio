import React from 'react';


export default function Resume() {

  return (
    <section data-id="resume" className="animated-section">
    <div className="section-content">
      <div className="page-title">
        <h2>Resume</h2>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-7">

          <div className="block-title">
            <h3>Education</h3>
          </div>
          
          <div className="timeline timeline-second-style clearfix">
            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">2020</h5>
                <span className="item-company">Trent University</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Computer Science</h4>
                <p>- Honors Bachelors of Science Degree (B.Sc)</p>
                <p>- Speicalization in Software Engineering</p>
              </div>
            </div>

            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">2016</h5>
                <span className="item-company">St. Marguerite d'Youville</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Honor Roll Graduate</h4>
                <p>- Secondary School Diploma</p>
                <p>- Focus in Computer Science</p>
              </div>
            </div>
          </div>

          <div className="white-space-50"></div>

          <div className="block-title">
            <h3>Experience</h3>
          </div>

          <div className="timeline timeline-second-style clearfix">
            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">April 2021 - Current</h5>
                <span className="item-company">Invest Ottawa</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Web Developer</h4>
                <p>Praesent</p>
              </div>
            </div>

            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">Jan - Mar 2021</h5>
                <span className="item-company">Digital Main Street</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Web Developer</h4>
                <p>Develop and design websites/blogs for small businesses to increase their digital online presence.</p>
              </div>
            </div>
            
            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">Sept 2019 - April 2020</h5>
                <span className="item-company">Trent University</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Software Engineering Project</h4>
                <p>Built a website for the client to manage the companies database.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Skills & Certificates */}
        <div className="col-xs-12 col-sm-5">
          {/* Design Skills */}
          <div className="block-title">
            <h3>Design <span>Skills</span></h3>
          </div>

          <div className="skills-info skills-second-style">
            {/* Skill 1 */}
            <div className="skill clearfix">
              <h4>Web Design</h4>
              <div className="skill-value">95%</div>
            </div>
            <div className="skill-container skill-1">
              <div className="skill-percentage"></div>
            </div>
            {/* End of Skill 1 */}
            
            {/* Skill 2 */}
            <div className="skill clearfix">
              <h4>Print Design</h4>
              <div className="skill-value">65%</div>
            </div>
            <div className="skill-container skill-2">
              <div className="skill-percentage"></div>
            </div>
            {/* End of Skill 2 */}
            
            {/* Skill 3 */}
            <div className="skill clearfix">
              <h4>Logo Design</h4>
              <div className="skill-value">80%</div>
            </div>
            <div className="skill-container skill-3">
              <div className="skill-percentage"></div>
            </div>
            {/* End of Skill 3 */}
            
            {/* Skill 4 */}
            <div className="skill clearfix">
              <h4>Graphic Design</h4>
              <div className="skill-value">90%</div>
            </div>
            <div className="skill-container skill-4">
              <div className="skill-percentage"></div>
            </div>
            {/* End of Skill 4 */}

          </div>
          {/* End of Design Skills */}

          <div className="white-space-10"></div>

          {/* Coding Skills */}
          <div className="block-title">
            <h3>Coding <span>Skills</span></h3>
          </div>

          <div className="skills-info skills-second-style">
            {/* Skill 5 */}
            <div className="skill clearfix">
              <h4>JavaScript</h4>
              <div className="skill-value">95%</div>
            </div>
            <div className="skill-container skill-5">
              <div className="skill-percentage"></div>
            </div>
            {/* End of Skill 5 */}

            {/* Skill 6 */}
            <div className="skill clearfix">
              <h4>PHP</h4>
              <div className="skill-value">85%</div>
            </div>
            <div className="skill-container skill-6">
              <div className="skill-percentage"></div>
            </div>
            {/* End of Skill 6 */}
            
            {/* Skill 7 */}
            <div className="skill clearfix">
              <h4>HTML/CSS</h4>
              <div className="skill-value">100%</div>
            </div>
            <div className="skill-container skill-7">
              <div className="skill-percentage"></div>
            </div>
            {/* End of Skill 7 */}
            
            {/* Skill 8 */}
            <div className="skill clearfix">
              <h4>Smarty/Twig</h4>
              <div className="skill-value">75%</div>
            </div>
            <div className="skill-container skill-8">
              <div className="skill-percentage"></div>
            </div>
            {/* End of Skill 8 */}

            {/* Skill 9 */}
            <div className="skill clearfix">
              <h4>Perl</h4>
              <div className="skill-value">90%</div>
            </div>
            <div className="skill-container skill-9">
              <div className="skill-percentage"></div>
            </div>
            {/* End of Skill 9 */}
          </div>
          {/* End of Coding Skills */}

          <div className="white-space-10"></div>

          {/* Knowledges */}
          <div className="block-title">
            <h3>Other Skills</h3>
          </div>

          <ul className="knowledges">
            <li>Marketing</li>
            <li>Print</li>
            <li>Digital Design</li>
            <li>Social Media</li>
            <li>Time Management</li>
            <li>Communication</li>
            <li>Problem-Solving</li>
            <li>Social Networking</li>
            <li>Flexibility</li>
          </ul>
          {/* End of Knowledges */}
        </div>
        {/* End of Skills & Certificates */}
      </div>

      <div className="white-space-50"></div>

      {/* Certificates */}
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Certificates</h3>
          </div>
        </div>
      </div>
      
      <div className="row">
        {/* Certificate 1 */}
        <div className="col-xs-12 col-sm-6">
          <div className="certificate-item clearfix">
            <div className="certi-logo">
              <img src="img/clients/client-1.png" alt="logo" />
            </div>
            
            <div className="certi-content">
              <div className="certi-title">
                <h4>Psyhology of Intertnation Design</h4>
              </div>
              <div className="certi-id">
                <span>Membership ID: XXXX</span>
              </div>
              <div className="certi-date">
                <span>19 April 2018</span>
              </div>
              <div className="certi-company">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        {/* End of Certificate 1 */}

        {/* Certificate 2 */}
        <div className="col-xs-12 col-sm-6">
          <div className="certificate-item clearfix">
            <div className="certi-logo">
              <img src="img/clients/client-1.png" alt="logo" />
            </div>
            
            <div className="certi-content">
              <div className="certi-title">
                <h4>Psyhology of Intertnation Design</h4>
              </div>
              <div className="certi-id">
                <span>Membership ID: XXXX</span>
              </div>
              <div className="certi-date">
                <span>19 April 2018</span>
              </div>
              <div className="certi-company">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        {/* End of Certificate 2 */}

      </div>
      {/* End of Certificates */}
    </div>
  </section>
  /* End of Resume Subpage */
  
  );
}
