import {
    Link
} from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-middle">
                <div className="footer-card">
                    <p>Developer : </p>
                    <a href="https://ashish91.vercel.app" target="_blank"><p className='ashish'>Ashish Kumar</p></a>
                    <p className='dev-harshit'>Harshit Dubey</p>
                </div>
                <div className="footer-card">
                    <Link to="/login">Login</Link>
                    <a href="https://nitsri.ac.in/" target="_blank">NIT Srinagar</a>
                    <Link to="/credits">Credits</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        </footer >
    )
}