
console.log(currencies)

let containerBox = document.querySelector("#containerBox");
console.log(containerBox)

// header
let headerBox = document.createElement("div")
headerBox.innerText = "Currency Calculator"
containerBox.appendChild(headerBox)
headerBox.classList.add("header")
console.log(headerBox)

// from
let fromBox = document.createElement('div')
fromBox.innerText = "From"
containerBox.appendChild(fromBox)
fromBox.classList.add("from")
console.log(fromBox)

// to
let toBox = document.createElement('div')
toBox.innerText = "To"
containerBox.appendChild(toBox)
toBox.classList.add("to")
console.log(toBox)

// base currency
let baseCurrencyBox = document.createElement("div");
baseCurrencyBox.innerText = "USD";
containerBox.appendChild(baseCurrencyBox);
baseCurrencyBox.classList.add("baseCurrency");
console.log(baseCurrencyBox)

// target currency
let targetCurrencyBox = document.createElement("div");
targetCurrencyBox.innerText = "EUR";
containerBox.appendChild(targetCurrencyBox);
targetCurrencyBox.classList.add("targetCurrency");
console.log(targetCurrencyBox)

// input amount
let inputAmountBox = document.createElement('div')
inputAmountBox.innerText = "1,000"
containerBox.appendChild(inputAmountBox)
inputAmountBox.classList.add("inputAmount")
console.log(inputAmountBox)

// output amount
let outputAmountBox = document.createElement('div')
outputAmountBox.innerText = "1,000"
containerBox.appendChild(outputAmountBox)
outputAmountBox.classList.add("outputAmount")
console.log(outputAmountBox)

// exchange equation box
let exchangeEquationBox = document.createElement('div')
exchangeEquationBox.innerText = "1 EUR = 1 USD"
containerBox.appendChild(exchangeEquationBox)
exchangeEquationBox.classList.add("exchangeEquation")
console.log(exchangeEquationBox)

// base flag box
let baseFlagBox = document.createElement('div')
baseFlagBox.innerText = ""
containerBox.appendChild(baseFlagBox)
baseFlagBox.classList.add("baseFlag")
console.log(baseFlagBox)
// needs to be img so targetFlagBox.src

// target flag box
let targetFlagBox = document.createElement('div')
targetFlagBox.innerText = ""
containerBox.appendChild(targetFlagBox)
targetFlagBox.classList.add("targetFlag")
console.log(targetFlagBox)
// needs to be img so targetFlagBox.src