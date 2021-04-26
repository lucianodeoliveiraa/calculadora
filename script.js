const valor;
function inserir(num){ 
   const numero = document.querySelector("#valor").innerHTML
   valor = document.querySelector("#valor").innerHTML = numero + num;
}
function limpar(){ 
    document.querySelector("#valor").innerHTML ="";
 }

function igual(){
   const resultado = eval(valor);
   document.querySelector("#valor").innerHTML = resultado
}
