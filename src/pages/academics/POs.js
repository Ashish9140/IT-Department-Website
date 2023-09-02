import {
    useNavigate
} from "react-router-dom";
const POs = () => {
    const navigate = useNavigate();
    return (
        <div className="vismis-wrapper-container-1 container">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="vismis-wrapper-container-2">
                <p className="vismis-Heading color-heading-pos">Program Outcomes</p><br />
                {/* <hr style="border: 2px solid #B2BABB; height: 0px; width: 650px;" size="1" /> */}
                <table border="0" style={{ width: "90%", margin: "0 auto" }} >
                    <tbody>
                        <tr className="tr-content">
                            <td><span ><strong>PO1</strong></span></td>
                            <td><span   ><strong>Engineering Knowledge</strong></span></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span  >Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of  complex engineering problems.</span></td>
                        </tr><br />
                        <tr className="tr-content">
                            <td><span      ><strong>PO2</strong></span></td>
                            <td><span   ><strong>Problem Analysis</strong></span></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Identify, formulate, review research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.</span></td>
                        </tr><br />
                        <tr className="tr-content">
                            <td><span ><strong><span     >PO3</span></strong></span></td>
                            <td><span    ><strong><span >Design/Development of Solutions</span></strong></span></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</span></td>
                        </tr> <br />
                        <tr className="tr-content">
                            <td><span    ><strong><span     >PO4</span></strong></span></td>
                            <td><strong><span   >Conduct Investigations of Complex Problems</span></strong></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions for  complex problems.</span></td>
                        </tr> <br />
                        <tr className="tr-content">
                            <td><span ><span    ><strong>PO5</strong></span>:</span></td>
                            <td><strong><span   >Modern Tool Usage</span></strong></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.</span></td>
                        </tr><br />
                        <tr className="tr-content">
                            <td><span    ><strong><span     >PO6</span></strong></span></td>
                            <td><strong><span   >The Engineer and Society</span></strong></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</span></td>
                        </tr> <br />
                        <tr className="tr-content">
                            <td><span    ><strong><span     >PO7</span></strong></span></td>
                            <td><strong><span   >Environment and sustainability</span></strong></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</span></td>
                        </tr> <br />
                        <tr className="tr-content">
                            <td><span    ><strong><span     >PO8</span></strong></span></td>
                            <td><strong><span   >Ethics</span></strong></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</span></td>
                        </tr> <br />
                        <tr className="tr-content">
                            <td><span    ><strong><span     >PO9 </span></strong></span></td>
                            <td><strong><span   >Individual and Team Work</span></strong></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</span></td>
                        </tr><br />
                        <tr className="tr-content">
                            <td><span    ><strong><span     >PO10 </span></strong></span></td>
                            <td><strong><span   >&nbsp;Communication</span></strong></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</span></td>
                        </tr> <br />
                        <tr className="tr-content">
                            <td><span    ><strong><span     >PO11 </span></strong></span></td>
                            <td><strong><span   > &nbsp;Project Management and Finance</span></strong></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</span></td>
                        </tr> <br />
                        <tr className="tr-content">
                            <td><span   ><strong><span >PO12</span></strong></span></td>
                            <td><strong><span >&nbsp;Life-long Learning</span></strong></td>
                        </tr>
                        <tr className="tr-content">
                            <td>&nbsp;</td>
                            <td style={{ paddingRight: "6px" }}><span   >Recognize the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default POs