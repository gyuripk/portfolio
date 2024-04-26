import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="container">
      <div className="resume" style={{ marginTop: "60px" }}>
        <div className="work-experience">
          <h2>Work Experience</h2>
          <div className="job">
            <div className="job-title-and-date">
              <h5>Web Developer</h5>
              <span className="job-date">05/2021 - 09/2021</span>
            </div>
            <p>Stans, Seoul</p>
            <ul className="tasks">
              <li>Designed and established user-friendly websites</li>
              <li>Developed and managed SQL Server for database design</li>
              <li>
                Proactively communicated with the design team and project
                manager to ensure efficient and timely delivery
              </li>
              <li>
                Provided weekly recap of results and accomplishments to the
                management team
              </li>
            </ul>
          </div>
          <div className="job">
            <div className="job-title-and-date">
              <h5>Server</h5>
              <span className="job-date">09/2022 - 2023</span>
            </div>
            <p>PF sushi bar, Canada</p>
            <ul className="tasks">
              <li>Took incoming calls from guests looking for information</li>
              <li>
                Compiled nightly sales numbers and profits and accurately
                completed accounting tasks
              </li>
              <li>Managed orders and accompanying financial transactions</li>
              <li>
                Ensured optimal guest experience by seating guests, taking
                orders and handling service issues
              </li>
            </ul>
          </div>
          <div className="job">
            <div className="job-title-and-date">
              <h5>University Servitor(Tutor)</h5>
              <span className="job-date">05/2016 - 08/2016</span>
            </div>
            <p>Musung elementary school, Deajeon</p>
            <ul className="tasks">
              <li>
                Developed activities such as making 3D paper figures and clay
                craft for students’ creativity
              </li>
              <li>Instructed 3rd and 4th graders on society and mathematics</li>
              <li>
                Taught additional topics, including cultural diversity and
                conflict, sustaining ecosystems
              </li>
            </ul>
          </div>
          <div className="job">
            <div className="job-title-and-date">
              <h5>Sales Associate</h5>
              <span className="job-date">12/2014 - 03/2015</span>
            </div>
            <p>Hi-mart(House appliance store), Seoul</p>
            <ul className="tasks">
              <li>
                Increased sales of the product of which I was responsible by 18%
                during the quarter
              </li>
              <li>
                Persuaded customers to purchase company products by highlighting
                product benefits and key features
              </li>
              <li>
                Ensured that about 40 products were accessible, constantly
                available, and properly distributed
              </li>
              <li>
                Filled out the necessary paperwork and obtained customers'
                signatures to complete each sale
              </li>
            </ul>
          </div>
        </div>

        <aside className="sidebar">
          <div className="education">
            <h3>Education</h3>
            <h6>Master of Computer Science</h6>
            <h6>(Grade 6.87 / 7)</h6>
            <p>Queensland University of Technology</p>
            <p className="job-date">07/2023 - present</p>
            <h6>Web Developer Training Course</h6>
            <p>Deojoeun Academy</p>
            <p className="job-date">09/2020 - 05/2021</p>
            <h6>Bachelor of Tourism and Hotel</h6>
            <h6>(GPA 4.29 / 4.5)</h6>
            <p>PAICHAI University</p>
            <p className="job-date">02/2015 - 02/2020</p>
            <h6>Business Specialist Training Course</h6>
            <p>PAICHAI University</p>
            <p className="job-date">07/2019 - 12/2019</p>
          </div>

          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>Proactivity</li>
              <li>Consultive Sales</li>
              <li>Persuasion</li>
              <li>Adaptability</li>
              <li>Employee Relations</li>
              <li>Inquisitive </li>
              <li>Willingness to learn</li>
              <li>Always seeking improvement</li>
              <li>Time management</li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="resume" style={{ marginTop: "60px" }}>
        <div className="work-experience">
          <h3>Activities</h3>
          <div className="job">
            <div className="job-title-and-date">
              <h5>Jeong Dong Culture Night Festival</h5>
              <span className="job-date">05/2016, 10/2015</span>
            </div>
            <ul className="tasks">
              <li>
                Participated in the planning and organization of an experiential
                event
              </li>
              <li>
                Conducted a satisfaction survey on the events and facilities of
                the festival
              </li>
              <li>Ran statistics and analyzed the data against the survey</li>
            </ul>
          </div>
          <div className="job">
            <div className="job-title-and-date">
              <h5>The international Garden Tourism Conference</h5>
              <span className="job-date">01/2015</span>
            </div>
            <ul className="tasks">
              <li>
                Coordinated conference and meeting space and handled event
                planning issues
              </li>
              <li>
                Guided the participants and to register the participants for the
                meeting
              </li>
              <li>Guided the participants through the exhibition booth</li>
            </ul>
          </div>
          <div className="job">
            <div className="job-title-and-date">
              <h5>Youth Center For Cultural & Information</h5>
              <span className="job-date">09/2015</span>
            </div>
            <ul className="tasks">
              <li>
                Assisted to direct The 5th Dream Village Dream Festival Event
              </li>
              <li>Planned the events and organized schedule</li>
            </ul>
          </div>
          <div className="job">
            <div className="job-title-and-date">
              <h5>Forest Healing Cultural Association</h5>
              <span className="job-date">05/2015</span>
            </div>
            <ul className="tasks">
              <li>Guided for Ecological Experience Center Event</li>
              <li>
                Taught environmental purification and how to vegetable growing
                and harvesting
              </li>
              <li>Assisted to install the booths</li>
            </ul>
          </div>
          <h3>Awards</h3>
          <div className="job" style={{ paddingLeft: "20px" }}>
            <div className="job-title-and-date">
              <p>Grade achievement scholarship</p>
              <span className="job-date">09/2015 - 03/2018</span>
            </div>

            <div className="job-title-and-date">
              <p>Department scholarship </p>
              <span className="job-date">09/2015 - 03/2018</span>{" "}
            </div>

            <div className="job-title-and-date">
              <p>Global Backpack Travel Challenge </p>
              <span className="job-date">12/2015</span>{" "}
            </div>

            <div className="job-title-and-date">
              <p>Tourist Talents Development scholarship </p>
              <span className="job-date">09/2016 - 02/2017</span>{" "}
            </div>

            <div className="job-title-and-date">
              <p>PAICHAI Global Talents Development scholarship </p>
              <span className="job-date">03/2016 </span>{" "}
            </div>

            <div className="job-title-and-date">
              <p>Best Team Award in Book Club </p>
              <span className="job-date">06/2019</span>{" "}
            </div>

            <div className="job-title-and-date">
              <p>National scholarship 1 </p>
              <span className="job-date">03/2016 - 03/2017</span>
            </div>
            <div className="job-title-and-date">
              <p>National scholarship 2 </p>
              <span className="job-date">03/2015 - 09/2018</span>
            </div>
            <div className="job-title-and-date">
              <p>30th Anniversary Scholarship for PAICHAI School </p>
              <span className="job-date">03/2015</span>
            </div>
          </div>
        </div>
        <aside className="sidebar">
          <div className="skills">
            <h3>Certificates</h3>
            <ul>
              <li>Office Excel® 2013 Expert</li>
              <li>Office PowerPoint® 2013</li>
              <li>Office Word 2013</li>
              <li>Travel Operator</li>
              <li>CRS(Computerized Reservation System) </li>
              <li>Driver’s license</li>
            </ul>
          </div>

          <div className="skills">
            <h3>Languages</h3>
            <ul>
              <li>Korean : Native</li>
              <li>English : intermediate</li>
              <li>Chinese : intermediate</li>
            </ul>
          </div>
          <div className="skills">
            <h3>Interests</h3>
            <ul>
              <li>Surfing</li>
              <li>Reading about</li>
              <li>Museum and Art Galleries</li>
              <li>Bicycling</li>
              <li>Playing guitar</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
