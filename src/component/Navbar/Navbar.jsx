import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logoImg.png';
import { AuthContext } from '../../Context/ContextProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar  w-10/12 mx-auto mb-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/home'>Home</Link>
                        <Link to='/services' className='px-3'>Services</Link>
                        <Link to='/blog' className='px-3'>Blog</Link>
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl"> <img src={logoImg} className='w-16' alt="" /> DocCare</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/home'>Home</Link>
                    <Link to='/services' className='px-3'>Services</Link>
                    <Link to='/blog' className='px-3'>Blog</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="navbar-end naver-style">
                    {user?.uid ?
                        <>
                            <Link to="/myreview">MyReview</Link>
                            <Link to='/addnewservice' className='px-3'>Addnewservice</Link>
                            <button onClick={handleLogOut} className=' mx-2 lg:px-8 lg:py-2 sm:px-5 sm:py-2 lg:font-bold border lg:rounded-3xl sm:rounded-lg text-white bg-red-400 hover:bg-white hover:border-red-400 hover:text-red-400 shadow-lg shadow-red-500/50'>Log Out</button>
                        </>
                        :
                        <div><Link to='/login' className=" mx-2 px-8 py-2 font-bold border rounded-3xl text-white bg-red-400 hover:bg-white hover:border-red-400 hover:text-red-400 shadow-lg shadow-red-500/50">Login</Link>

                            <Link to='/register' className=" mx-2 px-8 py-2 font-bold border rounded-3xl text-white bg-red-400 hover:bg-white hover:border-red-400 hover:text-red-400 shadow-lg shadow-red-500/50">Register</Link></div>
                    }
                </div>
            </div>
            {
                user?.photoURL ?
                    <img title={user?.displayName} className='rounded-full w-10' src={user?.photoURL} alt="" />
                    : <FaUser />
            }
        </div >
    );
};

export default Navbar;