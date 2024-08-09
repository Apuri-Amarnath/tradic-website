import React from 'react';

const NotFoundPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0', // Light grey background
            color: '#383737', // Dark text color
            textAlign: 'center'
        }}>
            <h1 style={{
                fontSize: '6rem',
                fontWeight: 'bold',
                color: '#f0a11e', // Vibrant orange for the error code
                margin: 0
            }}>
                404
            </h1>
            <p style={{
                fontSize: '1.5rem',
                color: '#000000', // Slightly lighter grey for the message
                margin: '20px 0'
            }}>
                Oops! Page Not Found
            </p>
            <a href="/" style={{
                fontSize: '1rem',
                color: '#2558ff', // Primary blue color for the link
                textDecoration: 'none',
                border: '1px solid #007bff',
                padding: '10px 20px',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease, color 0.3s ease'
            }}>
                Go Back to Home
            </a>
        </div>
    );
};

export default NotFoundPage;