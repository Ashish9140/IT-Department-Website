import { useNavigate } from "react-router-dom";

const BtechProgram = () => {

    const navigate = useNavigate();

    return (
        <div className="btdeg-wrapper-container-1 container">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="btdeg-wrapper-container-2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "20px", borderBottom: "1px dotted gray" }}>B-Tech Program</h2>
                <p className="btdeg-Heading-motto">"Leading Technology Leveraging Technology"</p>
                <br />
                <div className="accordion btdeg-accordion-bd" id="accordionPanelsStayOpenExample">
                    <button className="accordion-button btdeg-accordian-active btdeg-accordion-bd" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Program
                    </button>

                    <div className="accordion-item btdeg-accordion-bd">
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show btdeg-accordion-bd" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body btdeg-accordion-bd btdeg-font-style">
                                The Department of<strong className="btdeg-strong"> Information Technology </strong> in <strong className="btdeg-strong">NIT Srinagar</strong> was established in 2007, offering four year undergraduate programme (B.Tech) in Information Technology. This undergraduate programme is of 4 years duration with the first year spread over two semesters which is common to all the branches. The intake capacity of the department was 40 in 2007 and then subsequently increased to 90 in 2020. The Department offers a broad curriculum including: Database Management, Software Engineering, Management of Information Systems, Data mining, Computer Graphics, Advanced Internet Technology, Computer Networks, Operating System, Data Structures and Algorithms as the main courses and other courses in collaboration with the other departments of the institute at the undergraduate level. <br /> <br />

                                The Department of Information Technology embodies the Institute's tradition of excellence as a world-class leader in IT education and research. IT sector is in a period of bloom in terms of growth and opportunity. In the current ever evolving industrial scenario contents delivered to the students are regularly updated by the faculty members who have themselves are well acquainted with path breaking research and innovations in the present technology-oriented world. <br /> <br />

                                In addition to academic courses, the department also has IT research programmes supported through government funding and industry sponsorship. Faculty research helps expand the current and future use of new and existing technologies.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item btdeg-accordion-bd">
                        <button className="accordion-button collapsed btdeg-accordion-bd btdeg-curr-width" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Curriculum
                        </button>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse btdeg-btdeg-accordion-bd" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body btdeg-btdeg-accordion-bd btdeg-font-style">
                                <h2 align="center" className='btdeg-heading-overall-credit'><strong><a name="overall"></a>The overall credit structure </strong></h2>
                                <div align="center" btdeg-overall-credit-table>
                                    <table border="1" cellspacing="0" cellpadding="20">
                                        <tbody id='btdeg-overall-credit-table-tbody'>
                                            <tr id='btdeg-overall-credit-table-uc-ue'>
                                                <td colspan="2" align="center"><strong>Undergraduate Core (UC) </strong></td>
                                                <td colspan="2" align="center"><strong>Undergraduate Elective (UE) </strong></td>
                                            </tr>
                                            <tr>
                                                <td align="center"><em>Category </em></td>
                                                <td align="center"><em>Credits </em></td>
                                                <td align="center"><em>Category </em></td>
                                                <td align="center"><em>Credits </em></td>
                                            </tr>
                                            <tr>
                                                <td align="center">Departmental Core (DC)</td>
                                                <td align="center">66</td>
                                                <td align="center">Departmental Electives (DE)</td>
                                                <td align="center">24</td>
                                            </tr>
                                            <tr>
                                                <td align="center">Basic Sciences (BS)</td>
                                                <td align="center">24</td>
                                                <td align="center">Humanities &amp; Soc. Sciences (HM)</td>
                                                <td align="center">14</td>
                                            </tr>
                                            <tr>
                                                <td align="center">Engg. Arts &amp; Sciences (EAS)</td>
                                                <td align="center">20</td>
                                                <td align="center">Open Category Electives (OC)</td>
                                                <td align="center">31</td>
                                            </tr>
                                            <tr>
                                                <td align="center">Humanities &amp; Social Sciences</td>
                                                <td align="center">1</td>
                                                <td align="center"> </td>
                                                <td align="center"> </td>
                                            </tr>
                                            <tr>
                                                <td align="center">TOTAL</td>
                                                <td align="center">111</td>
                                                <td align="center">TOTAL</td>
                                                <td align="center">69</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* dusra */}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BtechProgram