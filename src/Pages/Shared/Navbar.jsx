import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContextProvider';
import logo from '../../assets/logo/cube-store-logo-black.png';
import avatar from '../../assets/avatar.png';



const Navbar = () => {
    
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch( error => console.log(error))
    }


    const navItems = <>
        <li><NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/all-cubes">All Cubes</NavLink> </li>
        
        
        <li> <NavLink to="/blogs">Blogs</NavLink> </li>
        { user?  <>
            <li> <NavLink to="/my-cubes">My Cubes</NavLink> </li>
            <li> <NavLink to="/add-cube">Add a Cube</NavLink> </li>
            <li><button onClick={handleLogOut}>Log out</button></li>
        </> 
        : <li> <NavLink to="/login">Login</NavLink> </li>
       }
    </>
    return (
        <div className="navbar h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className='w-56'>
                    <Link to="/" className="normal-case text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden ml-28 lg:flex">
                <ul className="menu menu-horizontal text-lg font-medium space-x-1 px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end mr-20">
                {
                    user && <>
                        <div className="avatar tooltip tooltip-left" data-tip={user?.displayName ? user.displayName : 'User Name'}>
                            <div className="w-12 rounded-full">
                                <img src={user?.photoURL ? user.photoURL : avatar} />
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;