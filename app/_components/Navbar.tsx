"use client"
import React, { useEffect } from 'react';
import Logo from "../_assets/Logo.png";
import "./styles/Navbar.css";
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [admin, setAdmin] = useState(false);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    }


    useEffect(() => {
        const loc = window.location.href;
        if (loc.includes('admin-admin')) {
            setAdmin(true);
        }
        else {
            setAdmin(false);
        }
    }, []);

    return (
        <>
            {!admin && <div className='navbar_container'>
                <div className='navbar_logo'>
                    <Image src={Logo} alt='Logo' className='navbar_logo2' />
                </div>
                <div className='navbar_links'>
                    <p><a href='#hero'>Home</a></p>
                    <p>Company</p>
                    <p><a href='#services'>Services</a></p>
                    <p><a href='#contactus'>Contact Us</a></p>
                    <p><a href='#testimonials'>Testimonials</a></p>
                </div>
                <div className='navbar_contact'>
                    <div className='navbar_callIcon'>📞</div>
                    <div className='navbar_contactInfo'>
                        <p>999-999-9999</p>
                        <p>xyz@gmail.com</p>
                    </div>
                </div>
                <div className='navbar_hamburger'>
                    <label htmlFor="check" className='navbar_ham_label'>
                        <input type="checkbox" id="check" onChange={toggleSidebar} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                {sidebar && <div className='navbar_sidebar'>
                    <div className='navbar_sidebar_links'>
                        <p><a href='#hero' onClick={toggleSidebar}>Home</a></p>
                        <p>Company</p>
                        <p><a href='#services' onClick={toggleSidebar}>Services</a></p>
                        <p><a href='#contactus' onClick={toggleSidebar}>Contact Us</a></p>
                        <p><a href='#testimonials' onClick={toggleSidebar}>Testimonials</a></p>
                        <div className='navbar_contact2'>
                            <div className='navbar_callIcon'>📞</div>
                            <div className='navbar_contactInfo'>
                                <p>999-999-9999</p>
                                <p>xyz@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>}
        </>
    );
};

export default Navbar;
