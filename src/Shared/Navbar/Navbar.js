import React from 'react';
import { Link } from 'react-router-dom';
import doodle from '../../Asset/doodle.png'
const Navbar = () => {
    return (
        <div className=" navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to='/'> <li><a>Home</a></li></Link>
                       <Link to='/blogs'> <li><a>Blog</a></li></Link>
                       <Link to='/about'> <li><a>About</a></li></Link>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"> <img className='mx-3' src={doodle} alt="" /> Doodle Inc</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <Link to='/'> <li><a>Home</a></li></Link>
                <Link to='/blogs'> <li><a>Blog</a></li></Link>
                <Link to='/about'> <li><a>About</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
               
            </div>
        </div>
    );
};

export default Navbar;