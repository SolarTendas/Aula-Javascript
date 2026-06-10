function Calculate() {
let nota1 = Number(document.getElementById('nota1').value)
let nota2 = Number(document.getElementById('nota2').value)
let nota3 = Number(document.getElementById('nota3').value)
let Media = (nota1 + nota2 + nota3)/3
// let notaesperada = 21-(nota1+nota2)

// if((nota1+nota2) == 21){
//     document.write(`Você foi aprovado!!!<br>`);
//     document.write(`Sua nota é ${Media}`);
// } else{
//     document.write(`A nota que precisa tirar é ${notaesperada}`)
// }
if(Media >= 7){
    document.write(`Você foi aprovado!!!<br>`);
    document.write(`Sua nota é ${Media}`);
} else{
    document.write(`Você Reprovou!!<br>`);
    document.write(`Sua nota é ${Media}<br>`);
    let notaesperada = 10-(Media)
    document.write(`A nota que precisa tirar é no exame final é: ${notaesperada}`)
}
}

// for (let i = 0; i <= 10; i++){
//     console.log(i * 7)
// }

var executando = true;
var pagina = 0;

while (executando) {
    console.log(pagina);
    pagina++;
    executando = (pagina <= 10)
}

// let a = 10; 
// let b = 5;

// if (a + b > 10) {
//     document.write("A conta deu maior que 10")
// } else {
//     document.write("A conta deu menor que 10")
// }




// console.log(a == b); //Igualdade
// console.log(a != b); //Desigualdade, ! = inverte o valor booleano(Negação)
// console.log(a > b); //Maior que
// console.log(a < b); //Menor que


// console.log(a + b); //Soma
// console.log(a - b); //Subtração
// console.log(a * b); //Multiplicação
// console.log(a / b); //Divisão
