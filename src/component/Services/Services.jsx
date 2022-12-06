import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleServiceCart from '../SingleServiceCart/SingleServiceCart';
import { ColorRing } from 'react-loader-spinner';



const Services = () => {
    const [allServices, setAllServices] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://server-site-reviw-website.vercel.app/allservices')
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }


    return (
        <div>
            <h1 className='text-5xl text-center text-red-400 my-12'>All Services Here</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mx-auto'>
                {
                    allServices?.map(allService => <SingleServiceCart key={allService._id} allService={allService} />)
                }
            </div>
        </div>
    );
};

export default Services;