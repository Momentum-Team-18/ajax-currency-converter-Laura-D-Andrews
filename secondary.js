let baseCurrency = document.createElement("div");
baseCurrency.innerText = "USD";
containerBox.appendChild(baseCurrency);
baseCurrency.classList.add("baseCurrency");
console.log(baseCurrency);

let headerBox = document.createElement("div");
headerBox.innerText = "Currency Converter";
containerBox.appendChild(headerBox);
headerBox.classList.add("header");
console.log(headerBox);

let fromText = document.createElement("div");
fromText.innerText = "From";
containerBox.appendChild(fromText);
fromText.classList.add("from");

let toText = document.createElement("div");
toText.innerText = "To";
containerBox.appendChild(toText);
toText.classList.add("to");

let amountText = document.createElement("div");
amountText.innerText = "Amount";
containerBox.appendChild(amountText);
amountText.classList.add("amount");

let usDollar = document.createElement("div");
usDollar.innerText = "1 USD is equal to:";
containerBox.appendChild(usDollar);
usDollar.classList.add("dollar");
