import React from 'react'

const Faculty = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide faculty-carousal-display" data-bs-ride="carousel">
            <div className="carousel-inner">
                <h4>Department Faculties</h4>
                <div className="carousel-item active">
                    <div className="card faculty-card about-box-shadow">
                        <img src="/img/shabirSir.jpg" className="card-img-top" alt="png" />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Shabir Ahmad Sofi</h5>
                            <h6>HOD & Assistant Professor</h6>
                            <p className="card-textp">Wireless Sensor Networks, Internet of Things, Artificial Intelligence,
                                Machine Learning, and Big Data</p>
                            <div className="faculty-contact">
                                <div><i className="fa-solid fa-envelope me-3"></i>shabir@nitsri.net</div>
                                <div><i className="fa-solid fa-phone me-3"></i>9419009971</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card faculty-card about-box-shadow">
                        <img src="/img/JanibSir.jpg" className="card-img-top" alt="png" />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Janib Ul Bashir</h5>
                            <h6>Assistant Professor</h6>
                            <p className="card-textp">Computer Architecture, Parallel Programming, on-chip security, on-chip
                                networks</p>
                            <div className="faculty-contact">
                                <div><i className="fa-solid fa-envelope me-3"></i>janibbashir@nitsri.ac.in</div>
                                <div><i className="fa-solid fa-phone me-3"></i>8825099229</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card faculty-card about-box-shadow">
                        <img src="/img/IqraMam.jpg" className="card-img-top" alt="png" />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Iqra Altaf Gillani</h5>
                            <h6>Assistant Professor</h6>
                            <p className="card-textp">Data Algorithmics, Probabilistic Analysis of Networks, Distributed
                                Computation, Network and Data Science.</p>
                            <div className="faculty-contact">
                                <div><i className="fa-solid fa-envelope me-3"></i>iqraaltaf@nitsri.ac.in</div>
                                <div><i className="fa-solid fa-phone me-3"></i>94194539971</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card faculty-card about-box-shadow">
                        <img src="/img/AmrtipalSir.jpg" className="card-img-top" alt="png" />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Amrit Pal Singh</h5>
                            <h6>Assistant Professor</h6>
                            <p className="card-textp">Algorithms, Swarm Optimization Algorithms, Machine learning
                                optimization</p>
                            <div className="faculty-contact">
                                <div><i className="fa-solid fa-envelope me-3"></i>amrit.singh@nitsri.net</div>
                                <div><i className="fa-solid fa-phone me-3"></i>9213530406</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card faculty-card about-box-shadow">
                        <img src="/img/ShrabantiMam.png" className="card-img-top" alt="png" />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Shrabanti Mandal</h5>
                            <h6>Assistant Professor</h6>
                            <p className="card-textp">Algorithms, Swarm Optimization Algorithms, Machine learning
                                optimization</p>
                            <div className="faculty-contact">
                                <div><i className="fa-solid fa-envelope me-3"></i>shrabanti.mandal@nitsri.net</div>
                                <div><i className="fa-solid fa-phone me-3"></i>92135305466</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card faculty-card about-box-shadow">
                        <img src="/img/PrabalVerma.jpg" className="card-img-top" alt="png" />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Prabal Verma</h5>
                            <h6>Assistant Professor</h6>
                            <p className="card-textp">Algorithms, Swarm Optimization Algorithms, Machine learning
                                optimization</p>
                            <div className="faculty-contact">
                                <div><i className="fa-solid fa-envelope me-3"></i>prabal.verma@nitsri.net</div>
                                <div><i className="fa-solid fa-phone me-3"></i>92134305466</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card faculty-card about-box-shadow">
                        <img src="/img/AroojNissar.jpg" className="card-img-top" alt="png" />
                        <div className="card-body">
                            <h5 className="card-title">Ms. Arooj Nissar</h5>
                            <h6>Assistant Professor</h6>
                            <p className="card-textp">Digital Image Processing, Network Security, Computer Vision, Medical
                                Image Analysis.</p>
                            <div className="faculty-contact">
                                <div><i className="fa-solid fa-envelope me-3"></i>arooj@nitsri.net</div>
                                <div><i className="fa-solid fa-phone me-3"></i>9018853344</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon faculty-control-arrow" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon faculty-control-arrow" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Faculty