// TopBar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';

const TopBar = ({ usuario }) => {
    const [showMessage, setShowMessage] = useState(false);

    // Configurando a animação
    const props = useSpring({
        opacity: 1,
        transform: showMessage ? 'rotateY(-360deg)' : 'rotateY(0deg)',
        config: { duration: 500 },
    });

    useEffect(() => {
        // Lógica para exibir a mensagem após 1 segundo
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
                        ? `Olá ${usuario}, bem-vindo ao ParkHub`
                        : 'ParkHub'}
                </animated.span>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', marginRight: '20px' }}>
                <Stack direction="row" spacing={3}>
                    <Button
                        component={Link}
                        to="/Vagas"
                        style={{ backgroundColor: 'var(--pretopuro)', color: 'var(--brancopuro)', borderRadius: '8px', ...buttonneonstyles }}>
                        Estacionamentos
                    </Button>
                    <Button
                        component={Link}
                        to="/gerenciar-conta"
                        style={{ backgroundColor: 'var(--pretopuro)', color: 'var(--brancopuro)', borderRadius: '8px', ...buttonneonstyles }}
                    >
                        <SettingsIcon style={{ color: 'white', marginRight: '10px' }} /> CONTA
                    </Button>
                </Stack>
            </div>
        </div>
    );
};

export default TopBar;
