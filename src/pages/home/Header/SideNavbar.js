import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../logos/Group 1329.png';

const SideNavbar = () => {
    return (
        <article style={{width:"300px",height:"100vh",backgroundColor:"#FFFFFF"}} className="side-nav ">
            <img src={logo} width="202" className="ms-5 p-2" alt="" />
            <NavLink activeStyle={{color:"#0D8BF0"}} to="/adminslist" className="pt-5 mb-3"><i class="fas fa-user-friends"></i>  Volunteer register list</NavLink>
            <NavLink activeStyle={{color:"#0D8BF0"}} to="/addevent"><i class="fas fa-plus"></i> Add event</NavLink>
        </article>
    );
};

export default SideNavbar;