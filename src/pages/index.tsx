import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useState } from "react"


export default function Home() {

    //Responsavel por exibir e trocar estados de tabela.
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 28, '4'),
    new Cliente('João', 32, '5'),
  ]

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir`, cliente.nome)
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }



  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500`}>

      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao 
                  onClick={novoCliente}
                  cor="green" 
                  className="mb-4">
                Novo Cliente
              </Botao>

            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>

        ) : (

          <Formulario cliente={cliente} 
          clienteMudou={salvarCliente}
          cancelado={() =>setVisivel('tabela')}
          />

        )}

      </Layout>
    </div>
  )
}
