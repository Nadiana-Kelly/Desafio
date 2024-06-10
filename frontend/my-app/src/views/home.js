import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Title level={1}>Bem-vindo à página de Fornecedores</Title>
            <Title level={3}>Aqui você pode gerenciar todos os seus fornecedores</Title>
            <Button type="primary" size="large" onClick={() => navigate('/list')}>
                Ver Fornecedores
            </Button>
        </div>
    )
}

export default Home;