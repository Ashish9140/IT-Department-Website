import {
    Link
} from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [showBar, setShowBar] = useState(true);
    let width;


    const hideBars = () => {
        width = window.innerWidth;
        if (width <= 600)
            document.querySelector(".navbar-toggler").click();
        else
            console.log(width);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ fontWeight: "bold" }} >Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse hide" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Academics
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li> <Link to="/degree-program" className="dropdown-item" onClick={hideBars}>Degree Programs</Link></li>
                                <li> <Link to="/vision-mission" className="dropdown-item" onClick={hideBars}>Vision and Mission</Link></li>
                                <li> <Link to="/outcomes" className="dropdown-item" onClick={hideBars}>Outcomes</Link></li>
                                <li> <Link to="/courses" className="dropdown-item" onClick={hideBars}>Courses</Link></li>
                                <li> <Link to="/coordinators" className="dropdown-item" onClick={hideBars}>Coordinators</Link></li>
                                <li> <Link to="/D-committee" className="dropdown-item" onClick={hideBars}>Committee</Link></li>
                                <li> <Link to="/news-letter" className="dropdown-item" onClick={hideBars}>Department Newsletter</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                People
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li> <Link to="/faculty" className="dropdown-item" onClick={hideBars}>Faculty</Link></li>
                                <li> <Link to="/phd-scholars" className="dropdown-item" onClick={hideBars}>PhD Students</Link></li>
                                <li> <Link to="/student" className="dropdown-item" onClick={hideBars}>Students</Link></li>
                                {/* <li><a className="dropdown-item" href="/">Alumni</a></li> */}
                                <li> <Link to="/staff" className="dropdown-item" onClick={hideBars}>Staff</Link></li>
                                {/* <li><a className="dropdown-item" href="/">Join Us</a></li> */}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Research
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li> <Link to="/research-area" className="dropdown-item" onClick={hideBars}>Areas</Link></li>
                                <li> <Link to="/research-papers" className="dropdown-item" onClick={hideBars}>Papers</Link></li>
                                <li><Link className="dropdown-item" to="/labs" onClick={hideBars}>Labs</Link></li>
                                <li> <Link to="/laboratories" className="dropdown-item" onClick={hideBars}>Laboratories</Link></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                News and Events
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li> <Link to="/news-letter" className="dropdown-item">Department Newsletter</Link></li>
                                <li><a className="dropdown-item" href="/">Talks By Visitors</a></li>
                                <li><a className="dropdown-item" href="/">IT Seminar</a></li>
                                <li><a className="dropdown-item" href="/">News and Highlights</a></li>
                                <li><a className="dropdown-item" href="/">Internal</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Student Activities
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/student-awards" onClick={hideBars}>Awards</Link></li>
                                <li><Link className="dropdown-item" to="/facilities" onClick={hideBars}>Facilities</Link></li>
                                {/* <li><a className="dropdown-item" href="/">Teaching Assistant Award</a></li>
                                <li><a className="dropdown-item" href="/">Student Project Award</a></li> */}
                                <li><a className="dropdown-item" href="/" onClick={hideBars}>Placement Brochure</a></li>
                                <li><a className="dropdown-item" href="/" onClick={hideBars}>Graduate Batch Photos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/contact"
                                onClick={hideBars}>
                                Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar