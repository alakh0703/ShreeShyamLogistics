import React, { useState } from 'react';
import './styles/ContactUs.css'; // Import the CSS

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        city: '',
        state: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the form here
        // Submit form data logic
    };

    return (
        <div className="contact_container" id='contactus'>
            <div className="contact_form">
                <h2 className="contact_title">Get in touch</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="contact_inputGroup">
                        <div className="contact_row">
                            <div className="contact_inputWrapper">
                                <label>Name <span className="required">*</span></label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="contact_inputWrapper">
                                <label>Company</label>
                                <input type="text" name="company" value={formData.company} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="contact_row">
                            <div className="contact_inputWrapper">
                                <label>City</label>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                            </div>
                            <div className="contact_inputWrapper">
                                <label>State</label>
                                <input type="text" name="state" value={formData.state} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="contact_row">
                            <div className="contact_inputWrapper">
                                <label>Phone <span className="required">*</span></label>
                                <div className="phone_input">
                                    <span className="country_code">+91</span>
                                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="contact_inputWrapper">
                                <label>Email <span className="required">*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="contact_inputWrapper">
                        <label>Your Message <span className="required">*</span></label>
                        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="contact_button">Send Message</button>
                </form>
            </div>
            <div className="contact_info">
                <h2 className="contact_title">Contact us</h2>
                <p className="contact_detail"><i className="contact_icon">📍</i> Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="contact_detail"><i className="contact_icon">📞</i> Phone: +123 456 7890</p>
                <p className="contact_detail"><i className="contact_icon">✉️</i> Email: info@lorem.com</p>
                <p className="contact_detail"><i className="contact_icon">🌐</i> Website: www.lorem.com</p>
                <div className="map_container">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.877909055077!2d-79.23678398832395!3d43.78096114403781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d0f9e74c63e7%3A0xd09cbdb12ddd10d5!2s1280%20Markham%20Rd%2C%20Scarborough%2C%20ON%20M1H%203B4!5e1!3m2!1sen!2sca!4v1728843351836!5m2!1sen!2sca"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        title="Google Map"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
