import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import vagasData from './Empresas.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function DetalheVaga() {
    const [items] = useState(vagasData);

    const browserSpecificStyles = {
        WebkitBoxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
        MozBoxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
        color: 'white'
    };

    const buttonneonstyles = {
        WebkitBoxShadow: '0px 0px 5px 0px var(--azulclaroapp)',
        backgroundColor: 'var(--pretopuro)',
        color: 'var(--brancopuro)',
        borderRadius: '8px',
    };

    const cardStyle = {
        borderRadius: '30px',
        maxWidth: 500,
        margin: 'auto',
        marginBottom: 2,
        ...browserSpecificStyles,
        background: 'linear-gradient(to right, var(--azulclaroapp), var(--azulescuroapp))',
    };

    return (
        <div>
            <h1 style={{ maxWidth: 500, margin: 'auto', marginBottom: 10, borderRadius: '10px', textAlign: 'center' }}>Estacionamentos Disponiveis</h1>
            {items.map((vaga) => (
                <Card key={vaga.id} sx={cardStyle}>
                    <CardContent>
                        <h2>{vaga.estabelecimento}</h2>
                        <h5>{vaga.localizacao}</h5>
                        <p>Horário de funcionamento: {vaga.horario}</p>
                        <p>Contato: {vaga.contato}</p>
                        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{backgroundColor:'White', borderRadius:'10px', padding:'5px', alignItems:'center', textAlign:'center', fontWeight: 'bold'}}>
                                <p style={{color:'var(--azulclaroapp)'}}>R${vaga.valorhora}/Hr</p>
                            </div>
                            <Link to={"/ReservaEstacionamento"}>
                                <Button style={buttonneonstyles} variant="contained">Reservar</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
