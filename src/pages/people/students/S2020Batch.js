import { useState, useEffect } from "react";
import {
    useNavigate
} from "react-router-dom";

import Loader from '../../../components/Loader'

import { getStudents } from "../../../http";

const S2020Batch = () => {
    const navigate = useNavigate();
    const [seaechInput, setSearchInput] = useState('');
    const [s2020s, setS2020s] = useState();
    const [filteredStudents, setFilteredStudents] = useState();


    useEffect(async () => {
        const stu = [
            {
                "rN0": "2020NITSGR0413",
                "name": "JAMEEL KAISAR KHAN",
                "enroll": "2020BITE001",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0414",
                "name": "SAQIB HUSSAIN GANAIE",
                "enroll": "2020BITE002",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0415",
                "name": "IRTIQA",
                "enroll": "2020BITE003",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0416",
                "name": "ARPUNIT KOUR",
                "enroll": "2020BITE004",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0417",
                "name": "MANDEEP SINGH",
                "enroll": "2020BITE005",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0418",
                "name": "PRANAV SANOTRA",
                "enroll": "2020BITE006",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0419",
                "name": "UDAY BHAN",
                "enroll": "2020BITE007",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0420",
                "name": "ROHIT SINGH",
                "enroll": "2020BITE008",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0421",
                "name": "AKARSHIT KUMAR",
                "enroll": "2020BITE009",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0422",
                "name": "GAURAV MEENA",
                "enroll": "2020BITE010",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0423",
                "name": "SHAGUN BHATT",
                "enroll": "2020BITE011",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0424",
                "name": "ZEESHAN SHARIF",
                "enroll": "2020BITE012",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0425",
                "name": "ISHITA SHARMA",
                "enroll": "2020BITE013",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0697",
                "name": "SHAIK ARSH HUSSSAIN",
                "enroll": "2020BITE015",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0699",
                "name": "ASTITVA MISHRA",
                "enroll": "2020BITE016",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0701",
                "name": "HARDIK SRIVASTAVA",
                "enroll": "2020BITE018",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0705",
                "name": "ASHISH KUMAR",
                "enroll": "2020BITE020",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0706",
                "name": "DEVANSH",
                "enroll": "2020BITE021",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0708",
                "name": "PARATH SAFAYA",
                "enroll": "2020BITE022",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0709",
                "name": "HEMANSHU SHARMA",
                "enroll": "2020BITE023",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0712",
                "name": "MRIDUL SHARMA",
                "enroll": "2020BITE025",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0713",
                "name": "SHREYA",
                "enroll": "2020BITE026",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0715",
                "name": "KETAN SHARMA",
                "enroll": "2020BITE027",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0716",
                "name": "FASIL SHAFI",
                "enroll": "2020BITE028",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0718",
                "name": "AGRIM SANGOTRA",
                "enroll": "2020BITE029",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0719",
                "name": "ANKITA RAJPUT",
                "enroll": "2020BITE030",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0721",
                "name": "RISHITA SHARMA",
                "enroll": "2020BITE031",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0723",
                "name": "HASEEB HIJAZI KHAN",
                "enroll": "2020BITE032",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0724",
                "name": "DHANANJAY MAHAJAN",
                "enroll": "2020BITE033",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0727",
                "name": "ADNAN ALI GANAIE",
                "enroll": "2020BITE034",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0729",
                "name": "RAVISHTA KOHLI",
                "enroll": "2020BITE035",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0730",
                "name": "JAPSIMAR SOIN",
                "enroll": "2020BITE036",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0733",
                "name": "SYEDA AZHAR FATIMAH",
                "enroll": "2020BITE037",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0735",
                "name": "SADIYA AJAZ CHUROO",
                "enroll": "2020BITE038",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0736",
                "name": "SHAHZAREENA",
                "enroll": "2020BITE039",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0738",
                "name": "ADARSH KUMAR",
                "enroll": "2020BITE040",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0740",
                "name": "ABHAY GARG",
                "enroll": "2020BITE041",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0741",
                "name": "SARVESHWARA MISHRA",
                "enroll": "2020BITE042",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0743",
                "name": "ARYAN PATEL",
                "enroll": "2020BITE043",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0744",
                "name": "RITURAJ KUMAR SINGH",
                "enroll": "2020BITE044",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0746",
                "name": "GADE VENKATA KASI SUNIL",
                "enroll": "2020BITE045",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0747",
                "name": "ADITYA GUPTA",
                "enroll": "2020BITE046",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0748",
                "name": "HARSH RAJ",
                "enroll": "2020BITE047",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0749",
                "name": "HARSHIT DUBEY",
                "enroll": "2020BITE048",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0752",
                "name": "YASIR MOHI UD DIN",
                "enroll": "2020BITE050",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0755",
                "name": "DEEPAK KACHHOT",
                "enroll": "2020BITE051",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0756",
                "name": "ROHIT PRAJAPAT",
                "enroll": "2020BITE052",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0758",
                "name": "RAHUL SINGH",
                "enroll": "2020BITE053",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0759",
                "name": "DOKIBURRA ISAIAH PAULSON",
                "enroll": "2020BITE054",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0761",
                "name": "SRINATH RAKESH YATAWAR",
                "enroll": "2020BITE055",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0762",
                "name": "KUNDAN KUMAR YADAV",
                "enroll": "2020BITE056",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0763",
                "name": "DINESH DHIDHARIYA",
                "enroll": "2020BITE057",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0764",
                "name": "ANKIT KUMAR",
                "enroll": "2020BITE058",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0765",
                "name": "YACHALAPU LOVA SAI PRASANTH",
                "enroll": "2020BITE059",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0766",
                "name": "LANKA KOUSHIK",
                "enroll": "2020BITE060",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0767",
                "name": "STUTI SINGH",
                "enroll": "2020BITE061",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0768",
                "name": "GURUJU AKHILA",
                "enroll": "2020BITE062",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0769",
                "name": "ISMAIL BASHIR",
                "enroll": "2020BITE063",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0770",
                "name": "SHIVAM SINGH KHATRI",
                "enroll": "2020BITE064",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0771",
                "name": "ZAHOOR AHMAD SHERGUJRY",
                "enroll": "2020BITE065",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0772",
                "name": "SHAHID MUSHTAQ",
                "enroll": "2020BITE066",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0773",
                "name": "RAYEES ZAHOOR",
                "enroll": "2020BITE067",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0776",
                "name": "ABHISHIEK",
                "enroll": "2020BITE068",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0777",
                "name": "KUNDAN KUMAR",
                "enroll": "2020BITE069",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0779",
                "name": "BHAGAT SNEHANKIT NARENDRA",
                "enroll": "2020BITE070",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0780",
                "name": "RAHUL KUMAR",
                "enroll": "2020BITE071",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0782",
                "name": "UDAYVEER SINGH",
                "enroll": "2020BITE072",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0783",
                "name": "MOUSUMI BISWAS",
                "enroll": "2020BITE073",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0785",
                "name": "SONIA",
                "enroll": "2020BITE074",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0787",
                "name": "SOMMIT THAPPA",
                "enroll": "2020BITE075",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0788",
                "name": "TANIA",
                "enroll": "2020BITE076",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0789",
                "name": "VIKRAM DIGRA",
                "enroll": "2020BITE077",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0790",
                "name": "AKANKSHA KUMARI",
                "enroll": "2020BITE078",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0792",
                "name": "GOUTAM MECH",
                "enroll": "2020BITE079",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0794",
                "name": "RATHLAVATH GANESH",
                "enroll": "2020BITE080",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0797",
                "name": "RISHAV HODOKER",
                "enroll": "2020BITE082",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0798",
                "name": "PHUNTSOG NAMGYAL",
                "enroll": "2020BITE083",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR1088",
                "name": "MUZAFFAR ALI",
                "enroll": "2020BITE084",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR1130",
                "name": "MOIN BASHIR ZARGAR",
                "enroll": "2020BITE085",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR1131",
                "name": "KAJAL KUMARI",
                "enroll": "2020BITE086",
                "gender": "FEMALE"
            },
            {
                "rN0": "2020NITSGR0905",
                "name": "AYUSH KUMAR DUBEY",
                "enroll": "2020BITE087",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0933",
                "name": "ANURAG YADAV",
                "enroll": "2020BITE088",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0909",
                "name": "SHUBHAM KUMAR",
                "enroll": "2020BITE089",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0615",
                "name": "ABHISHEK RAJPUT",
                "enroll": "2020BITE090",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0518",
                "name": "JAMEE BASHIR",
                "enroll": "2020BITE091",
                "gender": "MALE"
            },
            {
                "rN0": "2020NITSGR0245 ",
                "name": "ASRAR UL HAQ",
                "enroll": "2020BITE092",
                "gender": "MALE"
            }
        ];
        setS2020s(stu);
        setFilteredStudents(stu);
    }, [])

    const filterSearch = (value) => {
        setSearchInput(value);
        let filterData;
        if (value.includes("2020"))
            filterData = s2020s.filter(stdnt => stdnt.enroll.toLowerCase().includes(value.toLowerCase()));
        else
            filterData = s2020s.filter(stdnt => stdnt.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredStudents(filterData);
    }

    return (
        // <Loader />
        <div className="batch2020 container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className=" container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto", borderBottom: "1px dotted gray" }}>2020 IT Students</h2>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search by Name or Enroll" value={seaechInput} onChange={(e) => { filterSearch(e.target.value) }} />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="batch2020-table-scroll">
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
            <a href="/syllabus/2020.pdf" download style={{ display: "inline-block", textAlign: "end", width: "96%" }}>Download 2020 Batch PDF</a>
        </div >
    )
}

export default S2020Batch