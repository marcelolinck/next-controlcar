
export default class Cliente{
    #id:string
    #nome: string
    #idade: number

    

    constructor(nome:string, idade:number, id:string){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    //Precisa ter tres elementos dentro de cliente, pois a classe cliente exige isso
    static vazio(): Cliente{
        return new Cliente('', 0, '')
    }

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }
}