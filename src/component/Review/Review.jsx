import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import moment from 'moment/moment';

const Review = ({ revi }) => {
    const { user } = useContext(AuthContext)
    const { customer, message, createdAt } = revi
    return (
        <div className="container flex flex-col w-10/12 max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 ">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        {
                            user?.photoURL ?
                                <img src={user?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" /> : ''
                        }
                    </div>
                    <div>
                        <h4 className="font-bold">{customer}, {' '} <small className='text-gray-400'>{moment(createdAt).fromNow()}</small> </h4>
                    </div>
                </div>

            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Review;