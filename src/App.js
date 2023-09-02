import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";


import Placements from "./pages/student activities/Placements";




// components import
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";


// Usual Pages
import Home from "./pages/usual-pages/Home";
import Contact from "./pages/usual-pages/Contact";
import WelcomePage from "./pages/usual-pages/WelcomePage";
import Coursematerial from "./pages/usual-pages/Coursematerial";
import NotFound from "./pages/usual-pages/NotFound";
import Egovernance from "./pages/usual-pages/Egovernance";
import Credits from "./pages/usual-pages/Credits";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";


// Academics
import DegreeProgram from "./pages/academics/DegreeProgram";
import BtechProgram from "./pages/academics/BtechProgram";
import PhdProgram from "./pages/academics/PhdProgram";
import Vision from "./pages/academics/Vision";
import Outcomes from "./pages/academics/Outcomes";
import POs from "./pages/academics/POs";
import PSOs from "./pages/academics/PSOs";
import CourseList from "./pages/academics/CourseList";
import CourseDes from "./pages/academics/CourseDes";
import FacultyCoordinators from "./pages/academics/FacultyCoordinators";
import DepartmentLetter from "./pages/academics/DepartmentLetter";


// People
import Faculty from "./pages/people/Faculty";
import Phd from "./pages/people/Phd";
import Student from "./pages/people/Student";

import S2022Batch from "./pages/people/students/S2022Btach";
import S2021Batch from "./pages/people/students/S2021Batch";
import S2020Batch from "./pages/people/students/S2020Batch";
import S2019Batch from "./pages/people/students/S2019Batch";
import S2018Batch from "./pages/people/students/S2018Batch";
import S2017Batch from "./pages/people/students/S2017Batch";
import S2016Batch from "./pages/people/students/S2016Batch";
import S2015Batch from "./pages/people/students/S2015Batch";
import Staff from "./pages/people/Staff";
import DepartmentalC from "./pages/academics/DepartmentalC";


// Research Area
import ResearchArea from "./pages/research/ResearchArea";
import ResearchPapers from "./pages/research/ResearchPapers";
import Lab from "./pages/research/Lab";
import Laboratories from "./pages/academics/Laboratories";
import Labpage from "./pages/research/Labpage";

// Student Activities
import Awards from "./pages/student activities/Awards";
import Facilities from "./pages/student activities/Facilities";


function App() {


  const [Load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);



  return (

    <>

      {
        Load ?

          <WelcomePage />
          :

          <div className="container main-cnt">

            {/* Logo and Name */}
            <div className="navTop">
              <img src="/img/logo3.webp" alt="logo" />
              <div className="logo-text">
                <h3>Department of Information Technology</h3>
                <h6>National Institute of Technology Srinagar</h6>
              </div>
            </div>

            {/* Navbar */}

            <Router>
              <div>

                <Navbar />

                <Routes>


                  <Route exact path="/test1" element={<Test />} />
                  <Route exact path="/test2" element={<Test2 />} />
                  <Route exact path="/plc" element={<Placements />} />


                  {/* Usual Pages */}
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/staff" element={<Staff />} />
                  <Route exact path="/contact" element={<Contact />} />
                  <Route exact path="/e-governance" element={<Egovernance />} />
                  <Route exact path="/course-syllabus" element={<Coursematerial />} />
                  <Route exact path="/news-letter" element={<DepartmentLetter />} />
                  <Route exact path="/credits" element={<Credits />} />


                  {/* Academics */}
                  <Route exact path="/degree-program" element={<DegreeProgram />} />
                  <Route exact path="/degree-program/btech-p" element={<BtechProgram />} />
                  <Route exact path="/degree-program/phd-p" element={<PhdProgram />} />
                  <Route exact path="/vision-mission" element={<Vision />} />
                  <Route exact path="/outcomes" element={<Outcomes />} />
                  <Route exact path="/outcomes/POs" element={<POs />} />
                  <Route exact path="/outcomes/PEOs&PSOs" element={<PSOs />} />
                  <Route exact path="/courses" element={<CourseList />} />
                  <Route exact path="/courses/des" element={<CourseDes />} />
                  <Route exact path="/coordinators" element={<FacultyCoordinators />} />
                  <Route exact path="/D-committee" element={<DepartmentalC />} />


                  {/* People */}
                  <Route exact path="/faculty" element={<Faculty />} />
                  <Route exact path="/phd-scholars" element={<Phd />} />
                  <Route exact path="/student" element={<Student />} />

                  {/* Students Page */}
                  <Route exact path="/student/batch_2022" element={<S2022Batch />} />
                  <Route exact path="/student/batch_2021" element={<S2021Batch />} />
                  <Route exact path="/student/batch_2020" element={<S2020Batch />} />
                  <Route exact path="/student/batch_2019" element={<S2019Batch />} />
                  <Route exact path="/student/batch_2018" element={<S2018Batch />} />
                  <Route exact path="/student/batch_2017" element={<S2017Batch />} />
                  <Route exact path="/student/batch_2016" element={<S2016Batch />} />
                  <Route exact path="/student/batch_2015" element={<S2015Batch />} />


                  {/* Research Area */}
                  <Route exact path="/research-area" element={<ResearchArea />} />
                  <Route exact path="/research-papers" element={<ResearchPapers />} />
                  <Route exact path="/labs" element={<Lab />} />
                  <Route exact path="/labs/lab1" element={<Labpage />} />
                  <Route exact path="/laboratories" element={<Laboratories />} />

                  {/* Student Activities */}
                  <Route exact path="/student-awards" element={<Awards />} />
                  <Route exact path="/facilities" element={<Facilities />} />


                  {/* for redirecting */}
                  <Route path="*" element={<NotFound />} />


                </Routes>

                <Footer />

              </div>
            </Router>
          </div>

      }

      <div className="copy-right">
        <p className="text-center text-xl p-0 m-0">&copy; Copyright 2023 - NIT Srinagar  All rights reserved.</p>
      </div>

    </>
  );
}

export default App;
