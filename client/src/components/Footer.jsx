import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="corporate-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About</h4>
                    <p>
                        Helping you discover local events, meet like-minded people, and stay connected to your community effortlessly.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: rovsajol@company.com</p>
                    <p>Phone: 09**-***-****</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                    <p>&copy; {currentYear} KCX. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
