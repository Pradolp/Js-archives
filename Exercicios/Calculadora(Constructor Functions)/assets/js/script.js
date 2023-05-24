function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.cliqueEnter();
    };

    this.cliqueEnter = () => {
        this.display.addEventListener('keyup', (e) => {

            if (e.keyCode === 13) {
                this.doCalculs();

            }
        })
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };
    //      METÓDO PARA DELETAR O ULTIMO VALOR(MUITO INTERESSANTE), NÃO ENTENDI MUITO BEM O POR QUE DO ZERO
    //      Explicando: o 0 fala de onde deve iniciar, e o -1 onde parar por exemplo:
    //      seus indicies neg:  -5-4-3-2-1
    //      seus indicies:      012345
    //      temos o número:     789212
    //      então quando digo que eu quero de 0 a -1 não é que eu remova, é que eu quero que ele vá até o indicie -1
    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.doCalculs = () => {
        // usar a funcao eval porém tem perigo em caso de seguraca
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if (!conta) {
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
            this.clearDisplay();
            return;
        }

    };


    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.adicionaValorDoParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.deleteOne();
            }

            if (el.classList.contains('btn-eq')) {
                this.doCalculs();
            }

        })
    };

    this.adicionaValorDoParaDisplay = valor => {
        this.display.value += valor;
        // SE VOCÊ TIRAR ISSO, AO APERTAR ENTER ELE VAI FICAR CONCATENANDO OS NÚMEROS, PQ É AONDE VAI ESTAR O FOCO
        this.display.focus();
    };


}

const calculadora = new Calculadora();
calculadora.inicia();