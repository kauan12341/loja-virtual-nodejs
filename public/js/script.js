const inputValue = document.querySelector(".valor-contado");
const valorInputRange = document.querySelector("#valorInputRange");

function rangeSlide(){
  valorInputRange.innerHTML = inputValue.value;
}

/*const currencyMoeda = document.querySelector(".currency-moeda")
var texto = currencyMoeda.toLocateString("pt-BR",{style:"currency",currency:"BRL"})
currencyMoeda.innerHTML = texto;*/
