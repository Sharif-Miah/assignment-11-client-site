import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignleService from '../SignleService/SignleService';
import { FaArrowRight } from 'react-icons/fa';

const ThreeService = () => {
    const [services, setServices] = useState()

    useEffect(() => {
        fetch('https://server-site-reviw-website-farhan-sharif.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data);
            })
    }, [])

    return (
        <div className='my-14 w-10/12 mx-auto'>
            <h1 className='text-5xl text-center my-12'>Service </h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mx-auto'>
                {
                    services?.map(service => <SignleService key={service._id} service={service} />)
                }
            </div>
            <div className='text-end my-9'>
                <Link to='/services'><button className="btn bg-red-400 hover:bg-red-400 border-red-400">All Services <FaArrowRight /></button></Link>
            </div>
        </div>
    );
};

export default ThreeService;