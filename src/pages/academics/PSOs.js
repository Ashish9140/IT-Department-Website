import {
    useNavigate
} from "react-router-dom";

const PSOs = () => {
    const navigate = useNavigate();
    return (
        <div className="container contact-container container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="container-fluid container2">

                <div>
                    <h2 className="page_title pso-heading-responsive">Programme Educational Objectives (PEOs)</h2>
                    <br />
                    <ul className='student-awards-ul pso-responsive-font'>

                        <li>PEO1: To prepare students to get employed and/or to pursue higher education and research in IT discipline in particular and allied engineering fields in general.</li>

                        <li>PEO2: To prepare students to develop effective IT solutions for real-world problems.</li>

                        <li>PEO3: To motivate students for creating startups generating employment for the society.</li>

                        <li>PEO4: To develop high moral, ethical and societal responsibilities among the students for their life-long learning.</li>

                    </ul>
                </div>

                <br />

                <div>
                    <h2 className="page_title pso-heading-responsive">Programme Specific Objectives (PSOs)</h2>
                    <br />
                    <ul className='student-awards-ul pso-responsive-font'>

                        <li>PSO1: Graduates should be creative, imaginative and proficient IT engineers employable to serve in the industry, academia, and allied services.</li>

                        <li>PSO2: Graduates should be able to advance in academic and research pursuits in IT and allied disciplines.</li>

                        <li>PSO3: Graduates should take a lead in innovation and entrepreneurship activities with high standards of professional and moral ethics and prove themselves beneficial to society at large.</li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default PSOs