import React from 'react';
import { useState } from 'react';

const EditInput = ({ review, handleApprovingStatus }) => {
    const [isEditing, setEditing] = useState(false);
    const { _id, service, message, } = review || {};
    const [input, setInput] = useState(message || "")

    const updating = () => {
        setEditing(false)
        handleApprovingStatus(_id, input)
    }

    return (
        <div className='w-10/12 mx-auto'>
            <form>
                <textarea className='border border-black w-full' name="" id="" cols="30" rows="10"></textarea>
                <button className='btn btn-primary' onClick={() => setEditing(true)}>update</button>
            </form>
        </div>
    );
};

export default EditInput;