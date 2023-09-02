import {
    useNavigate
} from "react-router-dom";

const DepartmentLetter = () => {
    const navigate = useNavigate();
    return (
        <div className="font-responsive-container">
            <div className="newsltr-wrapper-container-1 container">
                <div className="history">
                    <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                    <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
                </div>
                <div className="newsltr-wrapper-container-2">
                    <p className="newsltr-Heading">Alumni Newsletter August 2021</p>
                    <h2 className="newsltr-words-hod-heading " dir="ltr">
                        <span className="newsltr-heading-brown-font-style">Message from the Head of the Department</span>
                    </h2><br />
                    <div className="newsltr-words-hod-content">
                        <p>Our Department was established in 2007 offering four year undergraduate programme, (B.Tech) in
                            Information Technology. Over the years, we have grown our expertise and competence in the core
                            Information Technology curriculum and research holding the Institute's tradition of excellence
                            as a world-class leader in IT education and research. </p>

                        <p>Technology changes rapidly, especially in the field of computing, whereas the science, if it
                            changes at all, does so much more gradually. Our understanding is that persons who are clear and
                            thorough about the fundamentals can adapt to rapid changes in technology relatively easily. We
                            want the education imparted to our students to be the basis of a life time of learning. Our
                            constant pursuit is to help our students achive expertise and competence in the core Information
                            Technology curriculum and research.</p>

                        <p> One bright spot is that, notwithstanding the pandemic, we have been able to continue to expand
                            and recruit more faculty members of outstanding quality and likewise with students. We were also
                            granted a respectable sum of money for equipment from the Institute under the IoE scheme.</p>
                        <p>Our Department has produced hundreds of professionals and has established a name for itself in
                            different fields. Our students have consistently excelled in the highly competitive industrial
                            environments. I attribute this success to the winning combination of a dedicated faculty that
                            works hard at imparting quality education, a well-planned syllabus and last but not least, our
                            students.</p>
                        <p>
                            We are thankful to our alumni for their continued support which has been a key enabling factor
                            in our growth and achievements. Please stay in touch and write to us with any new ideas for the
                            department to excel further in its mission. </p><br />
                        <p>Warm regards, and wishing you all the best.</p><br />        <p style={{ fontWeight: "bold" }}>Dr. Shabir Ahmad Sofi</p> <br />
                        <div className="department-video">
                            <video controls>
                                <source src="dep-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    {/* <br /><br /> */}
                    {/* <div className="alumini-intiatives">
                        <h2 className="newsltr-alumini-init-heading" dir="ltr"><span
                            className="newsltr-heading-brown-font-style">Alumini Initiatives</span></h2>
                        <br />
                        <div className="newsltr-alumini-initiative-content-img">
                            <div className="row m-1">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img src="/img/MohitArorn.jpg" className="img-thumbnail" alt="img-alumini" />
                                </div>
                                <div className="col-9 d-flex justify-content-center align-items-center">
                                    <p> Mohit Aron (BTech CSE 1995) has donated a sum of USD 1 Million to the IITD Endowment
                                        Fund. Mohit has expressed the desire that his donation be used in support of the
                                        Department of Computer Science and Engineering. The support from the Mohit Aron
                                        Endowment will be used to facilitate and support initiatives that are directed
                                        towards the Department’s twin goals of excelling in teaching and research, and in
                                        projecting the Department as a leading Computer Science and Engineering department
                                        in the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="newsltr-alumini-initiative-content-img-2 ">
                            <div className="row m-1 d-flex flex-row-reverse">
                                <div className="col-3 d-flex justify-content-center align-items-center ">
                                    <img src="/img/Gaurav Bhatnagar.jpg" className="img-thumbnail" alt="img-alumini" />
                                </div>
                                <div className="col-9 d-flex justify-content-center align-items-center">
                                    <p> Alumnus Gaurav Bhatnagar (BTech 2001) has donated three New Faculty Fellowship
                                        grants
                                        entitled TBO New Faculty Fellowships to support the jumpstarting of research by new
                                        faculty joining the department. <br /><br /> Thank you, Gaurav!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="faculty-awards" style={{ marginRight: "15px" }}>
                        <h2 className="newsltr-alumini-init-heading" dir="ltr"><span
                            className="newsltr-heading-brown-font-style">Faculty Awards</span></h2>
                        <br />
                        <div className="newsltr-alumini-initiative-content-img-2 ">
                            <div className="row">
                                <div className="col-3 d-flex justify-content-center align-items-center ">
                                    <img className="img-thumbnail" src="/img/Prof. Aadi.jpg" alt="img-alumini" />
                                </div>
                                <div className="col-9 d-flex justify-content-center align-items-center">
                                    <p> Professor Aaditeshwar Seth and the Centre for Collective Development have been
                                        awarded a
                                        Google AI for Social Good grant of $30,000 to collaborate on Building AI-based
                                        Market
                                        Intelligence Systems for Farmer Collectives. The goal of the project is to support
                                        farmer
                                        cooperatives and producer organisations to compete effectively with large
                                        agricultural
                                        corporations. <br />
                                        Aaditeshwar was also recently conferred with the Varshney Award for contributions to
                                        systems
                                        science, application, and technology, by the Systems Society of India. <br /><br />
                                        Congratulations Aaditeshwar!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="faculty-awards" style={{ marginRight: "15px" }}>
                        <h2 className="newsltr-alumini-init-heading" dir="ltr"><span
                            className="newsltr-heading-brown-font-style">New Faculty Members</span></h2><br />
                        <div className="newsltr-alumini-initiative-content-img-2">

                            <div className="row">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img className="img-thumbnail" src="/img/Abhi.jpg" alt="img-alumini" />
                                </div>
                                <div className="col-9 d-flex justify-content-center align-items-center">
                                    <p> Professor Aaditeshwar Seth and the Centre for Collective Development have been
                                        awarded a
                                        Google AI for Social
                                        corporations. <br />
                                        Aaditeshwar was also recently conferred with the Varshney Award for contributions to
                                        systems
                                        science, application, and technology, by the Systems Society of India. <br /><br />
                                        Congratulations Aaditeshwar!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="faculty-awards" style={{ marginRight: "15px" }}>

                        <div className="newsltr-alumini-initiative-content-img">
                            <div className="row m-1 d-flex flex-row-reverse">
                                <div className="col-3 d-flex justify-content-center align-items-center ">
                                    <img src="/img/abhilash.png" className="img-thumbnail" alt="img-alumini" />
                                </div>
                                <div className="col-9 d-flex justify-content-center align-items-center">
                                    <p>Professor Aaditeshwar Seth and the Centre for Collective Development have been
                                        awarded a
                                        Google AI fy with large agricultural
                                        corporations. <br />
                                        Aaditeshwar was also recently conferred with the Varshney Award for contributions to
                                        systems
                                        science, application, and technology, by the Systems Society of India. <br /><br />
                                        Congratulations Aaditeshwar!
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="faculty-awards" style={{ marginRight: "15px" }}>
                        <div className="newsltr-alumini-initiative-content-img-2">
                            <div className="row m-1 d-flex">
                                <div className="col-3 d-flex justify-content-center  align-items-center ">
                                    <img src="/img/dummyf.png" className="img-thumbnail" alt="img-alumini" />
                                </div>
                                <div className="col-9 d-flex justify-content-start align-items-center">
                                    <p>Professor Aaditeshwar Seth and the Centre for Collective Development have been
                                        awarded a
                                        Google AI for Social
                                        Aaditeshwar was also recently conferred with the Varshney Award for contributions to
                                        systems
                                        science, application, and technology, by the Systems Society of India. <br /><br />
                                        Congratulations Aaditeshwar!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="newsltr-feedback">
                            <h3>Alumini Feedback Form</h3>
                            <p>We would like to hear from you! Please fill out <a href="/" target="_blank"
                                rel="noopener noreferrer">this survey</a> to give us your feedback.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DepartmentLetter