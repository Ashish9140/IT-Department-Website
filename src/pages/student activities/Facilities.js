import {
    useNavigate
} from "react-router-dom";

const Facilities = () => {

    const navigate = useNavigate();

    return (
        <div className="container contact-container container1">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="container-fluid container2">
                <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", borderBottom: "1px dotted gray" }}>Facilities</h2>



                <div id="main-wrapper" classname="wrapper" style={{ marginLeft: "10px" }}>

                    <div classname="container grid-24 clearfix">
                        <div classname="group-cols-1 group-24 grid grid-24">

                            <div id="main-content" classname="grid grid-24 section">
                                <div classname="grid-inner clearfix">





                                    <div classname="region region-content">
                                        <div id="block-quicktabs-facilities" classname="block block-quicktabs">
                                            <div classname="block-inner clearfix">



                                                <div classname="block-content clearfix">
                                                    <div id="quicktabs-facilities" classname="quicktabs-wrapper quicktabs-style-zen jquery-once-1-processed"><div id="quicktabs-container-facilities" classname="quicktabs_main quicktabs-style-zen"><div id="quicktabs-tabpage-facilities-0" classname="quicktabs-tabpage "><div id="article-653" classname="article node node-page node-lang-en node-odd node-full  clearfix">


                                                        <div className="heading-facilities"><a href="#" rel="noopener noreferrer">General Facilities</a></div>
                                                        <div>
                                                            <div ><div ><div ><p>The department is equipped with state-of-the-art facilities to encourage research and to enable students to learn, understand and apply concepts.</p>
                                                                <p className="blue-heading-facilities" ><strong>Meeting Room and Seminar Hall:</strong> </p>
                                                                <p>The department has a meeting room equipped with LCD Projector and teleconferencing facilities. The department also has a Seminar Hall which has a seating capacity of 100. The seminar hall is used for conducting classes, seminars and workshops etc.</p>
                                                                <p className="blue-heading-facilities"><strong>Department Library:</strong><span>&nbsp;</span></p>
                                                                <p>Apart from the central library with e-library facility, the CSE dept library also has about 2500 books.</p>
                                                                <p className="blue-heading-facilities"><strong>Computing Facility:</strong></p>
                                                                <p>The department has a data centre equipped with high end server systems.</p>
                                                                <p className="blue-heading-facilities"><strong>Networking:</strong><span>&nbsp;</span></p>
                                                                <p >Backbone connectivity consisting of 24 Port Brocade&nbsp;<span >&nbsp;make&nbsp;<span data-scayt_word="L3" data-scaytid="149" >L3</span><span >&nbsp;Manageable distribution switch with &nbsp;</span><span data-scayt_word="SMF" data-scaytid="152" >SMF</span><span >&nbsp;modules,&nbsp; besides more than 14 L3/L2 Network</span><span >&nbsp;Switches, used for Network connectivity for the entire building&nbsp;</span><span >. The LAN which in turn connected to the campus wide internet connectivity through Central Computer Centre of the Institute.&nbsp;</span></span></p>
                                                            </div></div></div>  </div>


                                                    </div>

                                                    </div><div id="quicktabs-tabpage-facilities-2" classname="quicktabs-tabpage quicktabs-hide"><div id="article-728" classname="article node node-page node-lang-en node-odd node-full  clearfix">


                                                        <div className="heading-facilities"><a href="#" rel="noopener noreferrer">Facilities Management - For internal use only
                                                        </a>
                                                        </div>

                                                        <div classname="node-content">
                                                            <div classname="section field field-name-body field-type-text-with-summary field-label-hidden"><div classname="field-items"><div classname="field-item odd"><p><span ><span >To register system related&nbsp; issues:&nbsp;&nbsp;</span></span><a href="#" >Submit</a></p>
                                                                <p><span >To view the status:&nbsp;</span> <a href="#">View</a></p>
                                                                <p><br />&nbsp;</p>
                                                            </div></div></div>  </div>


                                                    </div>
                                                        </div></div></div>    </div>
                                            </div>
                                        </div>
                                        <div id="block-system-main" className="block-system">
                                            <div classname="block-inner clearfix">



                                                <div classname="block-content clearfix">
                                                    <div id="article-122" classname="article node node-page node-lang-en node-even node-full  clearfix">



                                                        <div classname="node-content">
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div >
                </div >
            </div >
        </div >

    )
}

export default Facilities