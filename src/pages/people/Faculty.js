import {
    useNavigate
} from "react-router-dom";
const Faculty = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="container container1 faculty-and-phd-responsive">
                <div className="history">
                    <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                    <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
                </div>
                <div className=" container-fluid container2">
                    <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold" }}>Faculty</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 border-color d-flex justify-content-center ">

                            </div>
                            <div className="col-4 fontem-heading border-color d-flex justify-content-center ">
                                Name and Research Area
                            </div>
                            <div className="col-5 fontem-heading border-color-contact d-flex justify-content-center">
                                Contact
                            </div>
                        </div>
                    </div>
                    <div className="designtions container">
                        <div className="row">
                            <div className="col bg-designations-color d-flex justify-content-center">
                                <span className="whiteHead"><u>HOD IT</u></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 border-color d-flex justify-content-center box-size">
                                <img src="/img/shabirSir.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Dr.
                                        Shabir Ahmad Sofi</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p> HOD and Assistant Professor </p>
                                        <p className="d_block"> PhD </p>
                                        <p className="d_block2">Wireless Sensor Networks, Internet of Things, Artificial
                                            Intelligence, Machine Learning, and Big Data</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        shabir@nitsri.net<br /><br />
                                        <span>+91 1234567890(Head's office)<br />
                                            +91 9419009971</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col bg-designations-color d-flex justify-content-center">
                                <span className="whiteHead"><u>Faculty</u></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 border-color d-flex justify-content-center box-size">
                                <img src="/img/AmrtipalSir.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" style={{ textDecoration: "none" }}>&nbsp;Dr.
                                        Amrit Pal Singh</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Assistant Professor </p>
                                        <p className="d_block"> PhD</p>
                                        <p className="d_block2">
                                            Algorithms, Swarm Optimization Algorithms, Machine learning optimization
                                        </p>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact d-flex justify-content-center fontem ">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        amrit.singh@nitsri.net&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br />
                                        <span>+91 9213530406<br />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/AroojNissar.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Ms. Arooj Nissar</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Assistant Professor </p>
                                        <p className="d_block"> PhD. </p>
                                        <p className="d_block2">Digital Image Processing, Network Security, Computer Vision, Medical Image Analysis.</p> <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        arooj@nitsri.net&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /><br />
                                        <span>+91 9018853344<br /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/IqraMam.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Dr. Iqra Altaf Gillani</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Assistant Professor </p>
                                        <p className="d_block"> PhD (IIT Delhi)</p>
                                        <p className="d_block2">Data Algorithmics, Probabilistic Analysis of Networks, Distributed Computation, Network and Data Science.</p> <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        iqraaltaf@nitsri.ac.in&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<br /><br />
                                        <span>94194539971<br />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/JanibSir.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a title="website" href="http://janibbashir.com/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Dr. Janib Ul Bashir

                                    </a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Assistant Professor </p>
                                        <p className="d_block"> PhD (IIT Delhi)</p>
                                        <p className="d_block2">Computer Architecture, Parallel Programming, on-chip security, on-chip networks</p> <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        janibbashir@nitsri.ac.in&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                        <br /><br />
                                        <span>+91
                                            8825099229</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/PrabalVerma.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Dr. Prabal Verma
                                    </a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Assistant Professor </p>
                                        <p className="d_block"> PhD</p>
                                        <p className="d_block2">Algorithms, Swarm Optimization Algorithms, Machine learning optimization</p> <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        prabal.verma@nitsri.net &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br /><br />
                                        <span>
                                            +91 92134305466</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/ShrabantiMam.png" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Dr. Shrabanti Mandal

                                    </a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p> Assistant Professor </p>
                                        <p className="d_block"> PhD</p>
                                        <p className="d_block2">Algorithms, Swarm Optimization Algorithms, Machine learning optimization</p> <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        shrabanti.mandal@nitsri.net  &nbsp; &nbsp;&nbsp; &nbsp;<br /> <br />
                                        <span>+91
                                            92135305466</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faculty