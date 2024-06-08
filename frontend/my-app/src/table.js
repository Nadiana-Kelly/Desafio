function Table(props) {
    const {suppliers} = props;

    let lista = suppliers.map((e, index) => {
        return (
            <tr key={index}>
                <th scope="row">{e.nome}</th>
                <th scope="row">{e.cnpj}</th>
                <th scope="row">{e.endereco}</th>
                <th scope="row">{e.telefone}</th>
                <th scope="row">{e.email}</th>
                <th scope="row">{e.dataCriacao}</th>
                <th scope="row">{e.dataAtualizacao}</th>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">CNPJ</th>
                        <th scope="col">Endereco</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Data de Criação</th>
                        <th scope="col">data de Atualização</th>
                    </tr>
                </thead>
                <tbody>
                    {lista}
                </tbody>
            </table>
        </div>
    )
}

export default Table  