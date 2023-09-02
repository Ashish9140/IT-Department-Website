import { useState, useEffect } from "react";
import {
    useNavigate
} from "react-router-dom";

import Loader from '../../../components/Loader'

import { getStudents } from "../../../http";

const S2015Batch = () => {
    const navigate = useNavigate();
    const [seaechInput, setSearchInput] = useState('');
    const [s2015s, setS2015s] = useState();
    const [filteredStudents, setFilteredStudents] = useState();


    useEffect(async () => {
        const stu = [
            {
                "enroll": "2015ITE001",
                "name": "Rahila Rahim"
            },
            {
                "enroll": "2015ITE002",
                "name": "Habeel"
            },
            {
                "enroll": "2015ITE003",
                "name": "Furqan Yaqoob"
            },
            {
                "enroll": "2015ITE004",
                "name": "Danish Wazir"
            },
            {
                "enroll": "2015ITE005",
                "name": "Jasir Arafat"
            },
            {
                "enroll": "2015ITE006",
                "name": "Ayush Kumar"
            },
            {
                "enroll": "2015ITE007",
                "name": "Mir Musaib"
            },
            {
                "enroll": "2015ITE008",
                "name": "Umar Farooq"
            },
            {
                "enroll": "2015ITE009",
                "name": "Saleem Rashid"
            },
            {
                "enroll": "2015ITE010",
                "name": "Mohd Majid"
            },
            {
                "enroll": "2015ITE011",
                "name": "Anamika Bharti"
            },
            {
                "enroll": "2015ITE012",
                "name": "Abhinandan"
            },
            {
                "enroll": "2015ITE013",
                "name": "Zilmarij Iqbal"
            },
            {
                "enroll": "2015ITE016",
                "name": "Kamal Kumar"
            },
            {
                "enroll": "2015ITE017",
                "name": "Sahil"
            },
            {
                "enroll": "2015ITE018",
                "name": "Akhsay"
            },
            {
                "enroll": "2015ITE020",
                "name": "Mohd Asif Dar"
            },
            {
                "enroll": "2015ITE021",
                "name": "Monaza Farooq"
            },
            {
                "enroll": "2015ITE022",
                "name": "Sheikh Afaan"
            },
            {
                "enroll": "2015ITE023",
                "name": "Naman Verma"
            },
            {
                "enroll": "2015ITE025",
                "name": "Aqsa Ashraf"
            },
            {
                "enroll": "2015ITE026",
                "name": "Baljeet Singh"
            },
            {
                "enroll": "2015ITE028",
                "name": "Hazim Bashir"
            },
            {
                "enroll": "2015ITE029",
                "name": "Bharti Tak"
            },
            {
                "enroll": "2015ITE030",
                "name": "Govind Sahay"
            },
            {
                "enroll": "2015ITE031",
                "name": "Ashutosh Rahi"
            },
            {
                "enroll": "2015ITE033",
                "name": "Rakshit Sharma"
            },
            {
                "enroll": "2015ITE034",
                "name": "Jatinder"
            },
            {
                "enroll": "2015ITE035",
                "name": "Hashim Rashid"
            },
            {
                "enroll": "2015ITE036",
                "name": "Asish Pathania"
            },
            {
                "enroll": "2015ITE038",
                "name": "Abhishek Kumar"
            },
            {
                "enroll": "2015ITE041",
                "name": "Wajid Ali"
            },
            {
                "enroll": "2015ITE042",
                "name": "Shibham Raj"
            },
            {
                "enroll": "2015ITE044",
                "name": "Mohit Verma"
            },
            {
                "enroll": "2015ITE045",
                "name": "Rohit Sharma"
            },
            {
                "enroll": "2015ITE046",
                "name": "Harshit Kumar"
            },
            {
                "enroll": "2015ITE049",
                "name": "Lavi Pal"
            },
            {
                "enroll": "2015ITE051",
                "name": "Abhishek Kumar"
            },
            {
                "enroll": "2015ITE052",
                "name": "Ayush Kishore"
            },
            {
                "enroll": "2015ITE053",
                "name": "Raj Kumar"
            },
            {
                "enroll": "2015ITE054",
                "name": "Mohd Zaki"
            },
            {
                "enroll": "2015ITE056",
                "name": "Abhinav Dubey"
            },
            {
                "enroll": "2015ITE057",
                "name": "Ankit"
            },
            {
                "enroll": "2015ITE058",
                "name": "Banwari Lal"
            },
            {
                "enroll": "2015ITE059",
                "name": "Akansha"
            },
            {
                "enroll": "2015ITE060",
                "name": "Dinesh"
            },
            {
                "enroll": "2015ITE061",
                "name": "Anmol"
            },
            {
                "enroll": "2015ITE062",
                "name": "Piyush"
            },
            {
                "enroll": "2015ITE063",
                "name": "Mukesh"
            },
            {
                "enroll": "2015ITE064",
                "name": "Shantanu"
            },
            {
                "enroll": "2015ITE065",
                "name": "Sonali"
            },
            {
                "enroll": "2015ITE066",
                "name": "Anurag"
            },
            {
                "enroll": "2015ITE067",
                "name": "Nishant"
            },
            {
                "enroll": "2015ITE068",
                "name": "Utkarsh"
            },
            {
                "enroll": "2015ITE069",
                "name": "Summit"
            },
            {
                "enroll": "2015ITE070",
                "name": "Aakash"
            }
        ];
        setS2015s(stu);
        setFilteredStudents(stu);
    }, [])

    const filterSearch = (value) => {
        setSearchInput(value);
        let filterData;
        if (value.includes("2015"))
            filterData = s2015s.filter(stdnt => stdnt.enroll.toLowerCase().includes(value.toLowerCase()));
        else
            filterData = s2015s.filter(stdnt => stdnt.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredStudents(filterData);
    }

    return (
        // <Loader />
        <div className="batch2015 container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className=" container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto", borderBottom: "1px dotted gray" }}>2015 IT Students</h2>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search by Name or Enroll" value={seaechInput} onChange={(e) => { filterSearch(e.target.value) }} />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="batch2015-table-scroll">
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
            <a href="/syllabus/2015.pdf" download style={{ display: "inline-block", textAlign: "end", width: "96%" }}>Download 2015 Batch PDF</a>
        </div >
    )
}

export default S2015Batch