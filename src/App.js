import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.aeroprime.in/crm-service/payment/getClientCredits', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbElkIjoiYWRtaW5AYWVyb3ByaW1lLmluIiwiaWQiOjEsImV4cCI6MTcyODgzMzAyMH0.FTDSJ9iLFrsQZX931lwMt8XWYqqnBKbbPvzY0QxxE_xCnpyX-Z2snr0p6A1lXoPt',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        })
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>AeroPrime Client Credits</h1>
            <div className="content">
                <div><strong>Role:</strong> {data.role}</div>
                <div><strong>Email ID:</strong> {data.emailId}</div>
                <div><strong>Is Super Admin:</strong> {data.is_super_admin ? 'Yes' : 'No'}</div>
                <div><strong>Can Add Balance:</strong> {data.can_add_balance ? 'Yes' : 'No'}</div>
                <div><strong>Can Create Super Agent:</strong> {data.can_create_super_agent ? 'Yes' : 'No'}</div>
                <div><strong>Can Cancel Booking:</strong> {data.can_cancel_booking ? 'Yes' : 'No'}</div>
                <div><strong>Airline Codes:</strong></div>
                <ul>
                    {data.airlineCodes.map((code, index) => (
                        <li key={index}>{code}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
