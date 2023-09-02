import {
    useNavigate
} from "react-router-dom";

const CourseList = () => {
    const navigate = useNavigate();
    return (
        <div className="courselist-wrapper-container-1 container">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="courselist-wrapper-container-2">

                <div className="item-page">
                    <h2 className="item-page-title">
                        <p className="courselist-Heading" id="admissiontitle">Courses</p>
                    </h2>
                    <table>
                        <tbody>
                            <tr>
                                <td align="left" valign="top"></td>
                            </tr>
                        </tbody>
                    </table><br />
                    <table border="1" cellPadding="4" align="center">
                        <tbody>
                            <tr>
                                <th><b>Course Number</b></th>
                                <th><b>Title</b></th>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL100</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL100">Computer Programming</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITP100</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITP100">Computer Programming Lab</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT201</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT201">Data Structures</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT202</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT202">Signal and Systems</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT203</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT203">Software Engineering</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT204</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT204">Discrete Mathematics and Graph Theory</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>CST201</td>
                                <td><a className="courseLista"
                                    href="/courses/des#CST201">Object Oriented Programming</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>CSL203 </td>
                                <td><a className="courseLista"
                                    href="/courses/des#CSL203">Object Oriented Programming I Lab</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL205</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL205">Data Structures Lab</a></td>
                            </tr>


                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT250 </td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT250">Operating Systems</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT251</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT251">Database Management System</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ECT251</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ECT251">Digital Electronics & Logic Design</a></td>
                            </tr>

                            {/* <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ECL254</td>
                                <td><a className="courseLista"
                                    href="http://www.cse.iitd.ernet.in/cse/newcurriculum-contents/newcourses.html#*COL702(CSL630)">Digital Electronics & Logic Design Lab </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL252</td>
                                <td><a className="courseLista"
                                    href="http://www.cse.iitd.ernet.in/cse/newcurriculum-contents/newcourses.html#*COL703(CSL703)">Operating System Lab</a></td>
                            </tr> */}

                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL253</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL253">Database Management System Lab</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL254</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL254">Web Programming</a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT301</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT301">Design & Analysis of Algorithms </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT302</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT302">Microprocessor </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT303</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT303">Computer Organization & Architecture </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT304</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT304">Theory of Computation </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT305</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT305">Data Communication </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>MAT301</td>
                                <td><a className="courseLista"
                                    href="/courses/des#MAT301">Introduction to Probability and Statistics </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL306</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL306">Design & Analysis of Algorithms Lab </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL307</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL307">Microprocessor Lab </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT350</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT350">Computer Networks </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT351</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT351">Artificial Intelligence </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT352</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT352">Computer Graphics </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT353</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT353">Big Data </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT354</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT354">Object-Oriented Programming II with
                                    Java
                                </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL355</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL355">Computer Networks Lab </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL356</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL356"> Artificial Intelligence Lab </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL357</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL357">Computer Graphics Lab </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL358</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL358">Object-Oriented Programming II with
                                    Java Lab
                                </a></td>
                            </tr>
                            {/* <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITI359</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT201">Tour & Training </a></td>
                            </tr> */}
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT401</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT401">Wireless & Mobile Communication </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT402</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT402">Information Security  </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT403</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT403">Image Processing </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT404</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITT404">Cloud Computing </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL405</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL405">Information Security Lab </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL406</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL406">Image Processing Lab </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITL407</td>
                                <td><a className="courseLista"
                                    href="/courses/des#ITL407">Cloud Computing Lab </a></td>
                            </tr>
                            {/* <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITP408</td>
                                <td><a className="courseLista"
                                    href="http://www.cse.iitd.ernet.in/cse/newcurriculum-contents/newcourses.html#COL705(CSL705)">Pre project </a></td>
                            </tr>
                            <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITS409</td>
                                <td><a className="courseLista"
                                    href="http://www.cse.iitd.ernet.in/cse/newcurriculum-contents/newcourses.html#COL718(CSL718)">Seminar </a></td>
                            </tr> */}
                            {/* <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITT450</td>
                                <td><a className="courseLista"
                                    href="http://www.cse.iitd.ernet.in/cse/newcurriculum-contents/newcourses.html#COL719(CSL719)">Machine Learning </a></td>
                            </tr> */}
                            {/* <tr className="" border="2" style={{ height: "30px" }}>
                                <td>ITP451</td>
                                <td><a className="courseLista"
                                    href="http://www.cse.iitd.ernet.in/cse/newcurriculum-contents/newcourses.html#COL720">Project </a></td>
                            </tr> */}
                            {/* <tr className="" border="2" style={{ height: "30px" }}>
                                <td>HST450</td>
                                <td><a className="courseLista"
                                    href="http://www.cse.iitd.ernet.in/cse/newcurriculum-contents/newcourses.html#COL722">Economics & Business Management </a></td>
                            </tr> */}

                        </tbody>
                    </table>

                    &nbsp;



                </div>
            </div>
        </div>
    )

}

export default CourseList