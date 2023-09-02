import {
    Link
} from "react-router-dom";

const About = () => {
    return (
        <div className="about-department">
            <div className="card about-box-shadow">
                <div className="card-body about-card-body">
                    <h5 className="card-title">About Our Department</h5>
                    <p className="card-text it-about-para">
                        The Department of Information Technology was established in 2007, offering four year
                        undergraduate programme (B.Tech) in Information Technology. This undergraduate programme is of 4
                        years duration with the first year spread over two semesters which is common to all the
                        branches. The intake capacity of the department was 40 in 2007 and then subsequently increased
                        to 55 in 2009. The Department offers a broad curriculum including: Database Management, Software
                        Engineering, Management of Information Systems, Data mining, Computer Graphics, Advanced
                        Internet Technology, Computer Networks, Operating System, Data Structures and Algorithms as the
                        main courses and other courses in collaboration with the other departments of the institute at
                        the undergraduate level.

                        The Department of Information Technology embodies the Institute's tradition of excellence as a
                        world-class leader in IT education and research. IT sector is in a period of bloom in terms of
                        growth and opportunity. In the current ever evolving industrial scenario contents delivered to
                        the students are regularly updated by the faculty members who have themselves are well
                        acquainted with path breaking research and innovations in the present technology-oriented world.

                        In addition to academic courses, the department also has IT research programmes supported
                        through government funding and industry sponsorship. Faculty research helps expand the current
                        and future use of new and existing technologies.
                    </p>
                </div>
            </div>
            <div className="card about-crm">
                <div className="about-main">
                    <div className="main-card">
                        <h5>Recent Talks</h5>
                        <marquee behavior="scroll" direction="up" scrollamount="2">
                            <ul>
                                <li> A 10 days Training Program on “Big Data Analytics”</li>
                                <li>The Semicolon Coding Club</li>
                                <li>Techvaganza, The Annual Techfest</li>
                                <li>Spoken Tutorials</li>
                                <li>Workshop on "Data Analytics of Cloud based IoT"</li>
                            </ul>
                        </marquee>
                    </div>
                    <div className="main-card">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a className="hover-1" href="/syllabus/time-table.pdf" target="_blank">Time Table</a> <img src="/img/flash-new-icon.gif" alt="gif" style={{ width: "25px", height: "10px" }} /> </li>
                            {/* <li><Link className="hover-1" to="/student">Student</Link></li> */}
                            <li><Link className="hover-1" to="/course-syllabus">Courses Material/Syllabus</Link></li>
                            <li><Link className="hover-1" to="/e-governance">E-Governance Links</Link></li>
                            <li><a className="hover-1" href="/syllabus/Course_offered.pdf" target="_blank">Courses Offered/structure</a></li>
                            <li><a className="hover-1" href="/syllabus/electives_latest.pdf" target="_blank">Electives</a></li>
                            <li><a className="hover-1" href="/">Placement Details</a></li>
                        </ul>
                    </div>
                    <div className="main-card">
                        <h5>Announcements</h5>
                        <ul>
                            <li>Follow the "Spring 2022" Tab for the courses offered by our Department in the current
                                semester.</li>
                        </ul>
                    </div>
                    <div className="main-card">
                        <h5>Research Areas</h5>
                        <ul>
                            <li>Artificial Intelligence and Machine learning</li>
                            <li>Architecture and embedded systems</li>
                            <li>Cloud Computing and BigData</li>
                            <li>Distributed Systems and Parallel Programming</li>
                            <li>Wireless sensor networks</li>
                            <li>Data Analysis</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About