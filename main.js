let containerBox = document.querySelector("#containerBox");

let ratesUrl =
  "https://openexchangerates.org/api/latest.json?app_id=d176522a23eb485885d8f97ffb0cf101";

fetch(ratesUrl, {
  // mode: 'no-cors',
  method: "GET",
  headers: { "Content-Type": "application.json" },
})
  .then(function (response) {
    return response.json();
  })
  .then((parsedResponse) => {
    console.log(parsedResponse.rates);
    console.log(Array.isArray(parsedResponse));
    const makeAnArray = parsedResponse.rates;

    //codes and codesBox - not functioning as dropdown yet
    let codesBox = document.createElement("div");
    codesBox.innerText = "";
    containerBox.appendChild(codesBox);
    codesBox.classList.add("countryCodes");
    console.log(codesBox);

    let countryCodes = Object.keys(makeAnArray);
    for (code of countryCodes) {
      countryCodes = document.createElement("div");
      countryCodes.innerText = `${code}`;
      codesBox.appendChild(countryCodes);
      countryCodes.classList.add("countryCodes");
      console.log(countryCodes);
    }




    // country exchange rates
    let countryRates = Object.values(makeAnArray);
    for (rate of countryRates) {
      countryRates = document.createElement("div");
      countryRates.innerText = `${rate}`;
      containerBox.appendChild(countryRates);
      countryRates.classList.add("countryRates");
      console.log(countryRates);
    }
    // $ input box
    let inputAmountBox = document.createElement("textarea");
    containerBox.appendChild(inputAmountBox);
    inputAmountBox.classList.add("inputAmount");
    console.log(inputAmountBox);

    // exchange box - when click calculate button exchange amount shows here
    let exchangeBox = document.createElement("div");
    exchangeBox.innerText = ''
    containerBox.appendChild(exchangeBox);
    console.log(exchangeBox);
    exchangeBox.classList.add("exchangeBox");



    // creates calculate button
    let calculateButton = document.createElement("div");
    calculateButton.innerText = "calculate";
    containerBox.appendChild(calculateButton);
    calculateButton.classList.add("calculate")
   

    // calculate button listener - click calculate button and currency conversion appears in exchange boc
    calculateButton.addEventListener("click", (event) => { 
      console.log(event.target.innerText);
      let answer = inputAmountBox.value * `${rate}`;
      console.log(answer);
      exchangeBox.innerText = answer
    });
  });




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

let fromBox = document.createElement("div");
fromBox.innerText = "From";
containerBox.appendChild(fromBox);
fromBox.classList.add("from");
console.log(fromBox);

let toBox = document.createElement("div");
toBox.innerText = "To";
containerBox.appendChild(toBox);
toBox.classList.add("to");
console.log(toBox);
