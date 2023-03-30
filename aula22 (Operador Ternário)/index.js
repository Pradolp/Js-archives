// Operação ternária é uma condição para encurtar texto
// Exemplo:
const pontuacaoUsuario = 1000;   
                                     // (?) se for verdade (:) se não for verdade
const operacao = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Padrão'

console.log(operacao);


// Para setar um valor padrão FallBack
const corUsuario = null;
            //    se ele não escolher nenhuma o padrão vai ser black
                         // (||) => ou
const corPadrao = corUsuario || 'black';

