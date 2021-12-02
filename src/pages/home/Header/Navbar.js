import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import UseAuth from '../../../Firebase/UseAuth';
import './Header.css';
import logo from '../../../logos/Group 1329.png';

const Navbar = () => {

    const { user } = UseAuth();
    const history = useHistory();

    const handaleHistoryPush = () => {
        history.push(`/myEvent/${user?.email}`)
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/home">
                    <img width="120" src={logo} alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item" onClick={handaleHistoryPush}>
                            My Event
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
        // <nav>

        //    <aside>
        //        <NavLink to='/home'>Home</NavLink>    

        //        <NavLink to='/blog'>Blog</NavLink>    
        //        <NavLink to='/event'>Events</NavLink> 
        //        <p onClick={handaleSetLocation}className="d-inline">My Events</p>  
        //        <span className='text-danger'>{user?.displayName}</span> 
        //    </aside>

        //    <aside>
        //         <button className="btn btn-primary px-4 py-1">Register</button>
        //         <button className="btn btn-dark px-4 py-1" onClick={handaleHistoryPush}>Admin</button>
        //    </aside>

        // </nav>
    );
};

export default Navbar;