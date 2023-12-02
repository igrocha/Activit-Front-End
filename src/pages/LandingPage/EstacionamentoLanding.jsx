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
        maxWidth: 500,
        margin: 'auto',
        marginBottom: 2, // Espaçamento inferior entre os cards
        ...browserSpecificStyles,
    };

    return (
        <div>
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
                                <Button component={Link} to="/Login">Reservar</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
