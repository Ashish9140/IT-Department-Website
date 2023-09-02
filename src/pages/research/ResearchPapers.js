import {
    useNavigate
} from "react-router-dom";

const ResearchPapers = () => {
    const navigate = useNavigate();
    return (
        <div className="papers-wrapper-container-1 container">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="papers-wrapper-container-2">
                <p className="papers-Heading">Research Papers</p>

                <br /><br />
                <div className="main-page-papers">

                    <p><span className="font-of-papers-years"><strong >2022</strong></span></p>
                    {/* <p><span className="font-of-papers-content-no">1.<strong> "PersonalInternet-Of-Things (PIoT): A Vision for Hyper- Personalization Delivered Securely."</strong>, Bisma Gulzar, and Ankur Gupta ,Maiden Edition of IEEE Delhi Section International Conference on&nbsp;<em> Electrical, Electronics and Computer Engineering</em>, IEEE DELCON-2022.</span></p> */}

                    {/* <p><span className="font-of-papers-content-no">2.<span><strong>&nbsp; "Energy Efficient Distributed Spectrum Sensing in
                        presence of Malicious Users"</strong>,<span>&nbsp;</span><span> Aqsa Ashraf Makhdomi and G. R. Begh,</span>&nbsp;</span>in<em> IEEE Networking Letters, doi: 10.1109/LNET.2022. 3152078.</em><span>,&nbsp;</span><em>40</em><span>, p.100374.</span></span></p> */}

                    <p><span className="font-of-papers-content-no">1.&nbsp;<span><strong>"Crowd Sourcing and Blockchain-Based Incentive Mechanism to Combat Fake News"</strong><span>, Munaza Farooq, Aqsa Ashraf Makhdomi, and Iqra Altaf Gillani.&nbsp;</span></span><em>Combating Fake News with Computational Intelligence Techniques.</em><span>&nbsp;
                        p.102814. Springer, Cham, Vol. 1001, 299-325, Jan 2022. doi.org/10.1007/978-3-030-90087-8_15</span></span></p>
                    <p>&nbsp;</p>


                    <p><span className="font-of-papers-years"><strong>2021</strong></span></p>

                    <p><span className="font-of-papers-content-no">1. <strong>Inventive Investment Using
                        Bigdata: Tools, Applicability and Challenges
                        Associated</strong>, Janib ul Bashir, Tahir Ahmad Wani, In&nbsp;<em>Computational
                            Management</em>, pp. 599-627. Springer, Cham, 2021.</span></p>
                    <p><span className="font-of-papers-content-no">2.<span><strong>&nbsp;Taxonomy,
                        state-of-the-art, challenges and applications of visual understanding: a
                        review</strong>,<span>&nbsp;</span><span>Khanday, N.Y. and Sofi,
                            S.A.,</span>&nbsp;</span><em>Computer Science
                                Review</em><span>,&nbsp;</span><em>40</em><span>, p.100374.</span></span></p>
                    <p><span className="font-of-papers-content-no">3.&nbsp;<span><strong>Deep
                        Insight: Convolutional Neural Network and its Applications for COVID-19
                        Prognosis.</strong>&nbsp;<span>Khanday, N.Y. and Sofi,
                            S.A.&nbsp;</span></span><em>Biomedical Signal Processing and Control</em><span>,
                                p.102814.</span></span></p>
                    {/* 1. Bisma Gulzar, and Ankur Gupta. "DAM: A Theoretical Framework for Sensor Security in IoT Applications", International Journal of Next- Generation Computing 12.3 (2021) */}
                    {/* <p><span className="font-of-papers-content-no">4.&nbsp;<span><strong>"DAM: A Theoretical Framework for Sensor Security in IoT Applications",</strong>&nbsp;<span>Bisma Gulzar, and Ankur Gupta.&nbsp;</span></span><em>International Journal of Next-Generation Computing</em><span>, 12.3 (2021)</span></span></p> */}

                    <p><span className="font-of-papers-content-no">4.&nbsp;<span><strong>"Blockchain-based Incentive Mechanism to Combat Fake News",</strong>&nbsp;<span>Munaza Farooq, Aqsa Ashraf Makhdomi, Iqra
                        Altaf Gillani.&nbsp;</span>In </span><em> Proc. of 2021 Intl. Conf. on Advances in Cyber Security (ACeS 2021),</em><span> August 2021. doi.org/10.1007/ 978-981-16-8059-5_5</span></span></p>
                    <p>&nbsp;</p>






                    <p><strong className="font-of-papers-years">2020</strong></p>
                    <p><span className="font-of-papers-content-no">1.&nbsp;<strong>SecONet:
                        A Security Framework for a Photonic Network On-Chip</strong>, Janib ul Bashir, Chandran
                        Goodchild, Smruti R. Sarangi, Design Automation Conference (DAC), [virtual], accepted as a
                        poster. Accepted as full paper at International Symposium on Network on Chips (NOCS),
                        Germany.</span></p>
                    <p><span className="font-of-papers-content-no"><span>2.&nbsp;<strong>A
                        Queueing Network-Based Distributed Laplacian
                        Solver,&nbsp;</strong></span>Iqra Altaf Gillani, Amitabha Bagchi.In
                        Proceedings of of the 32nd ACM Symposium on Parallelism in Algorithms and Architectures (SPAA
                        '20), pp 535-537, July 2020.</span></p>
                    <p><span className="font-of-papers-content-no">3.&nbsp;<span><strong>GPUOPT:
                        Power Efficient Photonic Network-on-Chip for a Scalable GPU</strong>, Janibul Bashir,
                        Smruti R. Sarangi. ACM Journal on Emerging Technologies in Computing Systems (ACM JETC),
                        2020.</span></span></p>
                    <p><span className="font-of-papers-content-no"><span>4.&nbsp;</span><strong><span>Blockchain as an
                        Alternative</span></strong></span><span></span><span><span className="font-of-papers-content-no">&nbsp; Mechanism
                            for Securing IoT Ecosystems by
                            Jehangir Ali, Shabir A. Sofi. In Annual Convention of Computer Society of India
                            2020.</span></span></p>
                    <p><span><span><span><span className="font-of-papers-content-no">5.&nbsp;</span><strong><span className='font-of-papers-content-no'><span>Ensuring
                        Security and Transparency in Distributed Communication in IoT ecosystems
                        using Blockchain Technology: Protocols, Applications and
                        Challenges</span></span></strong></span><span><span className="font-of-papers-content-no">&nbsp;by
                            Jehangir Ali, Shabir A. Sofi. International Journal of computing and digital
                            systems.</span></span></span></span></p>
                    <p><span className="font-of-papers-content-no">6.&nbsp;<strong>SecSched:
                        Flexible Scheduling in Secure Processors&nbsp;</strong>by Omais Shafi, Janibul Bashir. In
                        International conference on parallel architecture and compilation techniques (PACT 2020).</span>
                    </p>
                    {/* <p><span className="font-of-papers-content-no">7.&nbsp;<strong>Parameter Estimation of Software Reliability Growth Model&nbsp;</strong>by Bisma Gulzar Mir, Sheikh Riyaz-ul-Haq. In
                        Journal of Artificial Intelligence Research & Advances. 2020; 7(1): 15–22p..</span>
                    </p> */}
                    <p>&nbsp;</p>




                    <p><strong className="font-of-papers-years">2019</strong></p>
                    <p><span><span><span><span className="font-of-papers-content-no">1. <strong>Predict, Share, and Recycle your Way to Low
                        Power Nanophotonic Networks</strong>, Janibul Bashir, Smruti R. Sarangi. ACM
                        Journal on Emerging Technologies in Computing Systems (ACM JETC), 16(1), 2019.
                    </span></span></span></span></p>
                    <p><span><span><span><span className="font-of-papers-content-no">2. Iqra Altaf Gillani, Amitabha Bagchi.
                        <strong>A Distributed Laplacian Solver and its Applications to Electrical Flow and
                            Random
                            Spanning Tree Computation.</strong>
                        arXiv:1905.04989.</span></span></span></span></p>
                    <p><span><span><span><span className="font-of-papers-content-no">3. <strong>Power efficient Photonic
                        Network-on-Chip for a
                        Scalable GPU</strong>, Janibul Bashir, Khushal Sethi and Smruti R. Sarangi.
                        International Symposium on Networks-on-Chip (NOCS), New
                        York.</span></span></span></span></p>
                    <p><span><span><span><span className="font-of-papers-content-no">4. <strong>SpliESR: Tunable Power Splitter
                        based on an
                        Electro-Optic Slotted Ring Resonator</strong>, Rajib R. Ghosh, Janibul Bashir,
                        Smruti R. Sarangi, Anuj Dhawan, Optics Communications, vol:442, ages
                        117-122.</span></span></span></span></p>
                    <p><span className='font-of-papers-content-no'><span><span><span>5. <strong>BigBus: A Scalable Optical
                        Interconnect</strong>, Janibul Bashir, Eldhose Peter, and Smruti R. Sarangi. ACM
                        Journal of Emerging Technologies in Computing Systems (ACM JETC),
                        15(1).</span></span></span></span></p>
                    <p><span className='font-of-papers-content-no'>6. <strong>Slotted Electro-optic Ring
                        Resonator as a Tunable Optical Power Splitter</strong>, Rajib R.
                        Ghosh, Janib Bashir, Smruti R. Sarangi, Anuj Dhawan, SPIE Photonics
                        West, OPTO, Silicon Photonics XIV, San Francisco,
                        USA.</span></p>
                    <p>
                        <span className='font-of-papers-content-no'>7.
                            <strong>A Survey of On-chip Optical
                                Interconnects</strong>, Janibul
                            Bashir, Eldhose Peter, and Smruti R.
                            Sarangi. ACM Computing Surveys,
                            51(6),
                            2019.</span>
                    </p>
                    <p><span>8.<strong>
                        <span className='font-of-papers-content-no'>Light-weight, Real-time Internet Traffic Classification, </span></strong><span>Z.
                            Iqbal, R. Rahim, I.A. Gillani. IEEE international conference on Advanced Networks and
                            Telecommunications Systems (ANTS), 2019.</span></span></p>
                    {/* 
                    <p><span>9.<strong>
                        <span className='font-of-papers-content-no'>"A Study of Parameter Estimation Techniques for Reliability of Software System", </span></strong><span className='font-of-papers-content-no'>Bisma Gulzar. Mir, Sheikh Riyaz-ul-Haq, Ab Waheed. Lone. Journal of Software Engineering Tools & Technology Trends. 2019; 6(1): 1–6p.</span></span></p>

                    <p><span>10.<strong>
                        <span className='font-of-papers-content-no'>"Reliability of Software System: A Particle Swarm Approach", </span></strong><span className='font-of-papers-content-no'>Bisma Gulzar Mir, Sheikh Riyaz-ul-Haq. Journal of Multimedia Technology & Recent Advancements. 2019; 6(1): 7–12p.</span></span></p> */}
                    <p>&nbsp;</p>
                    <p><span><span><span><strong
                        className="font-of-papers-years">2017</strong></span></span></span>
                    </p>
                    <p><span><span><span>
                        <span className='font-of-papers-content-no'>1. Iqra Altaf Gillani, Pooja Vyavahare, and Amitabha
                            Bagchi. <strong>Random walk-based in-network computation of arbitrary
                                functions.</strong> arXiv:1702.03741.
                        </span></span></span></span></p>
                    <p><span className='font-of-papers-content-no'><span><span><span>2. Iqra Altaf Gillani, Amitabha Bagchi, and Pooja
                        Vyavahare. <strong>A Stochastic Process on a Network with Connections to Laplacian
                            Systems of Equations.</strong> arXiv:1701.05296.</span></span></span></span></p>
                    <p><span className='font-of-papers-content-no'><span><span><span>3. <strong>Natural algorithm based adaptive architecture
                        for underwater wireless sensor networks</strong> by Shabir Sofi and RN Mir.
                        International Conference on Wireless Communications, Signal Processing and
                        Networking (WiSPNET), 2017.<br /></span></span></span></span></p>
                    <p><span className='font-of-papers-content-no'><span><span><span>4. <strong>NUPLet: A Photonics Based Multi-Chip NUCA
                        Architecture</strong>, Janibul Bashir, Smruti R. Sarangi, ICCD (International
                        Conference on Computer Design), Boston, USA.</span></span></span></span></p>
                    <p><span className='font-of-papers-content-no'>5. <strong>Poster: BigBus: A Scalable
                        Optical Interconnect</strong> by Eldhose Peter, Janib-ul Bashir,
                        and Smruti R. Sarangi. PACT (Parallel Architectures and Compilation
                        Techniques), Portland,
                        USA.</span></p>
                    <p>
                        <span className='font-of-papers-content-no'>6. <strong>Optical
                            Overlay NUCA: A High Speed Substrate for Shared
                            L2 Caches</strong>, by Eldhose Peter, Anuj
                            Arora, Janibul Bashir, Akriti Bagaria, and Smruti R.
                            Sarangi. ACM Journal on Emerging Technologies in
                            Computing Systems (JETC),
                            13(4).</span>
                    </p>
                </div>
            </div >
        </div >
    )
}

export default ResearchPapers