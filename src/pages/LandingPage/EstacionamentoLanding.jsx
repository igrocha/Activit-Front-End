import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import vagasData from '../Home/Empresas.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function DetalheVagaLanding() {
    const [items] = useState(vagasData);

    const browserSpecificStyles = {
        WebkitBoxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
        MozBoxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
    };

    const cardStyle = {
        backgroundColor: 'transparent',
        maxWidth: 500,
        marginBottom: 1,
        ...browserSpecificStyles,
    };

    const backgroundpage = {
        minHeight: '100vh',
        background: 'linear-gradient(to right, var(--azulclaroapp), var(--azulescuroapp))',
        borderRadius: '0px',
        padding: '20px',
        color: 'white',
    };

    /* julia */

    const cardContainerStyle = {
        justifyContent: 'center', // Alinhando os cards ao centro
        marginTop: 10,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
    };

    const h2Style = {
        textAlign: 'center',
        color: 'white',
    };

    const divStyle = {
        textAlign: 'center',
        color: 'white',
        fontSize: '20px',
        padding: '20px',
    };

    const botaoDetalheVagaStyle = {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '25px',
        padding: '10px',
        backgroundColor: 'var(--azulescuroapp)',
        borderRadius: '20px',
        boxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    };

    return (
        <div style={backgroundpage}>
        <h1 style={{margin: 'auto',marginTop: 50, textAlign: 'center'}}>Estacionamentos Parceiros</h1>
            <div style={{  ...cardContainerStyle }}>
                {items.map((vaga) => (
                    <div style={{ margin: '1px'}}>
                        <Card key={vaga.id} sx={cardStyle}>
                            <CardContent>
                                <h2 style={h2Style}>{vaga.estabelecimento}</h2>
                                <div style={divStyle}>{vaga.localizacao}</div>
                                <div style={divStyle}>Horário de funcionamento: {vaga.horario}</div>
                                <div style={divStyle}>Contato: {vaga.contato}</div>
                                <div style={divStyle}>Valores: 1h - R$ {vaga.valorhora}</div>
                                <div style={{ textAlign: 'center', alignItems: 'center' }}>
                                    <Link style={botaoDetalheVagaStyle} to={`/vaga/${vaga.id}`}>
                                        <Button style={{ ...linkStyle }} component={Link} to="/Login">Reservar</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
