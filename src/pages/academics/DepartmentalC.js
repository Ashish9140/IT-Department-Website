import {
    useNavigate
} from "react-router-dom";

const DepartmentalC = () => {
    const navigate = useNavigate();

    const committee = [
        {
            "name": "Dr. G. R. Baig ",
            "role": "(Head/Chairperson)",
            "contact": "grbegh@nitsri.net"
        },
        {
            "name": "Dr. Shaima Qureshi",
            "role": "Member",
            "contact": "shaima@nitsri.net"
        },
        {
            "name": "Dr. Shabir Ahmad Sofi",
            "role": "Member",
            "contact": "shabir@nitsri.net"
        }
    ]

    return (
        <div className='container1'>
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto", borderBottom: "1px dotted gray" }}>Departmental Purchasing Committee</h2>
            <div className="DepartmentalC-table-scroll">
                <table id="customers">
                    <tr className="head staff-tr">
                        <th>Name</th>
                        <th>Role</th>
                        <th>Contact</th>
                    </tr>
                    {committee.map((committeem, index) => {
                        return (
                            <tr className="rows" key={index}>
                                <td>{committeem.name}</td>
                                <td>{committeem.role}</td>
                                <td>{committeem.contact}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    )
}

export default DepartmentalC