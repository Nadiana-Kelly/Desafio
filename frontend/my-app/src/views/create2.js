import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

function CreateView() {
    return (
        <Form
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}

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
    </Form>
    )
}

export default CreateView;