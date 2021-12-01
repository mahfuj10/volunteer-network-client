import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Fund.css';

const Service = ({ service }) => {

    const history = useHistory();
    const { img, name, color } = service;

    const singleDetails = id => {
        history.push(`/service/${id}`);

    }

    return (

        <Col lg={3} style={{ marginBottom: '80px' }} onClick={() => singleDetails(service._id)}>
            <aside className="service-item" style={{ backgroundColor: `${service?.color}` }}>
                <h5 className="text-center">{name}</h5>
            </aside>
            <img width="270" height="320" src={img} alt="" />
        </Col>
    );
};

export default Service;