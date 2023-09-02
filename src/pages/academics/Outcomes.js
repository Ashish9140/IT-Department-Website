import {
    Link, useNavigate
} from "react-router-dom";


const Outcomes = () => {
    const navigate = useNavigate();
    return (
        <div className="std container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "20px", borderBottom: "1px dotted gray" }}>Outcomes</h2>
                <ul>
                    <li style={{ marginTop: "5px" }}><Link to="/outcomes/POs"><span className="hover-1">POs</span></Link></li>
                    <li style={{ marginTop: "5px" }}><Link to='/outcomes/PEOs&PSOs'><span className="hover-1">PEOs & PSOs</span></Link></li>
                </ul>
            </div>
        </div >
    )
}

export default Outcomes