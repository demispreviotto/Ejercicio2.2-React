import React, { useState } from 'react';
import './Reservation.css'

const ReservationForm = () => {
    const initialValue = {
        email: '',
        date: '',
    };

    const [reservationData, setReservationData] = useState(initialValue);

    const handleInputChange = (e) => {
        setReservationData({
            ...reservationData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        reservations.push(reservationData);
        localStorage.setItem('reservations', JSON.stringify(reservations));

        setReservationData(initialValue);
    };

    return (
        <div className='reservation'>
            <h2>Reservation Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    value={reservationData.email}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={reservationData.date}
                    onChange={handleInputChange}
                    required
                />

                <button type="submit">Submit Reservation</button>
            </form>
        </div>
    );
};

export default ReservationForm;
