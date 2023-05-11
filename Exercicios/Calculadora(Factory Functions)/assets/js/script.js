function criaCalculadora() {

    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
        },

        clearDisplay() {
            this.display.value = '';
        },
        //      METÓDO PARA DELETAR O ULTIMO VALOR(MUITO INTERESSANTE), NÃO ENTENDI MUITO BEM O POR QUE DO ZERO
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        doCalculs() {
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

        },


        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);

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
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();