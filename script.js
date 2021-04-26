var numeros ="";
function inserir(num){ 
   var numero = document.querySelector("#valor").innerHTML
   numeros = document.querySelector("#valor").innerHTML = numero + num;
}
function limpar(){ 
    document.querySelector("#valor").innerHTML ="";
 }

function igual(){
   var resultado = eval(numeros);
   document.querySelector("#valor").innerHTML = resultado
}
