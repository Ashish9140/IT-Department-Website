import {
    useNavigate
} from "react-router-dom";
const PhdProgram = () => {
    const navigate = useNavigate();
    return (
        <div className="btdeg-wrapper-container-1 container">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="btdeg-wrapper-container-2">
                <p className="btdeg-Heading">PhD Program</p> <br />
                <div className="accordion btdeg-accordion-bd" id="accordionPanelsStayOpenExample">
                    <button className="accordion-button btdeg-accordian-active btdeg-accordion-bd" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Program
                    </button>

                    <div className="accordion-item btdeg-accordion-bd">
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show btdeg-accordion-bd" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body btdeg-accordion-bd btdeg-font-style">
                                The doctoral programme in Information Technology offers students the possibility of doing intensive research in an area of their choice. We have a vibrant research program consisting of about 60 PhD students, and it has been our constant endeavour to provide the best facilities and working environment to our research students. <br /><br />
                                <ul>
                                    <li>All full-time PhD students provided financial assistance. See below.</li>
                                    <li>Air-conditioned office space is provided to all PhD students, with a desktop PC. Research students have unrestricted access to all laboratories in the department.</li>
                                    <li>PhD students often collaborate with researchers within and outside the country. It is common, and regularly encouraged, for students to spend time at collaborating institutions in academia and industry.</li>
                                    <li>Our students regularly publish research results in leading international conferences and reputed journals.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <button className="accordion-button collapsed btdeg-accordion-bd btdeg-curr-width" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Admissions
                    </button>

                    <div className="accordion-item btdeg-accordion-bd">
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse btdeg-btdeg-accordion-bd" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body btdeg-btdeg-accordion-bd btdeg-font-style">
                                <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>Applying for PhD Admission</h4>
                                Admissions to the PhD program are held twice a year, in May and December. Applications can be submitted online at the NIT SRINAGAR Admissions web site, starting March and October respectively.
                                <h4 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>Eligibility</h4>
                                The candidate should have one of the following degrees:
                                <ul>
                                    <li>M. Tech./M.E. Degree in Computer Science or other Engineering disciplines.</li>
                                    <li>B.E./B.Tech./M.Sc. in Computer Science or other Engineering disciplines, or MCA with a valid GATE score in CS/IT/ECE.</li>
                                    <li>M.Sc. in Maths/Physics/Statistics with a valid GATE score in their subject.</li>
                                    <li>Our students regularly publish research results in leading international conferences and reputed journals.</li>
                                </ul>
                                <h4 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>Interviews</h4>
                                Following the application submission, candidates will be shortlisted for an interview. Shortlisting criteria for interview calls will be published on the Department web site. The interview will test your familiarity with basic concepts in Computer Scienceand Engineering and your ability to analyze and formulate a solution to a problem.
                            </div>
                        </div>
                    </div>

                    <button className="accordion-button collapsed btdeg-accordion-bd btdeg-curr-width2" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                        Financial Assistance and Accommodation
                    </button>

                    <div className="accordion-item  btdeg-accordion-bd">
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse btdeg-btdeg-accordion-bd" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body btdeg-accordion-bd btdeg-font-style">
                                All full-time PhD students receive some form of financial assistance during their stay on campus. <br />

                                Institute Assistantships (Rs. 28,000 per month for students with a M.Tech or equivalent degree, and Rs. 25,000 per month for students with a B. Tech. or equivalent degree) are available for PhD students. An additional top-up of Rs. 10,000 per month is also possible based on contribution to ongoing research projects. <br />

                                Attractive industry/govt. fellowships are also available to PhD students. In recent semesters, PhD fellowships have been offered to our students by companies/agencies such as TCS, DEITY, PM Fellowship, Google, IBM, Lucent, and Microsoft. <br />

                                Various other schemes are also available for covering expenses such as those related to conference travel, books, and other contingencies. <br />

                                Full-time PhD students are provided accommodation on campus. Married students are provided an apartment (subject to availability) while unmarried students get hostel accommodation. Students and their dependents also have free access to the medical and sporting facilities on campus. <br />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PhdProgram