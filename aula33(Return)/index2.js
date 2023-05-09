function calcularAreaBaseCubo(base, altura){
    return base * altura;
}

function calcularVolumeCubo(comprimento){
    const areaBase = calcularAreaBaseCubo(base, altura);
    return areaBase * comprimento;
}

const base = 3;
const altura = 3;
const comprimento = 4;

console.log(calcularVolumeCubo(comprimento));