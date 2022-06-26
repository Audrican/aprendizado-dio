"use strict";
let deposito = document.getElementById("soma");
let botaoatualizar = document.getElementById('botaosoma');
let botaolimpar = document.getElementById('botaolimpa');
let saldo = document.getElementById('camposaldo');
let saldototal = 0;
function AdicionarAoSaldo(deposito) {
    saldototal = saldototal + deposito;
    saldo.innerHTML = saldototal.toString();
    limpardeposito();
}
;
function limpardeposito() {
    deposito.value = "";
}
;
function limparsaldo() {
    saldo.innerHTML = "";
}
botaoatualizar.addEventListener("click", function () {
    AdicionarAoSaldo(Number(deposito.value));
});
botaolimpar.addEventListener("click", function () {
    limparsaldo();
});
