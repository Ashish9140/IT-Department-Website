import {
    useNavigate
} from "react-router-dom";

const Coursematerial = () => {
    const navigate = useNavigate();
    return (
        <div className="std container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", borderBottom: "1px dotted gray" }}>Syllabus for the course of&nbsp; B. Tech Information Technology</h2>
            <ul>
                <li style={{ marginTop: "5px" }}><a href="/syllabus/1th_2th_Sem_Syllabus.pdf" target="_blank"><span className="hover-1">1st and 2nd Semester Syllabus</span></a></li>
                <li style={{ marginTop: "10px" }}><a href="/syllabus/3th_4th_Sem_Syllabus.pdf" target="_blank"><span className="hover-1">3rd and 4th Semester Syllabus</span></a></li>
                <li style={{ marginTop: "10px" }}><a href="/syllabus/5th_6th_Sem_Syllabus.pdf" target="_blank"> <span className="hover-1">5th and 6th Semester Syllabus</span> </a></li>
                <li style={{ marginTop: "10px" }}><a href="/syllabus/7th_8th_Sem_Syllabus.pdf" target="_blank"> <span className="hover-1">7th and 8th Semester Syllabus</span> </a></li>
                <li style={{ marginTop: "10px" }}><a href="/syllabus/PHD_syllabus.pdf" target="_blank"> <span className="hover-1">Ph.D. Course List</span> </a></li>
            </ul>
        </div>
    )
}

export default Coursematerial