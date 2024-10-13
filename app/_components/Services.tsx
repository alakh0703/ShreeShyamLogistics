import React from 'react';
import TruckImage from '../_assets/truck.png';
import CargoImage from '../_assets/transport.png';
import OtherTruck from '../_assets/delivery.png';
import LogisticTruck from '../_assets/delivery-truck.png';
import EcommerseTruck from '../_assets/food-truck.png';
import './styles/Services.css'; // Import the CSS
import Image from 'next/image';

const Services = () => {
    return (
        <div className='services_container' id='services'>
            <h1 className='services_title'>Our Services</h1>
            <div className='services_grid'>
                <div className='services_card'>
                    <Image src={TruckImage} alt='Truck' className='services_image' />
                    <h2>Automobile Transport</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, illo!</p>
                </div>
                <div className='services_card'>
                    <Image src={LogisticTruck} alt='Truck' className='services_image' />
                    <h2>Freight Transport</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, illo!</p>
                </div>
                <div className='services_card'>
                    <Image src={CargoImage} alt='Truck' className='services_image' />
                    <h2>Cargo Transport</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, illo!</p>
                </div>
                <div className='services_card'>
                    <Image src={EcommerseTruck} alt='Truck' className='services_image' />
                    <h2>Ecommerce Transport</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, illo!</p>
                </div>
                <div className='services_card'>
                    <Image src={OtherTruck} alt='Truck' className='services_image' />
                    <h2>Other</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, illo!</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
