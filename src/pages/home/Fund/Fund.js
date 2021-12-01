import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Fund.css';
import { Container, Row, Spinner } from 'react-bootstrap';

const Fund = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://whispering-anchorage-92161.herokuapp.com/service`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <Container >
            {
                services?.length === 0 ? <Spinner style={{ marginLeft: "50%", marginTop: "15%", position: 'absolute' }} animation="border" variant="primary" />
                    :
                    <Row >

                        {
                            services.map(service => <Service service={service}></Service>)
                        }

                    </Row>
            }
        </Container>
    );
};

export default Fund;