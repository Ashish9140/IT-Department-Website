import {
    useNavigate
} from "react-router-dom";

const Phd = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="container container1">
                <div className="history">
                    <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                    <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
                </div>
                <div className=" container-fluid container2">
                    <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold" }}>PhD Students</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 border-color d-flex justify-content-center ">

                            </div>
                            <div className="col-4 fontem-heading-phd border-color d-flex justify-content-center ">
                                Name and Research Area
                            </div>
                            <div className="col-5 fontem-heading-phd border-color-contact d-flex justify-content-center">
                                Contact
                            </div>
                        </div>
                    </div>
                    <div className="designtions container">
                        <div className="row">
                            <div className="col bg-designations-color d-flex justify-content-center">
                                <span className="whiteHead"><u>Scholars</u></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 border-color d-flex justify-content-center box-size">
                                <img src="/img/kaleem.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Kalimullah Lone</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p> Information Technology </p><br />
                                        <p className="d_block2">Big Data, Cloud Computing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        kalimullahlone@gmail.com<br /><br />
                                        <span>Enroll number: 2018PHAITE003</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color d-flex justify-content-center box-size">
                                <img src="/img/Jehangir.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" style={{ textDecoration: "none" }}>&nbsp;Jehangir Ali</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />
                                        <p className="d_block2">
                                            Blockchain and Internet of Things
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact d-flex justify-content-center fontem ">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        jehangirnit@gmail.com&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br />
                                        <span>Enroll number: <br /> 2018PHAITE004<br />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/shahid.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Shahid Sultan</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology </p><br />

                                        <p className="d_block2">Machine learning, IoT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        shahid454@hotmail.com&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br /><br />
                                        <span>Enroll number: 2018PHAITE002<br /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/nadeem.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Nadeem Yousuf</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />

                                        <p className="d_block2">Machine Learning</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        njkhan91@gmail.com&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<br /><br />
                                        <span>Enroll number: 2018PHAITE001<br />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/dummyf.png" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Ravesa Akhtar</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />
                                        <p className="d_block2">IoT, WSN,Machine learning</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        ravesaakhter@gmail.com&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <br /><br />
                                        <span>Enroll number: 2018PHAITE005</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/khurshid.jpg" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Khurshid Bhat

                                    </a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Tecchnology</p><br />
                                        <p className="d_block2">Artificial Intelligence,Data Science</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        ksdbhat99@gmail.com &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br /><br />
                                        <span>Enroll number: 2019PHAITE002</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/dummyf.png" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Iqra Jan</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />
                                        <p className="d_block2">IoT,Bioinformatics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        janiqra2007@gmail.com&nbsp; &nbsp;&nbsp; &nbsp;<br /> <br />
                                        <span>Enroll number: 2019PHAITE001</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/dummyf.png" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Bisma Gulzar</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />
                                        <p className="d_block2">Personal Internet of Things
                                            (PIoT)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        bismagulzzar.bg@gmail.com
                                        &nbsp; &nbsp;&nbsp; &nbsp;<br /> <br />
                                        <span>Enroll number: 2021PHAITE001</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/dummyf.png" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Aqsa Ashraf Makhdomi</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />
                                        <p className="d_block2">Optimization with Fairness
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        makhdoomiaqsa@gmail.com
                                        &nbsp; &nbsp;&nbsp; &nbsp;<br /> <br />
                                        <span>Enroll number: 2021PHAITE002</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/dummyf.png" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Mahvish Khurshid Bijli</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />
                                        <p className="d_block2">Swarm Robotics
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        mahvishhk95@gmail.com
                                        &nbsp; &nbsp;&nbsp; &nbsp;<br /> <br />
                                        <span>Enroll number: 2021PHAITE003</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/dummyf.png" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Uzmat Ul Nisa</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />
                                        <p className="d_block2">Computer Architecture, On- chip Networks
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        uzmatulnisa@gmail.com
                                        &nbsp; &nbsp;&nbsp; &nbsp;<br /> <br />
                                        <span>Enroll number: 2021PHAITE004</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/dummyf.png" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Khushbu Mushtaq</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />
                                        <p className="d_block2">Image processing, Fog computing, Deep Learning
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        sheikh.khushbu13@gmail.com
                                        &nbsp; &nbsp;&nbsp; &nbsp;<br /> <br />
                                        <span>Enroll number: 2021PHAITE005</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/dummyf.png" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Bisma Majid</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />
                                        <p className="d_block2">Machine Learning, Deep Learning, Quantum Computing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        bhatbisma3333@gmail.com
                                        &nbsp; &nbsp;&nbsp; &nbsp;<br /> <br />
                                        <span>Enroll number: 2021PHAITE006</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="designtions container">
                        <div className="row">
                            <div className="col-3 border-color-2 d-flex justify-content-center box-size">
                                <img src="/img/fasu.png" className="img-fluid img-thumbnail img-css" alt="" />
                            </div>
                            <div className="col-4 border-color-2 p-2 fontem" style={{ lineHeight: "20px" }}>
                                <div className="row ">
                                    <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Md Fasihuddin</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>Information Technology</p><br />
                                        <p className="d_block2">Machine Learning, IOT,Cloud Computing,Cyber Security
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 border-color-contact-2 d-flex justify-content-center fontem">
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        fasi.csengg@gmail.com
                                        &nbsp; &nbsp;&nbsp; &nbsp;<br /> <br />
                                        <span>Enroll number: 2022PHSITE001</span>
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

export default Phd