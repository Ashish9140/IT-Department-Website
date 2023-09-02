import {
    useNavigate
} from "react-router-dom";

const Awards = () => {
    const navigate = useNavigate();
    return (
        <div className="container contact-container container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="container-fluid container2">
                <h2 className="page_title student-award-heading" style={{ fontWeight: "bold", borderBottom: "1px dotted gray", color: "rgb(4, 30, 102)" }}>Student's Achievments/Awards</h2>
                <ul className='student-awards-ul'>
                    <li>Deepti Dwivedi (IT-677/14) from 7th semester, presented her paper titled: “A Comparison of Class Imbalance techniques for Real-world landslide prediction” at International Conference on Machine Learning and Data Science (ICMLDS – 2017), Noida, India.  </li>
                    <li>Rakshit Sharma (IT-33/15) and Akansha Aggarwal (IT-59/15), from 5th Semester won third Prize in NIT Conclave 2017 held at  NIT Silchar from 1st to 3rdsept., 2017.</li>
                    <li>Anmol Jaiswal (IT-61/15) from 5th Semester won 5th Prize in “Apptitute Contest” organized by IIED cell NIT Srinagar on 14th October, 2017.</li>
                    <li>Mohit Verma (IT-44/15) from 5th Semester won 1st prize in Reverse Coding in an event “ Exordium” held at NIT Srinagar from4th to 7th Nov., 2017.</li>
                </ul>
            </div>
        </div>
    )
}

export default Awards