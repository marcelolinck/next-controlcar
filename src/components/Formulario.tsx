import Entrada from "./Entrada";
import { useState } from 'react'
import Cliente from '../core/Cliente'
import Botao from "../components/Botao" 

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada 
                somenteLeitura    
                texto="Código" 
                    valor={id} 
                    tipo="text" />

            ) : false}
            <Entrada texto="Nome" valor={nome} tipo="text" valorMudou={setNome} className="mb-2.5"/>
            <Entrada texto="Idade" valor={idade} tipo="number" valorMudou={setIdade} className="mb-4"/>
            <div className="flex justify-end mt-3">
                <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}> 
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}> 
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}