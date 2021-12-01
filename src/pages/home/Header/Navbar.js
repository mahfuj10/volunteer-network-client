import React from 'react';
import { NavLink} from 'react-router-dom';
import { useHistory } from 'react-router'
import UseAuth from '../../../Firebase/UseAuth';
import './Header.css';

const Navbar = () => {

    const { user } = UseAuth();
    const history = useHistory();

    const handaleHistoryPush = () => {
            history.push(`/myEvent/${user?.email}`)
    }
    const handaleSetLocation = () => {
        history.push(`/myEvent/${user?.email}`)
    }

    return (

        <nav>

           <aside>
               <NavLink to='/home'>Home</NavLink>    
                   
               <NavLink to='/blog'>Blog</NavLink>    
               <NavLink to='/event'>Events</NavLink> 
               <p onClick={handaleSetLocation}className="d-inline">My Events</p>  
               <span className='text-danger'>{user?.displayName}</span> 
           </aside>

           <aside>
                <button className="btn btn-primary px-4 py-1">Register</button>
                <button className="btn btn-dark px-4 py-1" onClick={handaleHistoryPush}>Admin</button>
           </aside>
           
        </nav>
    );
};

export default Navbar;