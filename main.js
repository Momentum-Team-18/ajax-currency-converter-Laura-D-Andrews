let containerBox = document.querySelector("#containerBox");
let inputAmountBox = document.querySelector("#inputAmountBox")
let form = document.querySelector("#form")
let convertButton = document.querySelector('.convertButton')
let startOverButton = document.querySelector('.startOverButton')
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

    let codesBox = document.createElement("select");
    codesBox.innerText = "";
    containerBox.appendChild(codesBox);
    codesBox.classList.add("countryCodes");
    console.log(codesBox);

    let countryCodes = Object.keys(makeAnArray);
    for (code of countryCodes) {
      countryCodes = document.createElement("option");
      countryCodes.innerText = `${code}`;
      codesBox.appendChild(countryCodes);
      countryCodes.classList.add("countryCodes");
      console.log(countryCodes);
    }

    let countryRates = Object.values(makeAnArray);
    console.log(Array.isArray(countryRates));
    for (rate of countryRates) {
    }

    let codeRateArray = Object.entries(makeAnArray);
    console.log(codeRateArray);
    console.log(Array.isArray(codeRateArray));

    let ratesBox = document.createElement("div");
    ratesBox.innerText = "0.00";
    containerBox.appendChild(ratesBox);
    console.log(ratesBox);
    ratesBox.classList.add("ratesBox");

    let exchangeBox = document.createElement("div");
    exchangeBox.innerText = "0.00";
    containerBox.appendChild(exchangeBox);
    console.log(exchangeBox);
    exchangeBox.classList.add("exchangeBox");

    // event listeners
    codesBox.addEventListener("click", (event) => {
      console.log(event.target.innerText);
      let country = "placeholder";
      console.log(country);
      ratesBox.innerText = country;
    });

    convertButton.addEventListener("click", (event) => {
      console.log(event.target.innerText);
      let answer = inputAmountBox.value * `${rate}`;
      console.log(answer);
      exchangeBox.innerText = answer + "" + `${countryCodes.innerText}`
    });

    startOverButton.addEventListener('click', (event) => {
      event.preventDefault()
      exchangeBox.replaceChildren()
      ratesBox.replaceChildren()
      form.reset()
    })

    // other JS created elements
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

    let usDollar = document.createElement('div')
    usDollar.innerText = "1 USD is equal to"
    containerBox.appendChild(usDollar)
    usDollar.classList.add("dollar")
  });
