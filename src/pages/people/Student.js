import {
    Link,
    useNavigate
} from "react-router-dom";

const Student = () => {

    const navigate = useNavigate();

    return (
        <div className="std container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className=" container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", borderBottom: "1px dotted gray" }}>IT Students</h2>
                <ul>
                    <li style={{ marginTop: "5px" }}><Link to="/student/batch_2022"><span className="hover-1">2022 Batch</span></Link></li>
                    <li style={{ marginTop: "5px" }}><Link to="/student/batch_2021"><span className="hover-1">2021 Batch</span></Link></li>
                    <li style={{ marginTop: "5px" }}><Link to="/student/batch_2020"><span className="hover-1">2020 Batch</span></Link></li>
                    <li style={{ marginTop: "5px" }}><Link to="/student/batch_2019"><span className="hover-1">2019 Batch</span></Link></li>
                    <li style={{ marginTop: "5px" }}><Link to="/student/batch_2018"><span className="hover-1">2018 Batch</span></Link></li>
                    <li style={{ marginTop: "5px" }}><Link to="/student/batch_2017"><span className="hover-1">2017 Batch</span></Link></li>
                    <li style={{ marginTop: "5px" }}><Link to="/student/batch_2016"><span className="hover-1">2016 Batch</span></Link></li>
                    <li style={{ marginTop: "5px" }}><Link to="/student/batch_2015"><span className="hover-1">2015 Batch</span></Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Student