import React from 'react';

const ErrorPage = () => {

    const backgroundpage = {
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '97vh',
        overflow: 'hidden',
        background: 'linear-gradient(to right, var(--azulclaroapp), var(--azulescuroapp))',
        borderRadius: '20px',
        boxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
        padding: '20px',
        color: 'white',
    };

    return (
        <div style={backgroundpage}>
            <h1 style={{fontSize:'60px'}}>404 Not Found</h1>
            <p>Oops! A página que você está procurando não existe.</p>
            <p>A ParkHub está trabalhando para que isso não ocorra novamente.</p>
        </div>
    );
};

export default ErrorPage;
