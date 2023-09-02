import { useState, useEffect } from "react";
import {
    useNavigate
} from "react-router-dom";

import Loader from '../../../components/Loader'

import { getStudents } from "../../../http";

const S2016Batch = () => {
    const navigate = useNavigate();
    const [seaechInput, setSearchInput] = useState('');
    const [s2016s, setS2016s] = useState();
    const [filteredStudents, setFilteredStudents] = useState();


    useEffect(async () => {
        const stu = [
            {
                "enroll": "IT/23/16",
                "name": "Saurabh Verma  "
            },
            {
                "enroll": "IT/27/16",
                "name": "Mohammad Raqib  "
            },
            {
                "enroll": "IT/30/16",
                "name": "Imtayaz Ahmed"
            },
            {
                "enroll": "IT/34/16",
                "name": "Edgar Monis"
            },
            {
                "enroll": "IT/51/16",
                "name": "Dar Mohsin-Ul-Islam "
            },
            {
                "enroll": "IT/60/16",
                "name": "Rashifa"
            },
            {
                "enroll": "IT/62/16",
                "name": "Saahil Manzoor"
            },
            {
                "enroll": "IT/63/16",
                "name": "Rajkumar"
            },
            {
                "enroll": "IT/76/16",
                "name": "Sudhir Kumar"
            },
            {
                "enroll": "IT/78/16",
                "name": "Bikki Kumar"
            },
            {
                "enroll": "IT/80/16",
                "name": "Insherah Majid "
            },
            {
                "enroll": "IT/86/16",
                "name": "Ayush Dogra "
            },
            {
                "enroll": "IT/91/16",
                "name": "Shubham Pal  "
            },
            {
                "enroll": "IT/98/16",
                "name": "Satya Ranjan Samal "
            },
            {
                "enroll": "IT/112/16",
                "name": "Tahir Majeed"
            },
            {
                "enroll": "IT/124/16",
                "name": "Aman Sharma "
            },
            {
                "enroll": "IT/134/16",
                "name": "Sahil Kumar Thakyal "
            },
            {
                "enroll": "IT/160/16",
                "name": "Tahir Javed "
            },
            {
                "enroll": "IT/167/16",
                "name": "Sameer Ahmad "
            },
            {
                "enroll": "IT/208/16",
                "name": "Ashaq Maqbool"
            },
            {
                "enroll": "IT/224/16",
                "name": "Syed Tanveer"
            },
            {
                "enroll": "IT/236/16",
                "name": "Himanshu Raj"
            },
            {
                "enroll": "IT/237/16",
                "name": "Sushma Kumari"
            },
            {
                "enroll": "IT/238/16",
                "name": "Abhishek Kumar "
            },
            {
                "enroll": "IT/243/16",
                "name": "Shishpal"
            },
            {
                "enroll": "IT/255/16",
                "name": "Lokesh Jonwal "
            },
            {
                "enroll": "IT/279/16",
                "name": "Anjani Kumar Jangid "
            },
            {
                "enroll": "IT/301/16",
                "name": "Darakshan Rashid"
            },
            {
                "enroll": "IT/306/16",
                "name": "Aditya Rathi  "
            },
            {
                "enroll": "IT/311/16",
                "name": "Tahir Amin Bhat "
            },
            {
                "enroll": "IT/330/16",
                "name": "Deepanshu Vats"
            },
            {
                "enroll": "IT/343/16",
                "name": "Akash Baghel"
            },
            {
                "enroll": "IT/373/16",
                "name": "Reshev Chadgal"
            },
            {
                "enroll": "IT/37/15-16",
                "name": "Harinath Prajapati"
            }
        ];
        setS2016s(stu);
        setFilteredStudents(stu);
    }, [])

    const filterSearch = (value) => {
        setSearchInput(value);
        let filterData;
        if (value.includes("2016"))
            filterData = s2016s.filter(stdnt => stdnt.enroll.toLowerCase().includes(value.toLowerCase()));
        else
            filterData = s2016s.filter(stdnt => stdnt.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredStudents(filterData);
    }

    return (
        // <Loader />
        <div className="batch2016 container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className=" container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto", borderBottom: "1px dotted gray" }}>2016 IT Students</h2>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search by Name or Enroll" value={seaechInput} onChange={(e) => { filterSearch(e.target.value) }} />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="batch2016-table-scroll">
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
            <a href="/syllabus/2016.pdf" download style={{ display: "inline-block", textAlign: "end", width: "96%" }}>Download 2016 Batch PDF</a>
        </div >
    )
}

export default S2016Batch