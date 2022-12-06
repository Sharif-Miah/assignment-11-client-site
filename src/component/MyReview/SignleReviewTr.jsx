import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const SignleReviewTr = ({ review, i, handleDelete, handleApprovingStatus }) => {
    const [isEditing, setEditing] = useState(false)


    const { _id, service, message, } = review || {};
    const [input, setInput] = useState(message || "")

    const updating = () => {
        setEditing(false)
        handleApprovingStatus(_id, input)
    }


    return (
        <tr>
            <th>{i + 1}</th>
            <td>{service}</td>
            <td className='flex flex-wrap '>{!isEditing ? <span>{input}</span> : <input className='border border-black' type="text" defaultValue={input} value={input} onChange={(e) => setInput(e.target.value)} />}</td>
            <td >{
                !isEditing ? <button onClick={() => setEditing(true)}><AiFillEdit /></button>
                    : <button onClick={updating}>update</button>

            }  </td>
            <td> <span onClick={() => handleDelete(_id)}><AiFillDelete /></span> </td>
        </tr>


    )
}

export default SignleReviewTr