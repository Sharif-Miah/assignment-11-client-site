import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const AllDetailsService = () => {
    const { img, name, description, price } = useLoaderData()
    return (
        <div className='w-10/12 mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">Service: {name}</h2>
                    <h2 className="card-title">Price: ${price}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllDetailsService;