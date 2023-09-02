import {
    useNavigate
} from "react-router-dom";

const ResearchArea = () => {
    const navigate = useNavigate();

    const researchData = [
        {
            "area": "Artificial Intelligence and Machine learning",
            "faculty": ["Dr.Shabir Ahmad Sofi"]
        },
        {
            "area": "Architecture and Embedded systems",
            "faculty": ["Dr. Janibul Bashir"]
        },
        {
            "area": "Computer Networks",
            "faculty": ["Dr. Iqra Altaf Gillani"]
        },
        {
            "area": "Data Analysis",
            "faculty": ["Dr. Shabir Ahmad Sofi", " Dr. Iqra Altaf", "Dr. Janibul Bashir", "Dr. Shrabanti Mandal"]
        },
        {
            "area": "Distributed Systems and Parallel Programming",
            "faculty": ["Dr. Iqra Altaf", "Dr. Janibul Bashir"]
        },
        {
            "area": "Graphic and Vision",
            "faculty": ["Ms. Arooj Nissar"]
        },
        {
            "area": "Wireless sensor networks",
            "faculty": ["Dr. Shabir Ahmad Sofi"]
        },
        {
            "area": "Cloud Computing and BigData",
            "faculty": ["Dr. Prabal Verma"]
        }
    ]

    return (
        <div className='staff-container container1'>
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto", borderBottom: "1px dotted gray" }}>Research Areas</h2> <br />
                <div className="research-area-table-scroll">
                    <table id="customers">
                        <thead>
                            <tr className="head staff-tr">
                                <th>Research Areas</th>
                                <th>Faculty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {researchData.map((research, index) => {
                                return (
                                    <tr className="rows" key={index}>
                                        <td>{research.area}</td>
                                        <td>
                                            {
                                                research.faculty.map((faculty, index) => {
                                                    return (
                                                        <p>{faculty}</p>
                                                    )
                                                })
                                            }
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ResearchArea