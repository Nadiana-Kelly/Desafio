import React, { useEffect, useState } from 'react';
import { Button, Flex, Form, Input, Card, Alert } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import api from '../services/api';

export default function UpdateView() {
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

    const updateSupplier = async (values) => {
        try {
            await api.put('/suppliers/' + id, values);
            navigate('/list');
        } catch(error) {
            setError([true, "Um erro ocorreu ao tentar atualizar o fornecedor!"]);
        }
    }

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
                    title="Atualizar Fornecedor"
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

                        onFinish={updateSupplier}

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
                                Atualizar
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Flex>
        </div>
    )
}