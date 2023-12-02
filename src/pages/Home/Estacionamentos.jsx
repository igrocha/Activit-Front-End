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
    };

    const cardStyle = {
        borderRadius: '30px',
        maxWidth: 500,
        margin: 'auto',
        marginBottom: 2, // Espaçamento inferior entre os cards
        ...browserSpecificStyles,
    };

    return (
        <div>
            <h1 style={{maxWidth: 500, margin: 'auto', marginBottom: 10, borderRadius: '10px', textAlign: 'center'}}>Estacionamentos Disponiveis</h1>
            {items.map((vaga) => (
                <Card key={vaga.id} sx={cardStyle}>
                    <CardContent>
                        <h2>{vaga.estabelecimento}</h2>
                        <h5>{vaga.localizacao}</h5>
                        <p>Horário de funcionamento: {vaga.horario}</p>
                        <p>Contato: {vaga.contato}</p>
                        <p>Valores:</p>
                        <p>1h - {vaga.valorhora}</p>
                        <p>Mensal - {vaga.valormensal}</p>
                        <div style={{ marginTop: 'auto', textAlign: 'right' }}>
                            <Link to={`/vaga/${vaga.id}`}>
                                <Button style={{ backgroundColor: 'var(--azulclaroapp)', borderRadius: '10px' }} variant="contained" >Reservar</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
