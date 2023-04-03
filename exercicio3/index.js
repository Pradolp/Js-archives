// const min = 0;
// const max = 50;
// let rand = random(min, max);

const fizzBuzz = (x) =>{
    const divBy3 = x % 3;
    const divBy5 = x % 5;
    if (typeof x !== 'number'){
        return "não é número";
    }
    
    if(divBy3 === 0 && divBy5 == 0){
        return `FizzBuz`; 
    }

    if(divBy3 === 0){
        return `Fizz`;
    }

    if(divBy5 === 0){
        return `Buzz`;
    }
    return x;
}
console.log('a', fizzBuzz('a'));
for(let i = 0; i <= 50; i++){
    console.log(i, fizzBuzz(i));
}

// Função para pegar um número entre 0 e 100
// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
    
// }

