import React from 'react';
import './styles/Footer.css'; // Import the CSS

const Footer = () => {
    return (
        <footer className="footer_container">
            <div className="footer_content">
                {/* About Company */}
                <div className="footer_section footer_about">
                    <h4>About Company</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                </div>

                {/* Services */}
                <div className="footer_section footer_services">
                    <h4>Services</h4>
                    <ul>
                        <li>Automobile Transport</li>
                        <li>Cargo Transport</li>
                        <li>Mining Transport</li>
                        <li>Freight Forwarding</li>
                        <li>Logistics Consulting</li>
                    </ul>
                </div>

                {/* At a Glance */}
                <div className="footer_section footer_glance">
                    <h4>At a Glance</h4>
                    <p>Our Clients</p>
                </div>

                {/* Get in Touch */}
                <div className="footer_section footer_contact">
                    <h4>Get in Touch</h4>
                    <p>Phone: 999-999-9999</p>
                    <p>Email: xyz@gmail.com</p>
                    <p>Address: 1234 Logistics Street, City, Country</p>
                    <div className="footer_socials">
                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer_copyright">
                <p>&copy; 2024 Shree Shyam Logistics. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
