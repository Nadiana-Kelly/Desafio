import { useState, useEffect } from "react";
import api from '../services/api'
import { Layout, Table } from "antd";
import { Col, Row, Flex, Button, Popconfirm, notification  } from 'antd';
import { useNavigate, Link  } from "react-router-dom";

function getDate(date) {
    return date.substr(0, date.indexOf('T'));
}

function TableView() {
    const [suppliers, setSuppliers] = useState([]);
    const navigate = useNavigate();

    const [api_, contextHolder] = notification.useNotification();

    const openNotification = (pauseOnHover, message) => () => {
            api_.open({
            message: 'Notification Title',
            description: message,
            showProgress: true,
            pauseOnHover,
        });
    };

    useEffect(() => {
        async function loadSuppliers() {
            try {
                const response = await api.get('/suppliers');
    
                for(let i = 0; i < response.data.length; i++) {
                    response.data[i].dataCriacao = getDate(response.data[i].dataCriacao);
                    response.data[i].dataAtualizacao = getDate(response.data[i].dataAtualizacao);
                }
    
                setSuppliers(response.data);
            } catch (error) {
                console.log('falha ao carregar os fornecedores', error)
                openNotification(true, 'Falha ao carregar os fornecedores');
            }
        }
    
        loadSuppliers();
    }, []);

    const deleteSupplier = async (id) => {
        try {
            await api.delete(`/suppliers/${id}`);
            setSuppliers(suppliers.filter(supplier => supplier.id !== id));
        } catch (error) {
            openNotification(true, 'Falha ao tentar remover o fornecedor');
        }
    }

    return (
        <Flex justify="center" style={{height: '100%', marginTop: '10px'}}>
            {contextHolder}
            <Row style={{width: '95%'}} align="center">
                <Col span={24}>
                    <Layout>
                        <Table
                            // style={{height: '100%', width: '100%'}}
                            scroll={{
                                y: 'calc(100vh - 250px)', // Altura do conteúdo rolável
                            }}
                            bordered
                            pagination={{
                                position: ['bottomCenter'],
                                pageSize: 25
                            }}
                            columns={[
                                {
                                    title: 'Nome',
                                    dataIndex: 'nome',
                                    key: 'nome',
                                },
                                {
                                    title: 'Nome',
                                    dataIndex: 'nome',
                                    key: 'nome',
                                },
                                {
                                    title: 'CNPJ',
                                    dataIndex: 'cnpj',
                                    key: 'cnpj',
                                },
                                {
                                    title: 'Endereço',
                                    dataIndex: 'endereco',
                                    key: 'endereco',
                                },
                                {
                                    title: 'Telefone',
                                    dataIndex: 'telefone',
                                    key: 'telefone',
                                },
                                {
                                    title: 'E-mail',
                                    dataIndex: 'email',
                                    key: 'email',
                                },
                                {
                                    title: 'Data de Criação',
                                    dataIndex: 'dataCriacao',
                                    key: 'dataCriacao',
                                },
                                {
                                    title: 'Data de Atualização',
                                    dataIndex: 'dataAtualizacao',
                                    key: 'dataAtualizacao',
                                },
                                {
                                    title: 'Remoção',
                                    dataIndex: 'Remocao',
                                    key: 'Remocao',
                                    render: (_, record) => (
                                        <Popconfirm
                                            title="Remover o fornecedor"
                                            description="Você tem certeza que deseja remover o fornecedor?"
                                            onConfirm={() => deleteSupplier(record.id)}
                                            okText="Sim"
                                            cancelText="Não"
                                        >
                                            <a href="#"> Remover </a>
                                        </Popconfirm>
                                    ),
                                },
                                {
                                    title: 'Edição',
                                    dataIndex: 'Edicao',
                                    key: 'Edicao',
                                    render: (_, record) => (
                                        <Link to={`/update/${record.id}`}>Editar</Link>
                                        // <Button type="primary">Editar</Button>
                                    ),
                                },
                                {
                                    title: 'Visualizar',
                                    dataIndex: 'Visualizar',
                                    key: 'Visualizar',
                                    render: (_, record) => (
                                        <Link to={`/detail/${record.id}`}>Visualizar</Link>
                                    ),
                                }
                            ]}
                            dataSource={suppliers}
                            size="small"
                        />
                    </Layout>

                    <Button type="primary" style={{marginTop: '20px'}} onClick={() => {
                        navigate('/create');
                    }}
                    >
                        Adicionar Fornecedor
                    </Button>
                </Col>
            </Row>
        </Flex>
    )
}

export default TableView;