import React, { useState } from 'react';
import { db } from "@/utils/firebase"; // Ensure you have firebase setup
import { setDoc, doc } from "firebase/firestore"; // Import Firestore functions
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

    const [isSubmitting, setIsSubmitting] = useState(false); // For submit button state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, company, city, state, phone, email, message } = formData;

        // Simple field validation
        // generarte randomn number in range of 100000 to 999999
        const random = (Math.floor(Math.random() * Math.random() * 99999999) + 1000000).toString();

        if (!name) {
            alert('Name is required');
            return;
        }

        if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        if (!email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (!message || message.length > 1000) {
            alert('Message is required and should be less than 1000 characters');
            return;
        }

        setIsSubmitting(true); // Disable submit button
        try {
            await setDoc(doc(db, "contacts", random), {
                name,
                company,
                city,
                state,
                phone,
                email,
                message,
                timestamp: new Date() // Optional: Add timestamp
            });


            alert('Form submitted successfully!');

            // Reset the form
            setFormData({
                name: '',
                company: '',
                city: '',
                state: '',
                phone: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form: ', error);
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false); // Re-enable submit button
        }
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
                    <button type="submit" className="contact_button" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Send Message'}
                    </button>
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
                        loading="lazy"
                        title="Google Map"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
