import React, { useState } from 'react';
import { Button, Flex, Form, Input, Card, Alert } from 'antd';
import { useNavigate  } from "react-router-dom";
import api from '../services/api';

function CreateView() {
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const createSupplier = async (values) => {
        try {
            await api.post('/suppliers', values);
            navigate('/list');
        } catch(error) {
            setError(true);
        }
    }

    return (
        <div style={{height: '100%'}}>
            {
                error &&
                <Alert
                    message="Error"
                    description="Um erro ocorreu ao tentar cadastrar o fornecedor!"
                    type="error"
                    closable
                    showIcon
                />
            }

            <Flex justify="center" align="center" vertical style={{height: '100%'}}>
                <Card
                    title="Cadastrar Fornecedor"
                    style={{
                        width: 500,
                    }}
                >
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        style={{
                            maxWidth: 600,
                            borderColor: '#000'
                        }}
                        initialValues={{
                            remember: true,
                        }}

                        onFinish={createSupplier}

                        autoComplete="off"
                    >
                        <Form.Item
                            label="Nome"
                            name="nome"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor digite o nome do fornecedor!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="CNPJ"
                            name="cnpj"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor digite CNPJ do fornecedor!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Endereço"
                            name="endereco"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor digite endereço do fornecedor!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Telefone"
                            name="telefone"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor digite telefone do fornecedor!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor digite telefone do fornecedor!',
                                },
                            ]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                            offset: 4,
                            span: 24,
                            }}
                        >   
                            <Button type="primary" htmlType="submit">
                                Cadastrar
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Flex>
        </div>
    )
}

export default CreateView;