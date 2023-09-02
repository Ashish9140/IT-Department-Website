import {
    useNavigate
} from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className="container contact-container container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", borderBottom: "1px dotted gray" }}>Contact</h2>
                <div className="contact-flex">
                    <div>
                        <div className="designtions container">
                            <div className="address">
                                <span>Postal Address</span><br /><br />

                                <p>Department of Information Technology, National Institute of Technology,<br />
                                    Hazaratbal,Srinagar, Jammu & Kashmir, India <br />
                                    Pin-190006</p>

                                <span>Phone</span> : 0194-2424809, 2429423, Ext-2701 <br />

                                <span>Fax</span> : 0194-2424809, 2420475 <br />

                                <span>Email</span>: hodit@nitsri.net
                            </div>

                            <div className='social-media-icons-contacts'>
                                <span style={{ color: "grey", fontSize: "14px" }}>We're on Social Networks. Follow us & get in touch.</span><br />
                                <a href="https://www.facebook.com/nitsriofficial" target="_blank" title="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>

                                <a href="https://www.linkedin.com/school/nitsriofficial" target="_blank" title="linkedin">
                                    <i className="fa fa-linkedin"></i>
                                </a>

                                <a href="https://twitter.com/nitsriofficial" target="_blank" title="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/nitsriofficial/" target="_blank" title="instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='map-container-contactPage'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6605.65311853437!2d74.8287874697754!3d34.125189699999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185afae42b685%3A0xdf5ec84b1ac8f98d!2sNational%20Institute%20of%20Technology%20(NIT)%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1653319915615!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact