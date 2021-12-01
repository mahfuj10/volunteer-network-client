import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Regester from '../Regester/Regester';

export const singleServiceContext = createContext();

const SingleDetials = () => {

    const { id } = useParams();
    const [service, setService] = useContext(singleServiceContext);

    useEffect(() => {
        fetch(`https://whispering-anchorage-92161.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <section>
            <Regester />
        </section>
    );
};

export default SingleDetials;