import { useNavigate } from "react-router-dom";
const Credits = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="container1">
                <div className="history">
                    <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                    <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
                </div>
                <div className="papers-wrapper-container-2">
                    <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", borderBottom: "1px dotted gray" }}>Credits</h2>
                    <br /><br />
                    <div className="credit-container">
                        <div className="designtions container">

                            <div className="row">
                                <div className="col-3  d-flex justify-content-center box-size">
                                    <img style={{ border: "1px solid black" }} src="/img/JanibSir.jpg" className="img-fluid img-css" alt="" />
                                </div>
                                <div className="col-9  p-2 fontem" style={{ lineHeight: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <div className="row ">
                                        <div className="col-12"><a title="website" href="http://janibbashir.com/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Dr. Janib Ul Bashir</a></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p> Mentor</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <br />
                        <div className="designtions container">

                            <div className="row">
                                <div className="col-3  d-flex justify-content-center box-size">
                                    <img style={{ border: "1px solid black" }} src="/img/ashish3.jpg" className="img-fluid  img-css" alt="" />
                                </div>
                                <div className="col-9  p-2 fontem" style={{ lineHeight: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <div className="row ">
                                        <div className="col-12"><a href="https://ashish91.vercel.app" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Ashish Kumar</a></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p> Undergrad@IT </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <br />

                        <div className="designtions container">

                            <div className="row">
                                <div className="col-3 d-flex justify-content-center box-size">
                                    <img style={{ border: "1px solid black" }} src="/img/Harshit.jpg" className="img-fluid  img-css" alt="" />
                                </div>
                                <div className="col-9 p-2 fontem" style={{ lineHeight: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <div className="row ">
                                        <div className="col-12"><a href="/" target="_blank" style={{ textDecoration: "none" }}>&nbsp;Harshit Dubey</a></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p> Undergrad@IT </p>
                                        </div>
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

export default Credits