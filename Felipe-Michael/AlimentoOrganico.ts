import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico{
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];
    constructor(nome:string,preco:number,dataValidade: Date,ingredientes: string[]){
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }
}