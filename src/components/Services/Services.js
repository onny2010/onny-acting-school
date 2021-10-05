import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);


    // using use effect

    useEffect(() => {
        fetch('./servicefakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="services">
            <h1 className="pt-5">Our <span className="text-danger">Services</span> </h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;