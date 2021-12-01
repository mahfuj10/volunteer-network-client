import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { singleServiceContext } from '../Details/SingleDetials';
import './Regester.css';
import logo from '../../logos/Group 1329.png';
import { Link } from 'react-router-dom';

const Regester = () => {

    const { register, handleSubmit } = useForm();
    const [service] = useContext(singleServiceContext);

    const onSubmit = data => {

        data.image = service?.img;
        data.title = service?.name;


        fetch(`https://whispering-anchorage-92161.herokuapp.com/admins`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => { })

    }

    return (

        <>
            <Link to="/home">
                <img width="250" style={{ marginLeft: "45%", marginTop: "10%" }} src={logo} alt="" />
            </Link>
            <section className="regester-container">

                <h5 className=" mb-4 fw-bold">Register as a Volunteer</h5>
                <form className="mt-1" onSubmit={handleSubmit(onSubmit)}>


                    <input placeholder="Full Name" {...register("name", { required: true })} /> <br /><br />
                    <input placeholder="Email" {...register("email", { required: true })} /> <br /><br />
                    <input placeholder="Description" {...register("description", { required: true })} /> <br /><br />
                    <input className="date"  {...register("date", { required: true })} type="date" /> <br /><br />
                    <input   {...register("service", { required: true })} value={service?.name} /> <br /><br />

                    <input className="btn btn-primary" type="submit" />
                </form>

            </section>
        </>
    );
};
export default Regester;
