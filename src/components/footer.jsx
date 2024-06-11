import React from 'react'

function footer() {
    return (
        <div className="footer-content">
            <div className="footer-left">
                <p>&copy; Fashion Fusion</p>
                <p>Phone: 123-456-7890</p>
                <p>Email: info@fashionfusion.com</p>
                <p>Address: 123 Main St, Anytown, USA</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
            <div className="footer-right">
                <ul className="social-links">
                    <li><img src="icons8-facebook-48.png" alt="Facebook" /></li>
                    <li><img src="icons8-twitter-48.png" alt="Twitter" /></li>
                    <li><img src="icons8-linkedin-48.png" alt="LinkedIn" /></li>
                </ul>
                <ul className="footer-nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default footer