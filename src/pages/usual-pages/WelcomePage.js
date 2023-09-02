import React from 'react'

const WelcomePage = () => {
    return (
        <div className="spinner-box">
            <img src="/img/logo3.webp" alt="wel-logo" />
            <div className="pulse-container">
                <div className="pulse-bubble pulse-bubble-1"></div>
                <div className="pulse-bubble pulse-bubble-2"></div>
                <div className="pulse-bubble pulse-bubble-3"></div>
            </div>
        </div>
    )
}

export default WelcomePage