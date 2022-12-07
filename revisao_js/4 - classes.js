
//crinando uma classe em javascript


class Animal{

     constructor(f){

        this.familia = f

     }


     andar = () =>{
        return "Andando ......"
    }
}





class Cachorro extends Animal {

    constructor(n,i){
        //enviando o atributo familia para o construtor da classe pai senão ela dá err

        super('Carnivoros')
        this.nome = n;
        this.idade = i;

    }


    latir(){
        return `${this.nome} ": au! au!"`
    }

 }

 //instanciando um objeto da classe  

 let rex = new Cachorro('rex',2);

 //chamando os atributos
 
 console.log(rex.nome);

 //chamando metodo
 console.log(rex)
 console.log(rex.latir());
 console.log(rex.andar());


 








