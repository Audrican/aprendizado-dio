function verificar(texto){
    let frase = document.getElementById("texto").value;
    if (!frase) {
        return document.getElementById("resposta").innerHTML = "Insira uma frase";
        
    }
    if(frase.toLowerCase().replace(/ /g,"").split("").reverse().join("") === frase.toLowerCase().replace(/ /g,"")) { //lowercase para ser case-insensitive, replace para tirar espaços (/ /g para tirar todos os espaços), split, reverse join para reverter a frase
        return document.getElementById("resposta").innerHTML = `${frase} é um palíndromo`;
    } else {
        let reverso = frase.split("").reverse().join("");
        return document.getElementById("resposta").innerHTML = `${frase} não é um palíndromo, em ordem reversa fica ${reverso}`;
    }

}