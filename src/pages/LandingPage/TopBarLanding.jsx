import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const TopBarLanding = () => {

    const headerneonstyle = {
        WebkitBoxShadow: '0px 0px 15px 0px var(--azulchumboclaro)',
    };

    const buttonneonstyles = {
        WebkitBoxShadow: '0px 0px 5px 0px var(--azulclaroapp)',
    };

    return (
        <div style={{ margin: '10px', padding: '8px', display: 'flex', alignItems: 'center', background: 'linear-gradient(to right, var(--azulclaroapp), var(--azulescuroapp))', borderRadius: '20px', ...headerneonstyle}}>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <Link to="/">
                    <img width="50" height="50" src="..\src\assets\Logo.svg" alt="Logo da Empresa" />
                </Link>
                <span style={{ color: 'var(--brancopuro)', fontSize: '30px', marginLeft:'10px'}}>ParkHub</span>
            </div>
            <div style={{ marginLeft: 'auto', marginRight: '10px' }}>
                <Stack direction="row" spacing={2}>
                    <Button component={Link} to="/estacionamentos" style={{ backgroundColor: 'var(--pretopuro)', color: 'var(--brancopuro)', borderRadius: '8px', ...buttonneonstyles}}>
                        Estacionamentos
                    </Button>
                    <Button component={Link} to="/pagina2" style={{ backgroundColor: 'var(--pretopuro)', color: 'var(--brancopuro)', borderRadius: '8px', ...buttonneonstyles}}>
                        Vantagens
                    </Button>
                    <Button component={Link} to="/pagina2" style={{ backgroundColor: 'var(--pretopuro)', color: 'var(--brancopuro)', borderRadius: '8px', ...buttonneonstyles}}>
                        Sobre
                    </Button>
                    <Button component={Link} to="/Register" style={{ color: 'var(--azulclaroapp)', fontSize: '13px'}}>
                        criar conta
                    </Button>
                    <Button component={Link} to="/Login" style={{ backgroundColor: 'var(--pretopuro)', color: 'var(--brancopuro)', borderRadius: '8px', ...buttonneonstyles}}>
                        Entrar
                    </Button>
                </Stack>
            </div>
        </div>
    );
};

export default TopBarLanding;
