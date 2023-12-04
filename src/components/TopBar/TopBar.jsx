// Esta NAVBAR é somente para pós login

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';


const TopBar = () => {
    const { username } = useParams();
    const [showMessage, setShowMessage] = useState(false);
    

    const props = useSpring({
        opacity: 1,
        transform: showMessage ? 'rotateY(-360deg)' : 'rotateY(0deg)',
        config: { duration: 500 },
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowMessage(true);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    const browserSpecificStyles = {
        WebkitBoxShadow: '0px 0px 15px 0px var(--azulchumboclaro)',
    };

    const buttonneonstyles = {
        WebkitBoxShadow: '0px 0px 5px 0px var(--azulclaroapp)',
        backgroundColor: 'var(--pretopuro)',
        color: 'var(--brancopuro)',
        borderRadius: '8px',
    };


    return (
        <div
            style={{
                margin: '10px',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(to right, var(--azulclaroapp), var(--azulescuroapp))',
                borderRadius: '20px',
                ...browserSpecificStyles,
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/vagas">
                    <img width="50" height="50" src="..\src\assets\Logo.svg" alt="Logo da Empresa" />
                </Link>
                <animated.span style={{ ...props, color: 'var(--brancopuro)', fontSize: '30px', marginLeft: '10px' }}>
                    {showMessage
                        ? `Olá ${username}, bem-vindo ao ParkHub`
                        : 'ParkHub'}
                </animated.span>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', marginRight: '20px' }}>
                <Stack direction="row" spacing={3}>
                    <Button
                        component={Link}
                        to= {`/vagas/${username}`}
                        style={buttonneonstyles}>
                        Estacionamentos
                    </Button>
                    <Button
                        component={Link}
                        to="/gerenciar-conta"
                        style={buttonneonstyles}
                    >
                        <SettingsIcon style={{ color: 'white', marginRight: '10px' }} /> CONTA
                    </Button>
                </Stack>
            </div>
        </div>
    );
};

export default TopBar;
