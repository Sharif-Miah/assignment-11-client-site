import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import SignleReviewTr from './SignleReviewTr';


const MyReview = () => {
    const data = useLoaderData()

    const [comment, setComment] = useState()
    const [dataDelt, setDataDelt] = useState(true)
    const [orders, setOrder] = useState([]);
    const toastify = () => toast.success('successfully Delete')

    useEffect(() => {
        fetch(`https://server-site-reviw-website-farhan-sharif.vercel.app/review`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order')
        if (proceed) {
            fetch(`https://server-site-reviw-website-farhan-sharif.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount
                        > 0) {
                        toastify()
                        setDataDelt(false)
                        console.log(dataDelt)
                        const remainging = orders.filter(odr => odr._id !== id);
                        setOrder(remainging)
                    }
                })
        }
    }



    const handleApprovingStatus = (id, message) => {
        fetch(`https://server-site-reviw-website-farhan-sharif.vercel.app/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-4xl text-center mb-12'>My Review </h1>
            <div>
                {
                    data?.length === 0 ? <h1 className='text-3xl text-center text-red-600'>No Review added</h1> : <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>sl</th>
                                    <th>Service Name</th>
                                    <th className='w-4/6'>Review</th>
                                    <th>edit</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((review, i) => <SignleReviewTr review={review} key={review._id} i={i} handleDelete={handleDelete} handleApprovingStatus={handleApprovingStatus} />)
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    )
}

export default MyReview