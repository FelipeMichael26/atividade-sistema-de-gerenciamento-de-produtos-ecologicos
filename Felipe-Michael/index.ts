let numero:number = 10;

console.log(numero);

let nome: string = "Felipe";

console.log(nome);

const pi:number =  3.14;

console.log(pi);

function saudacao(nome:string, idade:number){
    console.log(` ola eu sou ${nome} e tenho ${idade} anos `);
}

const nomeUsuario:string = "Felipe";
const idade:number = 22;

saudacao(nomeUsuario,idade);

const pessoa = {
    nome:"Cactus McCoy",
    idade:24,
    cidade:"Peixoto",
    apresentar: function ():string{
        return `Ola meu nome é ${this.nome}, e tenho ${this.idade} e sou da cidade de ${this.cidade}`
    }
}

console.log(pessoa.apresentar());

function somar(a: number, b: number): number{
    return a+b;
}

console.log(somar(3,4));
