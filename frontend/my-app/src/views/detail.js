// create a view screen

// Path: Desafio/frontend/my-app/src/views/view.js

import React, { useEffect, useState } from 'react';

import { Button, Flex, Form, Input, Card, Alert } from 'antd';

import { useNavigate, useParams } from "react-router-dom";

import api from '../services/api';

export default function DetailView() {
    const navigate = useNavigate();
    const [error, setError] = useState([false, '']);
    const [form] = Form.useForm();

    // get id from url react
    let { id } = useParams();

    useEffect(() => {
        function getSupplier() {
            async function loadSupplier() {
                try {
                    const response = await api.get(`/suppliers/${id}`);
                    form.setFieldsValue({
                        nome: response.data.nome,
                        cnpj: response.data.cnpj,
                        endereco: response.data.endereco,
                        telefone: response.data.telefone,
                        email: response.data.email,
                    });
                } catch(error) {
                    setError([true, "O fornecedor não foi encontrado!"]);
                }
            }

            loadSupplier();
        }

        getSupplier();
    }, [])

    return (
        <div style={{height: '100%'}}>
            {
                error[0] &&
                <Alert
                    message="Error"
                    description={error[1]}
                    type="error"
                    closable
                    showIcon
                />
            }
    
            <Flex justify="center" align="center" vertical style={{height: '100%'}}>
                <Card
                    title="Visualizar Fornecedor"
                    style={{
                        width: 500,
                    }}
                >
                    <Form
                        form={form}
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
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Nome"
                            name="nome"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="CNPJ"
                            name="cnpj"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="Endereço"
                            name="endereco"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="Telefone"
                            name="telefone"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="E-mail"
                            name="email"
                        >
                            <Input disabled />
                        </Form.Item>
    
                        <Form.Item
                            wrapperCol={{
                            offset: 4,
                            span: 24,
                            }}
                        >   
                            <Button type="primary" onClick={() => navigate('/list')}>
                                Voltar
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Flex>
        </div>
    )
}