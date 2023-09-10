import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTabelaOuForm from './useTabelaOuForm'


export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()
    const {exibirForm, exibirTabela, tabelaVisivel} = useTabelaOuForm()
  
    //Responsavel por exibir e trocar estados de tabela.
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])


  useEffect(obterTodos, [])


  function obterTodos() {
    repo.obterTodos().then(clientes=>{
      setClientes(clientes)
      exibirTabela()
    })

  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirForm()
  }
  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirForm()
  }
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  return{
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
  }
}