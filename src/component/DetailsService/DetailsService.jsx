import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/ContextProvider';
import Review from '../Review/Review';


const DetailsService = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const { _id, img, name, description, price, } = useLoaderData();
    const [reviews, setReviews] = useState();
    const notify = () => toast.success('Successfully Added')


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;

        if (message === '') {
            return alert('please enter a description')
        }
        const reviews = {
            service: _id,
            customer: user?.displayName,
            uid: user?.uid,
            createdAt: new Date().getTime(),
            message
        }

        fetch('https://server-site-reviw-website-farhan-sharif.vercel.app/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    notify();
                    form.reset()
                }
            })

    }

    useEffect(() => {
        fetch('https://server-site-reviw-website-farhan-sharif.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

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

            {/* Review item  */}
            <div>
                {
                    reviews?.filter(review => review.service === _id)
                        ?.sort((a, b) => b.createdAt - a.createdAt)
                        ?.map(revi => <Review key={revi._id} revi={revi} />)
                }
            </div>
            <div className='my-12'>
                <h2 className="text-center mx-auto font-bold text-3xl">Reviews</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        {
                            user?.accessToken ?
                                <div className='flex m-2 mb-4'>
                                    <img title={user.displayName} className='rounded-full  mr-3 w-14 ' src={user.photoURL} alt="" />
                                    <p className='text-indigo-600 font-semibold bg-indigo-200 px-4 py-1 rounded-xl'>{user.displayName}</p>
                                </div> : <div className=' my-3 text-indigo-600 font-semibold bg-indigo-200 px-4 py-1 rounded-xl inline-block '>Please <span onClick={() => navigate('/login')} className=" text-red-500 cursor-pointer ">login</span>  to leave feedback </div>
                        }

                        <textarea name="message" id="" cols="30" rows="5" className='w-full border border-gray-700 p-3 mr-3' placeholder='Write your text'></textarea>

                        {
                            user?.accessToken ?
                                <input type="submit" value="Add Review" className='font-bold bg-orange-600 px-5 py-2 text-white cursor-pointer' /> : <input onClick={() => navigate('/login')} value="Add Review" className='font-bold bg-orange-300  px-5 py-2 text-white cursor-pointer' />
                        }


                    </div>

                </form>
            </div>
        </div>
    );
};

export default DetailsService;