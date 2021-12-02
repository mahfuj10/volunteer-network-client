import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Fund.css';

const Service = ({ service }) => {

    const history = useHistory();
    const { img, name } = service;

    const singleDetails = id => {
        history.push(`/service/${id}`);

    }

    return (

        <Col xs={12} md={6} lg={3} style={{ marginBottom: '80px' }} onClick={() => singleDetails(service._id)}>
            <aside className="service-item" style={{ backgroundColor: `${service?.color}` }}>
                <h5 className="text-center">{name}</h5>
            </aside>
            <img width="270" height="320" src={img} className="vollenterImg" alt="vollenterImg" />
        </Col>
    );
};

export default Service;