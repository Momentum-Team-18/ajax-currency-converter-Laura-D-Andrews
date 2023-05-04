let containerBox = document.querySelector("#containerBox");
let countryCodesBox = document.querySelector("#countryCodesBox"); 
let inputAmountBox = document.querySelector("#inputAmountBox");
let form = document.querySelector("#form");
let convertButton = document.querySelector("#convertButton");
let startOverButton = document.querySelector("#startOverButton");
let ratesUrl =
  "https://openexchangerates.org/api/latest.json?app_id=d176522a23eb485885d8f97ffb0cf101";

fetch(ratesUrl, {
  method: "GET",
  headers: { "Content-Type": "application.json" },
})
  .then(function (response) {
    return response.json();
  })
  .then((parsedResponse) => {
    const makeAnArray = parsedResponse.rates;
   
    let countryCodes = Object.keys(makeAnArray);
    for (let code of countryCodes) {
      countryCodes = document.createElement("option");
      countryCodes.innerText = `${code}`;
      countryCodesBox.appendChild(countryCodes);
      countryCodes.classList.add("countryCodes");
    }

    let countryRates = Object.values(makeAnArray);
    for (rate of countryRates) {
    }

    let userOutputBox = document.createElement("div");
    containerBox.appendChild(userOutputBox);
    userOutputBox.classList.add("outputBox");
    

    let usdToExchangeRateBox = document.createElement("div");
    containerBox.appendChild(usdToExchangeRateBox);
    usdToExchangeRateBox.classList.add("exchangeRateBox");
    

    countryCodesBox.addEventListener("change", (event) => {
      let currencyCode = event.target.value;
      let exchangeRate = makeAnArray[currencyCode];
      let usdToExchangeRateText = `${exchangeRate} ${currencyCode}`;
      usdToExchangeRateBox.innerText = usdToExchangeRateText;
    });

    convertButton.addEventListener("click", (event) => {
      let userInputAmount = inputAmountBox.value;
      let userCurrencyCode = countryCodesBox.value;
      let userExchangeRate = makeAnArray[userCurrencyCode]; 
      let userMoneyAmount = userExchangeRate * userInputAmount;
      userOutputBox.innerText = userMoneyAmount;
    });

    startOverButton.addEventListener("click", (event) => {
      console.log(event.target.innerText);
      event.preventDefault();
      usdToExchangeRateBox.replaceChildren();
      userOutputBox.replaceChildren();
      form.reset();
    });
  });
