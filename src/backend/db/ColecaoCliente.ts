import Cliente from '../../core/Cliente'
import ClienteRepositorio from '../../core/ClienteRepositorio'
import firebase from '../config'

export default class ColecaoCliente implements ClienteRepositorio{

    //Convertendo a classe para que o firestore consiga criar os dados em sua plataforma
    conversor = {
        toFirestore(cliente: Cliente){
            return{
                nome:cliente.nome,
                idade: cliente.idade,
            }
        },

        //O retorno do firestore
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente{
            const dados = snapshot?.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id) 
        
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente>{
        if (cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente    
        }else{
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }


    }
    async excluir(cliente: Cliente): Promise<void>{
        return this.colecao().doc(cliente.id).delete()
    }
    async obterTodos(): Promise<Cliente[]>{
        const query = await this.colecao().get()
        //Verifica se há documentos a exibir, caso contrário retorna um array nulo
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase
        .firestore().collection('clientes')
        .withConverter(this.conversor)
    }
}