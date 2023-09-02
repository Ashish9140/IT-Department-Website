import React from 'react'
import { getStudents } from '../../http';

const StudentData = () => {
    const navigate = useNavigate();

    const [seaechInput, setSearchInput] = useState('');
    const [filteredStudents, setFilteredStudents] = useState(s2019s);

    const filterSearch = (value) => {
        setSearchInput(value);
        let filterData;
        if (value.includes("2019"))
            filterData = s2019s.filter(stdnt => stdnt.enroll.toLowerCase().includes(value.toLowerCase()));
        else
            filterData = s2019s.filter(stdnt => stdnt.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredStudents(filterData);
    }

    return (
        <div className="batch2019 container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className=" container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto", borderBottom: "1px dotted gray" }}>2019 IT Students</h2>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search by Name or Enroll" value={seaechInput} onChange={(e) => { filterSearch(e.target.value) }} />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="batch2019-table-scroll">
                    <table id="customers">
                        <tr className="head">
                            <th>ID</th>
                            <th>Registration Number</th>
                            <th>Name</th>
                            <th>Enrollment</th>
                        </tr>
                        {filteredStudents.map((stdnt, index) => {
                            return (
                                <tr className="rows">
                                    <td>{index + 1}</td>
                                    <td>{stdnt.rN0}</td>
                                    <td>{stdnt.name}</td>
                                    <td>{stdnt.enroll}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
            <a href="/syllabus/2019_student.pdf" download style={{ display: "inline-block", textAlign: "end", width: "96%" }}>Download 2019 Batch PDF</a>
        </div >
    )
}

export default StudentData