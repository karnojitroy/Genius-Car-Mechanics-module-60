import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { _id } = useParams();
    const [service, setService] = useState({});
    console.log(_id);
    useEffect(() => {
        // const url = `http://localhost:5000/services/${serviceId}`
        // console.log(url);
        fetch(`http://localhost:5000/services/${_id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [_id]);
    return (
        <div>
            <h4>This is Booking: {_id}</h4>
            <p>{service.name}</p>
            {
                console.log('name', service)
            }
        </div>
    );
};

export default Booking;