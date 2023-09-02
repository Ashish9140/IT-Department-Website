import { useState, useEffect } from "react";
import {
    useNavigate
} from "react-router-dom";

import Loader from '../../../components/Loader'

import { getStudents } from "../../../http";

const S2018Batch = () => {
    const navigate = useNavigate();
    const [seaechInput, setSearchInput] = useState('');
    const [s2018s, setS2018s] = useState();
    const [filteredStudents, setFilteredStudents] = useState();


    useEffect(async () => {
        const stu = [
            {
                "rN0": "2018NITSGR0075",
                "enroll": "2018BITE001",
                "name": "ANSHUL KUMAR"
            },
            {
                "rN0": "2018NITSGR0078",
                "enroll": "2018BITE056",
                "name": "NAIYER ABBAS"
            },
            {
                "rN0": "2018NITSGR0085",
                "enroll": "2018BITE002",
                "name": "MUNEEB AHMAD SHEIKH"
            },
            {
                "rN0": "2018NITSGR0089",
                "enroll": "2018BITE003",
                "name": "SPARSH SARANGAL"
            },
            {
                "rN0": "2018NITSGR0101",
                "enroll": "2018BITE004",
                "name": "SKINDER KAZIMI"
            },
            {
                "rN0": "2018NITSGR0131",
                "enroll": "2018BITE005",
                "name": "GURVEEN SINGH"
            },
            {
                "rN0": "2018NITSGR0152",
                "enroll": "2018BITE006",
                "name": "SHALINI SHARMA"
            },
            {
                "rN0": "2018NITSGR0161",
                "enroll": "2018BITE008",
                "name": "AYUSH KUMAR MALL"
            },
            {
                "rN0": "2018NITSGR0163",
                "enroll": "2018BITE009",
                "name": "BURHAN LATIEF DAR"
            },
            {
                "rN0": "2018NITSGR0169",
                "enroll": "2018BITE060",
                "name": "S FAISAL NISAR"
            },
            {
                "rN0": "2018NITSGR0201",
                "enroll": "2018BITE012",
                "name": "FATIMA MADNI"
            },
            {
                "rN0": "2018NITSGR0204",
                "enroll": "2018BITE013",
                "name": "SWASTIK GUPTA"
            },
            {
                "rN0": "2018NITSGR0207",
                "enroll": "2018BITE014",
                "name": "JUNAID AHMAD BHAT"
            },
            {
                "rN0": "2018NITSGR0208",
                "enroll": "2018BITE015",
                "name": "MOHAMMAD HARIS ZARGAR"
            },
            {
                "rN0": "2018NITSGR0218",
                "enroll": "2018BITE016",
                "name": "ISHU VERMA"
            },
            {
                "rN0": "2018NITSGR0221",
                "enroll": "2018BITE018",
                "name": "DHEERAJ RAJ"
            },
            {
                "rN0": "2018NITSGR0222",
                "enroll": "2018BITE019",
                "name": "SIRAJ ALI KHAN GOJAR"
            },
            {
                "rN0": "2018NITSGR0241",
                "enroll": "2018BITE021",
                "name": "AQIB RASHID SALARIA"
            },
            {
                "rN0": "2018NITSGR0265",
                "enroll": "2018BITE024",
                "name": "MOHAMMAD HASEEB"
            },
            {
                "rN0": "2018NITSGR0275",
                "enroll": "2018BITE025",
                "name": "RUQAIYA ARJUMAND"
            },
            {
                "rN0": "2018NITSGR0283",
                "enroll": "2018BITE066",
                "name": "ANEESA KHAN"
            },
            {
                "rN0": "2018NITSGR0287",
                "enroll": "2018BITE026",
                "name": "SANNIDHAY VASHAL"
            },
            {
                "rN0": "2018NITSGR0309",
                "enroll": "2018BITE028",
                "name": "MEENAKSHI RANA"
            },
            {
                "rN0": "2018NITSGR0312",
                "enroll": "2018BITE029",
                "name": "AREEB BEIGH"
            },
            {
                "rN0": "2018NITSGR0318",
                "enroll": "2018BITE030",
                "name": "SHUBHAM SHRIVASTAVA"
            },
            {
                "rN0": "2018NITSGR0324",
                "enroll": "2018BITE058",
                "name": "EKAKSHER KHAJURIA"
            },
            {
                "rN0": "2018NITSGR0334",
                "enroll": "2018BITE031",
                "name": "TAJAMUL ASHRAF"
            },
            {
                "rN0": "2018NITSGR0336",
                "enroll": "2018BITE032",
                "name": "SHOWQEEN YOUSUF"
            },
            {
                "rN0": "2018NITSGR0339",
                "enroll": "2018BITE076",
                "name": "PRANAY KASHYAP"
            },
            {
                "rN0": "2018NITSGR0345",
                "enroll": "2018BITE033",
                "name": "VIPUL KUMAR"
            },
            {
                "rN0": "2018NITSGR0346",
                "enroll": "2018BITE034",
                "name": "ANUBHAV KAUSHIK"
            },
            {
                "rN0": "2018NITSGR0347",
                "enroll": "2018BITE035",
                "name": "MENON SALGOTRA"
            },
            {
                "rN0": "2018NITSGR0358",
                "enroll": "2018BITE057",
                "name": "FUZAYIL BIN AFZAL MIR"
            },
            {
                "rN0": "2018NITSGR0404",
                "enroll": "2018BITE038",
                "name": "RAKESH KUMAR"
            },
            {
                "rN0": "2018NITSGR0412",
                "enroll": "2018BITE041",
                "name": "BESETTY SHYAMANTH"
            },
            {
                "rN0": "2018NITSGR0432",
                "enroll": "2018BITE043",
                "name": "MANISH KUMAR"
            },
            {
                "rN0": "2018NITSGR0457",
                "enroll": "2018BITE045",
                "name": "KAPIL KUMAR"
            },
            {
                "rN0": "2018NITSGR0468",
                "enroll": "2018BITE048",
                "name": "KIRTI GUPTA"
            },
            {
                "rN0": "2018NITSGR0477",
                "enroll": "2018BITE050",
                "name": "ABHISHEK KUMAR"
            },
            {
                "rN0": "2018NITSGR0491",
                "enroll": "2018BITE054",
                "name": "RAJKAMAL SINGH"
            },
            {
                "rN0": "2018NITSGR0508",
                "enroll": "2018BITE082",
                "name": "GAURAV CHAUHAN"
            },
            {
                "rN0": "2018NITSGR0512",
                "enroll": "2018BITE055",
                "name": "AMIT KUMAR"
            },
            {
                "rN0": "2018NITSGR0665",
                "enroll": "2018BITE061",
                "name": "SENANI SADHU"
            }
        ];
        setS2018s(stu);
        setFilteredStudents(stu);
    }, [])

    const filterSearch = (value) => {
        setSearchInput(value);
        let filterData;
        if (value.includes("2018"))
            filterData = s2018s.filter(stdnt => stdnt.enroll.toLowerCase().includes(value.toLowerCase()));
        else
            filterData = s2018s.filter(stdnt => stdnt.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredStudents(filterData);
    }

    return (
        // <Loader />
        <div className="batch2018 container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className=" container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto", borderBottom: "1px dotted gray" }}>2018 IT Students</h2>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search by Name or Enroll" value={seaechInput} onChange={(e) => { filterSearch(e.target.value) }} />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="batch2018-table-scroll">
                    {(filteredStudents === undefined) ?
                        <Loader />
                        :
                        <table id="customers">
                            <thead>
                                <tr className="head">
                                    <th>ID</th>
                                    <th>Registration Number</th>
                                    <th>Name</th>
                                    <th>Enrollment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map((stdnt, index) => {
                                    return (
                                        <tr className="rows" key={index}>
                                            <td>{index + 1}</td>
                                            <td>{stdnt.rN0}</td>
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
            <a href="/syllabus/2018.pdf" download style={{ display: "inline-block", textAlign: "end", width: "96%" }}>Download 2018 Batch PDF</a>
        </div >
    )
}

export default S2018Batch