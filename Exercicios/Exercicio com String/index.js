const nome = prompt("Digite o seu nome");
console.log(typeof(nome));


document.body.innerHTML = `O seu nome é ${nome} <br>`;
document.body.innerHTML += `Seu nome tem ${nome.length - 3} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br>` ;
document.body.innerHTML += `Qual o primeiro índicie da letra A no seu nome? ${nome.indexOf('a')}<br>`; //nao consegui
document.body.innerHTML += `Qual o ultimo índicie da letra do seu nome? ${nome.lastIndexOf("a")} <br>`; //nao consegui
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br>`;
// Uma maneira de fazer:
// document.body.innerHTML += `Seu nome com Letras maísculas: ${nome.replace('LUCAS SILVA DO PRADO')} <br>`;
document.body.innerHTML += `Seu nome com Letras maísculas: ${nome.toUpperCase()} <br>`;
document.body.innerHTML += `Seu nome com Letras minusculas: ${nome.toLowerCase()} <br>`;


