import { useNavigate } from "react-router-dom";

const Egovernance = () => {

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="container1">
                <div className="history">
                    <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                    <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
                </div>
                <div className="papers-wrapper-container-2">
                    <p className="papers-Heading e-gov-heading" style={{ border: "none", borderRadius: "50%" }}>College E-Governance</p>
                    <br /><br />
                    <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", borderBottom: "1px dotted gray", fontFamily: "sans-serif" }}>E-Governance Portals:</h2>
                    <ul>
                        <li className="e-governance-portal" ><a class="external-link" href="https://result.nitsri.ac.in/" target={"_blank"}><span className="hover-1">Results</span></a></li>
                        <li className="e-governance-portal" ><a class="external-link" href="https://recruitment.nitsri.ac.in/" target={"_blank"}><span className="hover-1" >Recruitment</span></a></li>
                        <li className="e-governance-portal"><a class="external-link" href="https://erp.nitsri.ac.in/" target={"_blank"}><span className="hover-1">ERP Login</span></a></li>
                        <li className="e-governance-portal" ><a class="external-link" href="https://admission.nitsri.ac.in/" target={"_blank"}><span className="hover-1">Admissions</span></a></li>
                        <li className="e-governance-portal" ><a class="external-link" href="https://opac.nitsri.ac.in/" target={"_blank"}><span className="hover-1">Library</span></a></li>
                        <li className="e-governance-portal" ><a class="external-link" href="http://nitsri.asia/" target={"_blank"}><span className="hover-1">Help Desk</span></a></li>
                        <li className="e-governance-portal" ><a href="/syllabus/SCHOLARSHIP_STIPEND_MODULE_presentation_pdf.pdf" target={"_blank"} class="external-link"><span className="hover-1">Scholarship module steps</span></a></li>
                    </ul>

                    <p style={{ fontFamily: "sans-serif" }} ><strong>Contact Details:<br /></strong><strong>For any query regarding ERP,please write to egovernance@nitsri.ac.in email address.</strong></p>
                    <div style={{ fontFamily: "sans-serif" }} className="gmail_default"><strong>Email id:&nbsp;<a href="mailto:egovernance@nitsri.ac.in" target="_blank">egovernance@nitsri.ac.in</a></strong></div>
                </div>
            </div>
        </div>
    )
}

export default Egovernance