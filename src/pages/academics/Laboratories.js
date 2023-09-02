import {
    useNavigate
} from "react-router-dom";
const Laboratories = () => {
    const navigate = useNavigate();

    const equipements = [
        {
            "name": "Computer HCL",
            "quantity": "4"
        },
        {
            "name": "Computers TFT Monitor HP (i5)",
            "quantity": "16"
        },
        {
            "name": "HP i7 TFT Monitor",
            "quantity": "110"
        },
        {
            "name": "Computers Wipro",
            "quantity": "32"
        },
        {
            "name": "Personal Computer Server - Wipro",
            "quantity": "1"
        },
        {
            "name": "UPS with 16 batteries",
            "quantity": "1"
        },
        {
            "name": "UPS 5KV",
            "quantity": "2"
        },
        {
            "name": "D-Link Switch 8 port",
            "quantity": "5"
        },
        {
            "name": "D-Link Switch 16 port",
            "quantity": "1"
        },
        {
            "name": "Netgear 16 port switch",
            "quantity": "2"
        },
        {
            "name": "Wireless LAN Card (within PCs)",
            "quantity": "20"
        },
        {
            "name": "8085 Microprocessor Trainer Kit",
            "quantity": "10"
        },
        {
            "name": "IBM Blade server",
            "quantity": "2"
        },
        {
            "name": "Windows 2003 SVR Ent.",
            "quantity": "2"
        },
        {
            "name": "Wifi Devices",
            "quantity": "5"
        },
        {
            "name": "RJ 45 Connectors",
            "quantity": "4"
        },

    ]

    return (
        <div className="container contact-container container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", borderBottom: "1px dotted gray" }}>Laboratories</h2>
                The department of Information Technology is having well established labs equipped with state of art technology. The systems have latest  softwares installed enabling students to excel in the practical sphere of their course work.The department ensures that the students follow the routine in labs as desired by course schema. <br /> <br />

                <p style={{ fontWeight: "bold", fontSize: "20px" }}>The department teaches following lab courses as a part of the course schema:</p>

                <div style={{ marginLeft: "25px" }}>
                    Computer networks lab <br />
                    DBMS  Lab <br />
                    IoT Lab <br />
                    Big Data Lab <br />
                    Computer Programming Fundamentals Lab <br />
                    Image Processing Lab <br />
                    Java Programming lab <br />
                    Data Communications Lab <br />
                    Computer Graphics Lab <br />
                    Information Security Lab <br />
                    Wireless and mobile communication lab <br />
                </div> <br />

                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Major Equipements:</p>
                <table id="customers">
                    <tr className="head staff-tr">
                        <th>Sr. No.</th>
                        <th>Name of Equipment</th>
                        <th>Quantity</th>
                    </tr>
                    {equipements.map((equipementsm, index) => {
                        return (
                            <tr className="rows">
                                <td>{index + 1}</td>
                                <td>{equipementsm.name}</td>
                                <td>{equipementsm.quantity}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    )
}

export default Laboratories