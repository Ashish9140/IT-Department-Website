import { useState, useEffect } from "react";
import {
    useNavigate
} from "react-router-dom";

import Loader from '../../../components/Loader'

import { getStudents } from "../../../http";

const S2017Batch = () => {
    const navigate = useNavigate();
    const [seaechInput, setSearchInput] = useState('');
    const [s2017s, setS2017s] = useState();
    const [filteredStudents, setFilteredStudents] = useState();


    useEffect(async () => {
        const stu = [
            {
                "enroll": "2016BITE223",
                "name": "IRSHAD AHMAD NAJAR"
            },
            {
                "enroll": "2017BITE001",
                "name": "IRAM NAWAB"
            },
            {
                "enroll": "2017BITE002",
                "name": "ISHFAQ HASSAN"
            },
            {
                "enroll": "2017BITE003",
                "name": "FEROZ AHMAD "
            },
            {
                "enroll": "2017BITE005",
                "name": "GAZIA AZIZ"
            },
            {
                "enroll": "2017BITE006",
                "name": "SHAHID AFRIDI"
            },
            {
                "enroll": "2017BITE007",
                "name": "ABDUL HANAN MATTOO"
            },
            {
                "enroll": "2017BITE008",
                "name": "QAZI FATIMA MUZZAFAR"
            },
            {
                "enroll": "2017BITE010",
                "name": "SHUBHAM KUMAR MAURYA"
            },
            {
                "enroll": "2017BITE045",
                "name": "SAHIL GUPTA"
            },
            {
                "enroll": "2017BITE011",
                "name": "TARUN GORKA"
            },
            {
                "enroll": "2017BITE012",
                "name": "ZUBAIR BASHIR LONE"
            },
            {
                "enroll": "2017BITE013",
                "name": "RAHUL CHADGAL"
            },
            {
                "enroll": "2017BITE014",
                "name": "IRTIQA MALIK"
            },
            {
                "enroll": "2017BITE015",
                "name": "JAZIB MAQBOOL"
            },
            {
                "enroll": "2017BITE040",
                "name": "KUMAR RAMAYANAM MANGALAM"
            },
            {
                "enroll": "2017BITE018",
                "name": "MOHAMMAD SAHEEM WANI"
            },
            {
                "enroll": "2017BITE019",
                "name": "FAIZAN RASHID"
            },
            {
                "enroll": "2017BITE020",
                "name": "KANAV SAMYAL"
            },
            {
                "enroll": "2017BITE022",
                "name": "KAMLESH KUMAR"
            },
            {
                "enroll": "2017BITE023",
                "name": "AKHIL SUDEN"
            },
            {
                "enroll": "2017BITE024",
                "name": "MD RAHMAT RAZA"
            },
            {
                "enroll": "2017BITE046",
                "name": "UMAR GULZAR"
            },
            {
                "enroll": "2017BITE026",
                "name": "PADMA LHAMO"
            },
            {
                "enroll": "2017BITE027",
                "name": "NIHARIKA SHARMA"
            },
            {
                "enroll": "2017BITE029",
                "name": "SOURAV KUMAR SINGH"
            },
            {
                "enroll": "2017BITE030",
                "name": "MUNEEB UL ISLAM"
            },
            {
                "enroll": "2017BITE031",
                "name": "SEEMA YADAV"
            },
            {
                "enroll": "2017BITE042",
                "name": "MOHAMMAD HASEEB QURESHI"
            },
            {
                "enroll": "2017BITE043",
                "name": "ASHISH KUMAR"
            },
            {
                "enroll": "2017BITE037",
                "name": "UKASH FAROOQ"
            },
            {
                "enroll": "2017BITE041",
                "name": "SALTANAT FIRDOUS ALLAQBND"
            },
            {
                "enroll": "2017BITE044",
                "name": "KHANDAY SALMAAN YOUSUF"
            },
            {
                "enroll": "2017BITE047",
                "name": "AKASH SINGH"
            },
            {
                "enroll": "2017BITE048",
                "name": "UDIT SRIVASTAVA"
            },
            {
                "enroll": "2017BITE049",
                "name": "VINAY YADAV"
            },
            {
                "enroll": "2017BITE050",
                "name": "RAJ MAHESH BULLU"
            },
            {
                "enroll": "2017BITE051",
                "name": "CHARU"
            },
            {
                "enroll": "2017BITE052",
                "name": "LOKESH KUMAR"
            },
            {
                "enroll": "2017BITE053",
                "name": "SAURABH KUMAR"
            },
            {
                "enroll": "2017BITE054",
                "name": "SALIQ NISAR BANDAY"
            },
            {
                "enroll": "2017BITE055",
                "name": "MALIK RAIHAN TARIQ"
            },
            {
                "enroll": "2017BITE056",
                "name": "DEEPAK KUMAR"
            },
            {
                "enroll": "2017BITE057",
                "name": "KADAMBALA TANVITHA CHOWDARY"
            },
            {
                "enroll": "2017BITE058",
                "name": "KHAN SHADAB NAOSHAD"
            },
            {
                "enroll": "2017BITE059",
                "name": "ABHISHEK DHAWAN"
            },
            {
                "enroll": "2017BITE060",
                "name": "AMRITPAL SINGH"
            },
            {
                "enroll": "2017BITE061",
                "name": "AMIT KUMAR"
            },
            {
                "enroll": "2017BITE062",
                "name": "AMAN YADAV"
            },
            {
                "enroll": "2017BITE063",
                "name": "VIVEK VAIBHAV"
            },
            {
                "enroll": "2017BITE064",
                "name": "PANKAJ CHAUHAN"
            },
            {
                "enroll": "2017BITE065",
                "name": "PRINCE GUPTA"
            },
            {
                "enroll": "2017BITE066",
                "name": "HARSH WARDHAN KUSHWAHA"
            }
        ];
        setS2017s(stu);
        setFilteredStudents(stu);
    }, [])

    const filterSearch = (value) => {
        setSearchInput(value);
        let filterData;
        if (value.includes("2017"))
            filterData = s2017s.filter(stdnt => stdnt.enroll.toLowerCase().includes(value.toLowerCase()));
        else
            filterData = s2017s.filter(stdnt => stdnt.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredStudents(filterData);
    }

    return (
        // <Loader />
        <div className="batch2017 container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className=" container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto", borderBottom: "1px dotted gray" }}>2017 IT Students</h2>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search by Name or Enroll" value={seaechInput} onChange={(e) => { filterSearch(e.target.value) }} />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="batch2017-table-scroll">
                    {(filteredStudents === undefined) ?
                        <Loader />
                        :
                        <table id="customers">
                            <thead>
                                <tr className="head">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Enrollment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map((stdnt, index) => {
                                    return (
                                        <tr className="rows" key={index}>
                                            <td>{index + 1}</td>
                                            <td>{stdnt.name}</td>
                                            <td>{stdnt.enroll}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
            <a href="/syllabus/2017.pdf" download style={{ display: "inline-block", textAlign: "end", width: "96%" }}>Download 2017 Batch PDF</a>
        </div >
    )
}

export default S2017Batch