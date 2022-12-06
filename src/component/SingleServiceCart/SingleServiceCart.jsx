import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleServiceCart = ({ allService }) => {
    const { _id, img, name, description, price } = allService;




    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 w-10/12 mx-auto">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>

            <div className="flex flex-col justify-between p-2 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">Service: {name}</h2>
                    <p className="dark:text-gray-100">{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    <p className='text-xl'>Price: ${price}</p>
                </div>
                <Link to={`/AllDetailsService/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-red-400 text-white">View Details</button></Link>
            </div>
        </div>

    );
};

export default SingleServiceCart;