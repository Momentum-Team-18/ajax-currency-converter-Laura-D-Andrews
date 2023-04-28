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

    // country codes - needs to be a dropdown box
    let countryCodes = Object.keys(makeAnArray);
    for (code of countryCodes) {
      countryCodes = document.createElement("div");
      countryCodes.innerText = `${code}`;
      containerBox.appendChild(countryCodes);
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
    inputAmountBox.innerText = "";
    containerBox.appendChild(inputAmountBox);
    inputAmountBox.classList.add("inputAmount");
    console.log(inputAmountBox);

    // base currency box
    let baseCurrency = document.createElement("div");
    baseCurrency.innerText = "USD";
    containerBox.appendChild(baseCurrency);
    baseCurrency.classList.add("baseCurrency");
    console.log(baseCurrency);

    // let targetFunction = (countryCodes, countryRates) =>

    
  });
