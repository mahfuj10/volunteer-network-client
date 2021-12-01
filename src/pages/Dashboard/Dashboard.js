import React, { useEffect, useState } from 'react';
import UseAuth from '../../Firebase/UseAuth';

const Dashboard = () => {

    const { user } = UseAuth();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`https://whispering-anchorage-92161.herokuapp.com/myEvent/${user?.email}`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>

            {
                events.map(event => <article className="d-flex gap-4 mb-5">
                    <aside>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5G_b3D19IW8Ppzx-qVa1R0bUZKyzLHK21mOQMrLCtgURzsQ3dC5zWJfCNt5bahQ_oGf8&usqp=CAU" width="220" alt="" />
                    </aside>
                    <aside>
                        <h4>{event?.title}</h4>
                        <h6>{event?.date}</h6>
                        <button>Cancel</button>
                    </aside>
                </article>)
            }
        </div>
    );
};

export default Dashboard;