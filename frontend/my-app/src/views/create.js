import React, { useState } from 'react';
import api from '../services/api';

const CreateSupplier = () => {
  const [supplier, setSupplier] = useState({
    nome: '',
    cnpj: '',
    endereco: '',
    telefone: '',
    email: '',
    dataCriacao: '',
    dataAtualizacao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplier({
      ...supplier,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/suppliers', supplier);
      console.log('Fornecedor cadastrado com sucesso:', response.data);
      setSupplier({
        nome: '',
        cnpj: '',
        endereco: '',
        telefone: '',
        email: '',
        dataCriacao: '',
        dataAtualizacao: ''
      });
    } catch (error) {
      console.error('Houve um erro ao cadastrar o fornecedor:', error);
    }
  };

  return (
    <div>
      <h2>Cadastrar Fornecedor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={supplier.nome} onChange={handleChange} />
        </label>
        <br />
        <label>
          CNPJ:
          <input type="text" name="cnpj" value={supplier.cnpj} onChange={handleChange} />
        </label>
        <br />
        <label>
          Endereço:
          <input type="text" name="endereco" value={supplier.endereco} onChange={handleChange} />
        </label>
        <br />
        <label>
          Telefone:
          <input type="text" name="telefone" value={supplier.telefone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={supplier.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Data de Criação:
          <input type="datetime-local" name="dataCriacao" value={supplier.dataCriacao} onChange={handleChange} />
        </label>
        <br />
        <label>
          Data de Atualização:
          <input type="datetime-local" name="dataAtualizacao" value={supplier.dataAtualizacao} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CreateSupplier;
