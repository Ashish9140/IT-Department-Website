import {
    Link,
    useNavigate
} from "react-router-dom";

const DegreeProgram = () => {
    const navigate = useNavigate();
    return (
        <div className="std container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "20px", borderBottom: "1px dotted gray" }}>Degree Program</h2>
                <ul>
                    <li style={{ marginTop: "5px" }}><Link to="/degree-program/btech-p"><span className="hover-1">B. Tech. Program</span></Link></li>
                    <li style={{ marginTop: "5px" }}><Link to='/degree-program/phd-p'><span className="hover-1">PhD Program</span></Link></li>
                </ul>
            </div >
        </div>

    )
}

export default DegreeProgram