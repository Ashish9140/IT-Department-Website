import {
    useNavigate
} from "react-router-dom";

const Staff = () => {

    const navigate = useNavigate();

    const staff = [
        {
            "name": "Mr. Muzaffar Ahmad Beigh",
            "designation": "Lab. Attendant"
        },
        {
            "name": "Mr.Mohammad Ashraf Kumar",
            "designation": "Lab. Attendant"
        },
        {
            "name": "Mr. Shahid-ul-Islam",
            "designation": "Office Attendant"
        },
        {
            "name": "Mr.Gh. Nabi",
            "designation": "Orderly"
        }
    ]

    return (
        <div className='container1'>
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto", borderBottom: "1px dotted gray" }}>Staff Members</h2>
                <div className="staff-table-scroll">
                    <table id="customers">
                        <tr className="head staff-tr">
                            <th>Sr. No.</th>
                            <th>Staff member</th>
                            <th>Designation</th>
                        </tr>
                        {staff.map((staffm, index) => {
                            return (
                                <tr className="rows">
                                    <td>{index + 1}</td>
                                    <td>{staffm.name}</td>
                                    <td>{staffm.designation}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Staff