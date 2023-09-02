import {
    useNavigate
} from "react-router-dom";

const Labpage = () => {
    const navigate = useNavigate();
    return (
        <div className="courselist-wrapper-container-1 container">
            <div className="history">
                <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
            </div>
            <div className="courselist-wrapper-container-2">

                <div>
                    <p style={{ textAlign: "center" }}><span style={{ textDecoration: "underline" }}><span style={{ fontSize: "larger", color: "#339966" }}><strong>Architecture and Distributed Systems Lab</strong></span></span></p>
                    <p style={{ textAlign: "center" }}><span style={{ textDecoration: "underline" }}><span style={{ textDecoration: "underline" }}><strong></strong></span></span></p>

                    <p style={{ textAlign: "justify" }}><span >The Architecture and Distributed Systems Laboratory provides a computing environment which includes  multiple workstations, PCs, and a cluster with multi-core machines. Its mission is to support  teaching and research in all areas of parallel and distributed computing: advanced computer  architectures, operating systems, parallel programming languages, applications, and high performance  computing and networking activities in the Department of Information Technology at National Institute of Technology, Srinagar.</span></p>
                    <p><span >This lab is under the supervision of <a href="http://janibbashir.com/" target="_blank" className="external-link">Mr. Janibul Bashir</a></span></p>
                    <p>&nbsp;</p>
                    <p><span style={{ textDecoration: "underline" }}><span style={{ fontSize: "larger", color: "#339966" }}><strong>Research</strong></span></span></p>
                    <p><span style={{ color: "#000000" }}>Research projects in the Architecture and Distributed Systems lab span a wide range of areas, including:</span></p>
                    <p><strong><span style={{ color: "#000000" }}>1. Computer Architecture: </span></strong><span style={{ color: "#000000" }}>Improving the performance of multi-core chips by designing novel on-chip networks, memory systems, in-computation memory and many more.</span></p>
                    <p><strong><span style={{ color: "#000000" }}>2. On-Chip Security: </span></strong><span style={{ color: "#000000" }}>Improving the security of the chip by designing novel solutions for emerging security threats. Additionally, improving the performance of existing security solutions by bringing expensive operations out of critical path.</span></p>
                    <p><span style={{ color: "#000000" }}>&nbsp;</span><span style={{ color: "#000000" }}><strong>3. Intelligent Systems: </strong>Designing efficient systems by learning the behaviour of applications that are to be executed on those systems. Includes neuromorphic computing, robust computing platforms for deep learning, and related applications.</span></p>
                    <p><strong><span style={{ color: "#000000" }}>4. Operating Systems: </span></strong><span style={{ color: "#000000" }}>Analysing the working and performance variation across different operating systems.</span><span style={{ color: "#000000" }}>&nbsp; &nbsp;</span><span style={{ color: "#000000" }}>&nbsp;</span></p>
                    <p>&nbsp;</p>
                    <p><span style={{ textDecoration: "underline" }}><span style={{ fontSize: "larger", color: "#339966" }}><strong>Facilities</strong></span></span></p>
                </div>

            </div>
        </div >
    )
}

export default Labpage