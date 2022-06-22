let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldototal = 0

limparSaldo()

function somarAoSaldo(soma:number){
    if (campoSaldo){
        saldototal += soma
        campoSaldo.innerHTML = saldototal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma(){
    soma.value= " ";
}

function limparSaldo(){
    if (campoSaldo){
        saldototal= 0;
        campoSaldo.innerHTML= saldototal.toString();
    }    
}

if (botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
