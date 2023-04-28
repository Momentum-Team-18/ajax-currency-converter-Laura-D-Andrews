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

    let countryCodes = Object.keys(makeAnArray);
    console.log(countryCodes);
    countryCodes = document.createElement("div");
    countryCodes.innerText = "placeholder"
    containerBox.appendChild(countryCodes);
    countryCodes.classList.add("countryCodes");
    console.log(countryCodes);

    
let inputAmountBox = document.createElement("textarea")
inputAmountBox.innerText = "1,000"
containerBox.appendChild(inputAmountBox)
inputAmountBox.classList.add("inputAmount")
console.log(inputAmountBox)

    let countryRates = Object.values(makeAnArray);
    console.log(countryRates);
    countryRates = document.createElement("div");
    countryRates.value = "placeholder"
    containerBox.appendChild(countryRates);
    countryRates.classList.add("countryRates");
    console.log(countryRates);


  });
