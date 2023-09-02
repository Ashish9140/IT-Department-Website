import { useState, useEffect } from "react";
import {
    useNavigate
} from "react-router-dom";

import Loader from '../../../components/Loader'

import { getStudents } from "../../../http";

const S2021Batch = () => {
    const navigate = useNavigate();
    const [seaechInput, setSearchInput] = useState('');
    const [s2021s, setS2021s] = useState();
    const [filteredStudents, setFilteredStudents] = useState();


    useEffect(async () => {
        const stu = [
            {
                "name": "SYED MINAM SHAH",
                "enroll": "2021BITE003",
                "rN0": "2021NITSGR0633"
            },
            {
                "name": "MIR AATIF RAFIQ",
                "enroll": "2021BITE004",
                "rN0": "2021NITSGR0634"
            },
            {
                "name": "HARSH VARDHAN SINGH",
                "enroll": "2021BITE005",
                "rN0": "2021NITSGR0635"
            },
            {
                "name": "BABA ADIL NAIK",
                "enroll": "2021BITE006",
                "rN0": "2021NITSGR0636"
            },
            {
                "name": "ABDUL MUQSIT ZARGAR",
                "enroll": "2021BITE007",
                "rN0": "2021NITSGR0637"
            },
            {
                "name": "SALIQ NISSAR BHAT",
                "enroll": "2021BITE008",
                "rN0": "2021NITSGR0638"
            },
            {
                "name": "ADITYA SINGH",
                "enroll": "2021BITE009",
                "rN0": "2021NITSGR0639"
            },
            {
                "name": "ABHISHEK SINGH",
                "enroll": "2021BITE010",
                "rN0": "2021NITSGR0640"
            },
            {
                "name": "SHUBHAM",
                "enroll": "2021BITE011",
                "rN0": "2021NITSGR0641"
            },
            {
                "name": "SHASHWAT SARAN",
                "enroll": "2021BITE012",
                "rN0": "2021NITSGR0642"
            },
            {
                "name": "HARRIS GULZAR",
                "enroll": "2021BITE013",
                "rN0": "2021NITSGR0643"
            },
            {
                "name": "SHUBAM SHARMA",
                "enroll": "2021BITE014",
                "rN0": "2021NITSGR0644"
            },
            {
                "name": "SHAH INAM UL HAQ",
                "enroll": "2021BITE015",
                "rN0": "2021NITSGR0645"
            },
            {
                "name": "SUHAIL HAMID SHEIKH",
                "enroll": "2021BITE016",
                "rN0": "2021NITSGR0646"
            },
            {
                "name": "SAKSHAM SHARMA",
                "enroll": "2021BITE017",
                "rN0": "2021NITSGR0647"
            },
            {
                "name": "MUNEEB ILLAHI KHAN",
                "enroll": "2021BITE018",
                "rN0": "2021NITSGR0648"
            },
            {
                "name": "MIR TASLEEM",
                "enroll": "2021BITE019",
                "rN0": "2021NITSGR0649"
            },
            {
                "name": "RIDDHI",
                "enroll": "2021BITE020",
                "rN0": "2021NITSGR0650"
            },
            {
                "name": "ALIZA MUSHTAQ",
                "enroll": "2021BITE021",
                "rN0": "2021NITSGR0651"
            },
            {
                "name": "DIYA PURI",
                "enroll": "2021BITE022",
                "rN0": "2021NITSGR0652"
            },
            {
                "name": "ANVI VERMA",
                "enroll": "2021BITE023",
                "rN0": "2021NITSGR0653"
            },
            {
                "name": "SHEIKH AZAL ABID",
                "enroll": "2021BITE024",
                "rN0": "2021NITSGR0654"
            },
            {
                "name": "QAZI IZMA",
                "enroll": "2021BITE025",
                "rN0": "2021NITSGR0655"
            },
            {
                "name": "SNIGDHA MAHAJAN",
                "enroll": "2021BITE026",
                "rN0": "2021NITSGR0656"
            },
            {
                "name": "IFRAH MANZOOR",
                "enroll": "2021BITE027",
                "rN0": "2021NITSGR0657"
            },
            {
                "name": "SYED HANAN SHAKEEL",
                "enroll": "2021BITE028",
                "rN0": "2021NITSGR0658"
            },
            {
                "name": "SHIVAM SHARMA",
                "enroll": "2021BITE029",
                "rN0": "2021NITSGR0659"
            },
            {
                "name": "PODUGU MANI CHARAN",
                "enroll": "2021BITE030",
                "rN0": "2021NITSGR0660"
            },
            {
                "name": "SUMAN KUMAR",
                "enroll": "2021BITE031",
                "rN0": "2021NITSGR0661"
            },
            {
                "name": "VINAYAK SINGHAL",
                "enroll": "2021BITE032",
                "rN0": "2021NITSGR0662"
            },
            {
                "name": "HARSHIL MUSTUFABHAI JUNAKIYA",
                "enroll": "2021BITE033",
                "rN0": "2021NITSGR0663"
            },
            {
                "name": "DUDDUPUDI VENKAT SUDHEER LAKSHMAN",
                "enroll": "2021BITE034",
                "rN0": "2021NITSGR0664"
            },
            {
                "name": "VIVEK KUMAR PANDEY",
                "enroll": "2021BITE035",
                "rN0": "2021NITSGR0665"
            },
            {
                "name": "MD KAISHAR",
                "enroll": "2021BITE036",
                "rN0": "2021NITSGR0666"
            },
            {
                "name": "ABHISHEK KUMAR SHARMA",
                "enroll": "2021BITE037",
                "rN0": "2021NITSGR0667"
            },
            {
                "name": "YARRAMSETTI KUSUMA",
                "enroll": "2021BITE038",
                "rN0": "2021NITSGR0668"
            },
            {
                "name": "RUCHI KHANDELWAL",
                "enroll": "2021BITE039",
                "rN0": "2021NITSGR0669"
            },
            {
                "name": "SHAHID FAROOQ",
                "enroll": "2021BITE040",
                "rN0": "2021NITSGR0670"
            },
            {
                "name": "SYED OWAIS KAZMI",
                "enroll": "2021BITE041",
                "rN0": "2021NITSGR0671"
            },
            {
                "name": "MOHAMMAD QASIM KHUROO",
                "enroll": "2021BITE042",
                "rN0": "2021NITSGR0672"
            },
            {
                "name": "SOBIYA MIR",
                "enroll": "2021BITE043",
                "rN0": "2021NITSGR0673"
            },
            {
                "name": "VINAY PRAKASH SENAPATI",
                "enroll": "2021BITE044",
                "rN0": "2021NITSGR0674"
            },
            {
                "name": "ATTAR M A MALIK",
                "enroll": "2021BITE045",
                "rN0": "2021NITSGR0675"
            },
            {
                "name": "RAJ KUMAR",
                "enroll": "2021BITE046",
                "rN0": "2021NITSGR0676"
            },
            {
                "name": "PRATHAM KUMAR",
                "enroll": "2021BITE047",
                "rN0": "2021NITSGR0677"
            },
            {
                "name": "RAHUL KUMAR",
                "enroll": "2021BITE048",
                "rN0": "2021NITSGR0678"
            },
            {
                "name": "GAURAV KUMAR SONI",
                "enroll": "2021BITE049",
                "rN0": "2021NITSGR0679"
            },
            {
                "name": "SHUBHAM PATEL",
                "enroll": "2021BITE050",
                "rN0": "2021NITSGR0680"
            },
            {
                "name": "DEEPAK SONI",
                "enroll": "2021BITE051",
                "rN0": "2021NITSGR0681"
            },
            {
                "name": "PIYUSH KUMAR GUPTA",
                "enroll": "2021BITE052",
                "rN0": "2021NITSGR0682"
            },
            {
                "name": "MD ARMAN ANSARI",
                "enroll": "2021BITE053",
                "rN0": "2021NITSGR0683"
            },
            {
                "name": "MOHIT KUMAR",
                "enroll": "2021BITE054",
                "rN0": "2021NITSGR0684"
            },
            {
                "name": "SHAKIL KATHAT",
                "enroll": "2021BITE055",
                "rN0": "2021NITSGR0685"
            },
            {
                "name": "KREITIKA YADAV",
                "enroll": "2021BITE056",
                "rN0": "2021NITSGR0686"
            },
            {
                "name": "POONAM KUMARI",
                "enroll": "2021BITE057",
                "rN0": "2021NITSGR0687"
            },
            {
                "name": "SAMEER HAMEED NAJAR",
                "enroll": "2021BITE058",
                "rN0": "2021NITSGR0688"
            },
            {
                "name": "SHIVAM PRADHAN",
                "enroll": "2021BITE059",
                "rN0": "2021NITSGR0689"
            },
            {
                "name": "SUHAIB AHMAD SALMANI",
                "enroll": "2021BITE060",
                "rN0": "2021NITSGR0690"
            },
            {
                "name": "TAWKEER AHMAD",
                "enroll": "2021BITE061",
                "rN0": "2021NITSGR0691"
            },
            {
                "name": "WAJID MUSHTAQ TELI",
                "enroll": "2021BITE062",
                "rN0": "2021NITSGR0692"
            },
            {
                "name": "RAJES MANNA",
                "enroll": "2021BITE063",
                "rN0": "2021NITSGR0693"
            },
            {
                "name": "UMAR ADAB ANSARI",
                "enroll": "2021BITE064",
                "rN0": "2021NITSGR0694"
            },
            {
                "name": "TUSHAR VERMA",
                "enroll": "2021BITE065",
                "rN0": "2021NITSGR0695"
            },
            {
                "name": "AMAN SEWALEYA",
                "enroll": "2021BITE066",
                "rN0": "2021NITSGR0696"
            },
            {
                "name": "ADARSH DEWANAND FULZELE",
                "enroll": "2021BITE067",
                "rN0": "2021NITSGR0697"
            },
            {
                "name": "UPPU VAMSI",
                "enroll": "2021BITE068",
                "rN0": "2021NITSGR0698"
            },
            {
                "name": "YEDKE VAIBHAV RAMESHWAR",
                "enroll": "2021BITE069",
                "rN0": "2021NITSGR0699"
            },
            {
                "name": "ARYAN NARAYAN KUTTARMARE",
                "enroll": "2021BITE070",
                "rN0": "2021NITSGR0700"
            },
            {
                "name": "RAKHI",
                "enroll": "2021BITE071",
                "rN0": "2021NITSGR0701"
            },
            {
                "name": "KANCHAN MORE",
                "enroll": "2021BITE072",
                "rN0": "2021NITSGR0702"
            },
            {
                "name": "KARTIV SHANT",
                "enroll": "2021BITE073",
                "rN0": "2021NITSGR0703"
            },
            {
                "name": "ROHINISH.K.SINGH",
                "enroll": "2021BITE074",
                "rN0": "2021NITSGR0704"
            },
            {
                "name": "KHUSHI RENU",
                "enroll": "2021BITE075",
                "rN0": "2021NITSGR0705"
            },
            {
                "name": "TUSHAR DOGRA",
                "enroll": "2021BITE076",
                "rN0": "2021NITSGR0706"
            },
            {
                "name": "LOKESHWAR BHAGAT",
                "enroll": "2021BITE077",
                "rN0": "2021NITSGR0707"
            },
            {
                "name": "NISHANT CHANGOTRA",
                "enroll": "2021BITE078",
                "rN0": "2021NITSGR0708"
            },
            {
                "name": "RAHUL MEENA",
                "enroll": "2021BITE079",
                "rN0": "2021NITSGR0709"
            },
            {
                "name": "SHAKIL HUSSAIN",
                "enroll": "2021BITE080",
                "rN0": "2021NITSGR0710"
            },
            {
                "name": "MOHAMMAD TAHIR RAZZA",
                "enroll": "2021BITE081",
                "rN0": "2021NITSGR0711"
            },
            {
                "name": "UMAR GEELANI",
                "enroll": "2021BITE082",
                "rN0": "2021NITSGR0712"
            },
            {
                "name": "MANUPATI JAIDEEP",
                "enroll": "2021BITE083",
                "rN0": "2021NITSGR0713"
            },
            {
                "name": "VISLAVATH PAVANI",
                "enroll": "2021BITE084",
                "rN0": "2021NITSGR0714"
            },
            {
                "name": "HAKIMA BANOO",
                "enroll": "2021BITE085",
                "rN0": "2021NITSGR0715"
            },
            {
                "name": "ZULFIQAR ALI",
                "enroll": "2021BITE086",
                "rN0": "2021NITSGR0716"
            },
            {
                "name": "DANISHTA AKHTER",
                "enroll": "2021BITE087",
                "rN0": "2021NITSGR0717"
            }
        ];
        setS2021s(stu);
        setFilteredStudents(stu);
    }, [])

    const filterSearch = (value) => {
        setSearchInput(value);
        let filterData;
        if (value.includes("2021"))
            filterData = s2021s.filter(stdnt => stdnt.enroll.toLowerCase().includes(value.toLowerCase()));
        else
            filterData = s2021s.filter(stdnt => stdnt.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredStudents(filterData);
    }

    return (
        // <Loader />
        <div className="batch2021 container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className=" container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto", borderBottom: "1px dotted gray" }}>2021 IT Students</h2>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search by Name or Enroll" value={seaechInput} onChange={(e) => { filterSearch(e.target.value) }} />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="batch2021-table-scroll">
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
            <a href="/syllabus/2021.pdf" download style={{ display: "inline-block", textAlign: "end", width: "96%" }}>Download 2021 Batch PDF</a>
        </div >
    )
}

export default S2021Batch