import {
    useNavigate
} from "react-router-dom";

const Vision = () => {
    const navigate = useNavigate();
    return (
        <div className="vismis-wrapper-container-1 container">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="vismis-wrapper-container-2">
                <p className="vismis-Heading">Vision And Mission</p>
                <p className="vismis-Heading-motto">Our Motto : "Leading Technology Leveraging Technology"</p>
                <hr size="1" />
                <br />
                <br /><span className="vision-mission-heading"><span >Vision of
                    the Department</span></span>
                <br /><span className="vision-mission-content" ><p >To
                    attain global recognition in Information Technology education and research by producing “Creators of
                    Innovative Technology”.&nbsp;</p></span>
                <br />
                <span className="vision-mission-heading"><span className="vision-mission-content">Mission of
                    the Department</span></span><br /><br />
                <div className="mission-content">
                    <ul style={{ listStyleType: "circle" }}>
                        <li><p><span>To provide state-of-the-art research facilities to generate knowledge and develop technologies
                            in the thrust areas of Information Technology.</span></p>
                        </li>
                        <li>
                            <p><span>To participate in the design and development process in the Research and Development
                                establishment and industry.</span></p>
                        </li>
                        <li>
                            <p><span>To collaborate with world-class organizations to strengthen industry-academia relationships
                                for mutual benefit.</span></p>
                        </li>
                        <li>
                            <p> <span>To develop IT professionals imbibed with high moral and ethical values.</span></p>
                        </li>
                        <p>&nbsp;</p>
                    </ul>
                </div>
            </div>

        </div >
    )
}

export default Vision