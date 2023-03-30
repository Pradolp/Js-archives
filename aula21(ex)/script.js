function media(){
    const num1 = Number(document.querySelector('#nota1').value);
    const num2 = Number(document.querySelector('#nota2').value);
    const conteudo = document.querySelector('.conteudo');
    console.log(num1, num2);
    
    if(calc(num1, num2) >= 7){
        conteudo.innerHTML = `Sua média foi: ${calc(num1, num2)} e você está aprovado!`;
    }else{
        conteudo.innerHTML = "Reprovado!"
    }

   function calc(num1, num2){
    return (num1 + num2)/2;
   }
}

// Do chat GPT:
/* function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var media = (nota1 + nota2) / 2;
    document.getElementById("resultado").innerHTML = "A média é " + media.toFixed(2) + ".";
} */