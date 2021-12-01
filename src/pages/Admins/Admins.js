import React, { useEffect, useState } from 'react';
import './Admins.css';

const Admins = () => {

    const voolenterName = {
        height: "80px",
        display: "grid",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: "100vw",
        paddingLeft: "150px"
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://whispering-anchorage-92161.herokuapp.com/admins`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    const HandaleDeleteAdmin = id => {

        const uri = `https://whispering-anchorage-92161.herokuapp.com/admins/${id}`;
        fetch(uri, {
            method: "DELETE"
        })
            .then()
            .then(data => {
                if (data.deleteCount > 0) {
                    const remainingAdmin = users.filter(admin => admin._id !== id);
                    setUsers(remainingAdmin);
                }
            })
    }


    return (



        <section className="admin-container">





            <aside style={voolenterName}>
                <h4 >Volunteer Register List</h4>
            </aside>

            <article className=" adminTable ">
                <aside className="row-item">
                    <aside className="">
                        <p>Name</p>
                    </aside>
                    <aside className="">
                        <p>Email ID</p>
                    </aside>
                    <aside className="ms-5 ps-3">
                        <p>Registating Date</p>
                    </aside>
                    <aside className="ms-5">
                        <p>Volunteer list</p>
                    </aside>
                    <aside className="ms-5">
                        <p>Action</p>
                    </aside>
                </aside>
                {
                    users.map(user => <article>

                        <aside className="admin-list">
                            <aside className="">
                                <p> {user?.name} </p>
                            </aside>
                            <aside className="">
                                <p> {user?.email}</p>
                            </aside>
                            <aside className="ms-5 ps-3">
                                <p> {user.date}</p>
                            </aside>
                            <aside className="ms-5">
                                <p> {user.service} </p>
                            </aside>
                            <aside className="ms-5">
                                <p onClick={() => HandaleDeleteAdmin(user._id)} className="bg-danger d-inline p-1 rounded"><i className="fas fa-trash-alt text-light"></i></p>
                            </aside>
                            <aside className="col-lg-2">

                            </aside>


                        </aside>

                    </article>)
                }
            </article>
        </section>
    );
};

export default Admins;