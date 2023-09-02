import {
    Link, useNavigate
} from "react-router-dom";

const Lab = () => {
    const navigate = useNavigate();
    return (
        <div className="std container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="container-fluid container2 research-labs">

                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", borderBottom: "1px dotted gray", color: "rgb(4, 30, 102)" }}>Labs</h2>
                <ul>
                    <li><Link to="/labs/lab1"><span className="hover-1">Architecture and Distributed Systems</span></Link></li>
                    <li><a><span className="hover-1">Artificial Intelligence and Machine Learning</span></a></li>
                    <li><a><span className="hover-1">Computer Vision and Image Processing</span></a></li>
                    <li><a><span className="hover-1">Data Mining and Analytics</span></a></li>
                    <li><a><span className="hover-1">Embedded IoT</span></a></li>
                    <li><a><span className="hover-1">Programming</span></a></li>
                    <li><a><span className="hover-1">Security</span></a></li>
                </ul>
            </div>
        </div >
    )
}

export default Lab