retorno = '{"nome":"William","idade":23}' 

json = JSON.parse(retorno)   //Descerializar
console.log(json)

cadastro = {
    nome : 'Vinicius',
    idade : 18
}

json = JSON.stringify(cadastro)  //Serializar
console.log(json)

// let chamada = [
//     {
//         ra : 1,
//         nome : 'Antoni'
//     },
//     {
//         ra : 2,
//         nome : 'Antony'
//     },
//     {
//         ra : 3,
//         nome : 'Benicio'
//     },
//     {
//         ra : 4,
//         nome : 'Caio'
//     },
//     {
//         ra : 5,
//         nome : 'Davi'
//     },
//     {
//         ra : 6,
//         nome : 'Eduardo'
//     },
//     {
//         ra : 7,
//         nome : 'Felipe'
//     },
//     {
//         ra : 8,
//         nome : 'Gabriel'
//     }
// ]


// for (aluno of chamada) {
//     console.log(aluno.ra, aluno.nome)
// }




// let pessoa = {
//     cabelo : 'Curto/Liso',
//     corCabelo : 'Ruivo',
//     altura : 1.85,
//     corPele : 'Branca', 
//     calçado : 42,
//     doencas : {
//         celiaco : true,
//         oculos: true,
//         cadeirante: false
//     },
//     idade : 18,
//     Carro : {
//         modelo : 'Frontier Attack',
//         marca : 'Mitsubishi',
//         ano : 2015,
//         cor : 'Vermelho'
//     },
//     materias: ['Web', 'Banco de Dados', 'Extensionista','UI/UX']
// }

// for (materia of pessoa.materias) {      //Varre a array de materias e retorna os valores da array (of = value) (in = índice) 
//     console.log(materia)
// }



// console.log(pessoa);
// console.log(`Qual a altura da pessoa? ${pessoa.altura}`);
// console.log(`A pessoa é celíaca? ${pessoa.doencas.celiaco}`);
// console.log(`Qual o tipo de cabelo da pessoa? ${pessoa.cabelo}`);
// console.log(pessoa.materias);