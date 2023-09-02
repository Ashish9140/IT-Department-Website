import {
    useNavigate
} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='not-found'>
                <div className="history">
                    <i className="fa-solid fa-circle-left" onClick={() => navigate(-1)}></i>
                    <i className="fa-solid fa-circle-right" onClick={() => navigate(1)}></i>
                </div>
                <h1>Sorry!</h1><br />
                <h3>This page is unavailable. Try again later.</h3>
            </div>
        </>
    )
}

export default NotFound